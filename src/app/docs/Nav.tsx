import {useRouter} from "next/navigation";
import {useState} from "react";
import {ChevronDown, ChevronRight} from "lucide-react";

export interface DocItem {
    href?: string;
    label: string;
    lastModified?: string;
    items?: DocItem[];
}

export interface DocsSection {
    label: string;
    href?: string;
    lastModified?: string;
    items?: DocItem[];
}

export interface DocsHistory {
    id: string;
    lastModified: string;
}

export const DocsNavList: DocsSection[] = [
    {
        label: "Home",
        href: "/docs/home",
    },
    {
        label: "Get Started",
        href: "/docs/getting_started"
    },
    {
        label: "ddfg",
        items: [
            {
                href: "/docs/strings",
                label: "Overview" ,
                lastModified: "20th November 2024"
            },
            {
                label: "Advanced Topics",
                items: [
                    {
                        href: "/docs/strings",
                        label: "Create a New Workspace",
                        lastModified: "20th November 2024"
                    },
                    { href: "/docs/strings", label: "Join an Existing Workspace" },
                ],
            },
            { href: "/docs/strings", label: "Import Code" },
            { href: "/docs/strings", label: "Setup SSH" },
        ],
    },
    {
        label: "Workspaces",
        items: [
            { href: "/docs/strings", label: "Overview" },
            {
                label: "Management",
                items: [
                    { href: "/docs/strings", label: "Navigation" },
                    { href: "/docs/strings", label: "Members" },
                ],
            },
            { href: "/docs/strings", label: "Repositories" },
        ],
    },
];

export const DocsHistory: DocsHistory[] = [
    {
        id: "home",
        lastModified: "20th November 2024"
    },
    {
        id: "getting_started",
        lastModified: "20th November 2024"
    },
    {
        id: "strings",
        lastModified: "20th November 2024"
    },
]

export const getLastModifiedByHref = (href: string): string | undefined | null => {
    const section = DocsHistory.find(doc => doc.id === href);
    return section ? section.lastModified : null;
};

export default function DocsNav() {
    const router = useRouter();

    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

    const chevronSize = 16;

    const toggleDropdown = (label: string) => {
        if (openDropdowns.includes(label)) {
            setOpenDropdowns(openDropdowns.filter((item) => item !== label));
        } else {
            setOpenDropdowns([...openDropdowns, label]);
        }
    };

    // Recursive function to render nav items
    const renderNavItems = (items: DocsSection[] | undefined) => {
        if (!items) return null;

        return items.map((section) => {
            const hasChildren = section.items && section.items.length > 0;
            const isDropdownOpen = openDropdowns.includes(section.label);

            return (
                <div key={section.label} className="mb-2">
                    {section.href ? (
                        <div
                            className="cursor-pointer hover:bg-gray-100 pl-4 py-1"
                            onClick={() => router.push(section.href!)}
                        >
                            {section.label}
                        </div>
                    ) : (
                        <>
                            <div
                                className="cursor-pointer hover:bg-gray-100 flex flex-row items-center pl-4 py-1"
                                onClick={() => toggleDropdown(section.label)}
                            >

                                {hasChildren &&
                                    (isDropdownOpen ?
                                            <ChevronDown size={chevronSize} />
                                            : <ChevronRight size={chevronSize}  />
                                    )}

                                <div className={'ml-1'}>{section.label}</div>
                            </div>
                            {hasChildren && isDropdownOpen && (
                                <div className="ml-4">
                                    {renderNavItems(section.items)}
                                </div>
                            )}
                        </>
                    )}
                </div>
            );
        });
    };

    return (
        <nav className="rounded-md h-screen w-[240px]">
            {renderNavItems(DocsNavList)}
        </nav>
    );
}