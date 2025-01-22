import DocsNav from "@/app/docs/Nav";
import React from "react";

interface DocsLayoutProps {
    children: React.ReactNode;
}

export default function DocsLayout({children}: DocsLayoutProps) {
    return (
        <>
            <main className="relative container z-10 mb-12 flex-grow">
                <div className="flex flex-row gap-4">
                    <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4 w-[240px]">
                        <DocsNav/>
                    </div>
                    {children}
                </div>
            </main>
        </>
    );
}