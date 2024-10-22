import {Image} from "@nextui-org/react";
import DocsNav from "@/app/docs/Nav";
import React from "react";

// import manifest from "@/config/routes.json";
// import {DocsSidebar} from "@/components/docs/sidebar";
// import {ScriptProviders} from "@/components/scripts/script-providers";

interface DocsLayoutProps {
    children: React.ReactNode;
}

export default function DocsLayout({children}: DocsLayoutProps) {
    return (
        <>
            <main className="relative container max-w-7xl z-10 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
                <div className="flex flex-row gap-4">
                    <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4 w-[240px]">
                        <DocsNav/>
                    </div>
                    {children}
                </div>
            </main>
            {/*<div*/}
            {/*    aria-hidden="true"*/}
            {/*    className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"*/}
            {/*>*/}
            {/*    /!*<Image removeWrapper alt="docs left background" src="/gradients/docs-left.png" />*!/*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    aria-hidden="true"*/}
            {/*    className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"*/}
            {/*>*/}
            {/*    /!*<Image removeWrapper alt="docs right background" src="/gradients/docs-right.png" />*!/*/}
            {/*</div>*/}

            {/*<ScriptProviders />*/}
        </>
    );
}