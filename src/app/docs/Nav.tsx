// types.ts
export interface DocItem {
    href?: string;  // Optional since not all items will have href
    label: string;
    items?: DocItem[]; // Optional nested items
}

export interface DocsSection {
    header: string;
    items: DocItem[];
}

export const DocsNav: DocsSection[] = [
    {
        header: "Getting Started",
        items: [
            { href: "/docs/strings", label: "Overview" },
            {
                label: "Advanced Topics",
                items: [
                    { href: "/docs/strings", label: "Create a New Workspace" },
                    { href: "/docs/strings", label: "Join an Existing Workspace" },
                ],
            },
            { href: "/docs/getting-started/import-code", label: "Import Code" },
            { href: "/docs/getting-started/ssh", label: "Setup SSH" },
        ],
    },
    {
        header: "Workspaces",
        items: [
            { href: "/docs/strings", label: "Overview" },
            {
                label: "Management",
                items: [
                    { href: "/docs/workspaces/navigation", label: "Navigation" },
                    { href: "/docs/workspaces/members", label: "Members" },
                ],
            },
            { href: "/docs/strings", label: "Repositories" },
        ],
    },
    // Additional sections...
];
