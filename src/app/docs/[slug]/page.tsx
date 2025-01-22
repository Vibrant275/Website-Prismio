import React from "react";
import EditPage from "@/components/EditPageBar";
import {allDocs} from 'contentlayer2/generated'
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/mdx-content";
import {DocsToc} from "@/components/docs/toc";
import {getHeadings} from "@/libs/docs/utils";
import {Route} from "@/libs/docs/page";

interface Params {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<Params["params"][]> {
    return allDocs.map((doc) => ({
        slug: `${doc._raw.flattenedPath}`
    }));
}

async function getDocFromParams({params}: Params) {
    const slug = params.slug.toString();
    const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug);

    if (!doc){}

    const headings = getHeadings(doc?.body.raw);

    const currentRoute: Route = {
        key: doc?._id,
        title: doc?.title,
        path: `/${doc?._raw?.sourceFilePath}`,
    };

    return {doc, headings, currentRoute};
}

export default async function DocsPage({params}: Params) {

    const {doc, headings, currentRoute} = await getDocFromParams({params});

    if (!doc) {
        notFound();
    }

    return (
        <div className={'flex flex-row gap-12 py-7'}>
            <div className={'flex flex-col'}>
                <EditPage docName={params.slug.toString()}/>
                <div className={'my-4 w-full prose prose-neutral'}>
                    <MDXContent code={doc.body.code}/>
                </div>
            </div>

            {headings && headings.length > 0 && (
                <div className="z-10 xl:w-1/2 mt-8 pl-4">
                    <DocsToc headings={headings} />
                </div>
            )}
        </div>
    );
}
