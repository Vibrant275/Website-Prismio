"use client"; // Ensure the component is client-side

import {useMDXComponents} from "@/mdx-components"; // Ensure correct import path
import {compileMDX} from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import React, {ReactNode, useEffect, useState} from "react";
import DocsNav from "@/app/docs/Nav";
import {useRouter} from "next/navigation";
import Vibrant_ID_toolbar from "@/components/Vibrant_ID_toolbar";
import EditPage from "@/components/EditPageBar";
import {slug} from "github-slugger";

interface Params {
    params: {
        slug: string[];
    };
}

export default function DocsPage({params}: Params) {
    const router = useRouter();
    const [content, setContent] = useState<ReactNode | null>(null);
    const [error, setError] = useState<string | null>(null);

    const components = useMDXComponents({});

    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({}); // State for expanded items
    const [activeItem, setActiveItem] = useState<string | null>(null); // State to track the active item

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
    }, [params.slug]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={'flex flex-row'}>
            <DocsNav/>
            <div className={'flex flex-col'}>
                <EditPage docName={params.slug.toString()}/>
                <div className={'ml-4'}>{content}</div>
            </div>

        </div>
    );
}
