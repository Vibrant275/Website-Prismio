import React from "react";
import EditPage from "@/components/EditPageBar";
import {allDocs} from "contentlayer2/generated"
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/mdx-content";
import {DocsToc} from "@/components/docs/toc";
import {getHeadings} from "@/libs/docs/utils";

interface Params {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<Params["params"][]> {
    const paths = allDocs.map((doc) => ({
        slug: `/docs/${doc._raw.flattenedPath}`
    }));
    return paths;
}

async function getDocFromParams({params}: Params) {
    const slug = params.slug.toString();
    const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug);

    if (!doc) {
        null;
    }

    const headings = getHeadings(doc?.body.raw);

    // const currentRoute: Route = {
    //     key: doc?._id,
    //     title: doc?.title,
    //     path: `/${doc?._raw?.sourceFilePath}`,
    // };

    return {doc, headings};
}

export default async function DocsPage({params}: Params) {

    const {doc, headings} = await getDocFromParams({params});

    if (!doc) {
        notFound();
    }

    return (
        <div className={'flex flex-row gap-12 py-7'}>
            <div className={'flex flex-col'}>
                <EditPage docName={params.slug.toString()}/>
                <div className={'my-4'}>
                    <MDXContent code={doc.body.code}/>
                </div>
            </div>

            {headings && headings.length > 0 && (
                <div className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
                    <DocsToc headings={headings} />
                </div>
            )}
        </div>
    );
}
