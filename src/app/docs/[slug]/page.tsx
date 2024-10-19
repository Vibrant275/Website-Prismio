"use client"; // Ensure the component is client-side

import {useMDXComponents} from "@/mdx-components";
import {compileMDX} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import React, {ReactNode, useEffect, useState} from "react";
import DocsNav from "@/app/docs/Nav";
import EditPage from "@/components/EditPageBar";

interface Params {
    params: {
        slug: string[];
    };
}

export default function DocsPage({params}: Params) {
    const [content, setContent] = useState<ReactNode | null>(null);
    const [error, setError] = useState<string | null>(null);

    const components = useMDXComponents({});

    useEffect(() => {
        const fetchContent = async () => {
            const slug = params.slug;
            const response = await fetch(`/api/getMDXContent?slug=${slug}`);

            if (!response.ok) {
                setError("Error loading the document.");
                return;
            }
            const {content: source} = await response.json();

            const {content} = await compileMDX({
                source,
                options: {
                    mdxOptions: {
                        rehypePlugins: [rehypeSlug],
                        remarkPlugins: [remarkGfm],
                    },
                    parseFrontmatter: true,
                },
                components,
            });
            setContent(content);
        };

        fetchContent();
    }, [components, params.slug]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={'flex flex-row gap-12 py-7'}>
           <DocsNav/>
            <div className={'flex flex-col'}>
                <EditPage docName={params.slug.toString()}/>
                <div className={'my-4'}>{content}</div>
            </div>

        </div>
    );
}
