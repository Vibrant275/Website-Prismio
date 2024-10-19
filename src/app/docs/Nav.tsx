export interface DocItem {
    href?: string;
    label: string;
    items?: DocItem[];
}

export interface DocsSection {
    label: string;
    href?: string;
    items?: DocItem[];
}

export const DocsNavList: DocsSection[] = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Get Started",
        href: "/getting_started",
    },
    // {
    //     label: "",
    //     items: [
    //         { href: "/docs/strings", label: "Overview" },
    //         {
    //             label: "Advanced Topics",
    //             items: [
    //                 { href: "/docs/strings", label: "Create a New Workspace" },
    //                 { href: "/docs/strings", label: "Join an Existing Workspace" },
    //             ],
    //         },
    //         { href: "/docs/getting-started/import-code", label: "Import Code" },
    //         { href: "/docs/getting-started/ssh", label: "Setup SSH" },
    //     ],
    // },
    // {
    //     header: "Workspaces",
    //     items: [
    //         { href: "/docs/strings", label: "Overview" },
    //         {
    //             label: "Management",
    //             items: [
    //                 { href: "/docs/workspaces/navigation", label: "Navigation" },
    //                 { href: "/docs/workspaces/members", label: "Members" },
    //             ],
    //         },
    //         { href: "/docs/strings", label: "Repositories" },
    //     ],
    // },
    // Additional sections...
];

export default function DocsNav() {
    return (
        <div>

        </div>
    );
}
