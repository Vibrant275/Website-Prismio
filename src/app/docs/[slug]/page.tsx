"use client"; // Ensure the component is client-side

import { useMDXComponents } from "@/mdx-components"; // Ensure correct import path
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ReactNode, useEffect, useState } from "react";
import { DocsNav, DocsSection } from "@/app/docs/Nav";
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation"; // Ensure you have react-icons installed

interface Params {
    params: {
        slug: string[];
    };
}

export default function DocsPage({ params }: Params) {
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
            const { content: source } = await response.json();

            const { content } = await compileMDX({
                source,
                options: {
                    mdxOptions: {
                        rehypePlugins: [rehypeHighlight, rehypeSlug],
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

    const renderItems = (items: DocsSection['items'], parentPath: string = '') => {
        return (
            <ul>
                {items.map((item) => {
                    const currentPath = `${parentPath}${item.label.replace(/\s+/g, '-').toLowerCase()}`;
                    const hasChildren = item.items && item.items.length > 0;

                    const handleClick = () => {
                        if (hasChildren) {
                            setExpandedItems(prev => ({
                                ...prev,
                                [currentPath]: !prev[currentPath], // Toggle dropdown
                            }));
                        } else {
                            if (item.href != null) {
                                setActiveItem(item.href)
                                router.push(item.href);
                            }
                        }
                    };

                    const isActive = activeItem === currentPath;


                    return (
                        <li key={item.label} className={`relative`}>
                            <div
                                className={`flex items-center cursor-pointer hover:bg-gray-50 ${isActive ? 'bg-blue-500 text-white' : 'bg-transparent'}`} // Change the background color here
                                onClick={handleClick}>
                                {hasChildren && (expandedItems[currentPath] ? <ChevronDown /> : <ChevronRight />)}
                                <span className="ml-2">{item.label}</span>
                            </div>
                            {expandedItems[currentPath] && hasChildren && renderItems(item.items, currentPath)} {/* Render children */}
                        </li>
                    );
                })}
            </ul>
        );
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={'flex flex-row'}>
            <nav className="w-64">
                {DocsNav.map((section, index) => (
                    <div key={index}>
                        <h3>{section.header}</h3>
                        {renderItems(section.items)}
                    </div>
                ))}
            </nav>

            <div className={'ml-4'}>{content}</div> {/* Add margin to the content for separation */}
        </div>
    );
}
