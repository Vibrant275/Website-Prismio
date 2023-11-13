import React from "react";
import Link from "next/link";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Shop", url: "/about" },
    { id: 3, name: "Store", url: "/store" },
    { id: 4, name: "Cloud", url: "/contact" },
    { id: 5, name: "Services", url: "/contact" },
    { id: 6, name: "Support", url: "/contact" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {/*{!!item?.subMenu ? (*/}
                        {/*    <li*/}
                        {/*        className="cursor-pointer flex items-center gap-2 relative"*/}
                        {/*        onMouseEnter={() => setShowCatMenu(true)}*/}
                        {/*        onMouseLeave={() => setShowCatMenu(false)}*/}
                        {/*    >*/}
                        {/*        {item.name}*/}
                        {/*        <BsChevronDown size={14} />*/}

                        {/*        {showCatMenu && (*/}
                        {/*            <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">*/}
                        {/*                {categories?.map(*/}
                        {/*                    ({ attributes: c, id }) => {*/}
                        {/*                        return (*/}
                        {/*                            <Link*/}
                        {/*                                key={id}*/}
                        {/*                                href={`/cart`}*/}
                        {/*                                onClick={() =>*/}
                        {/*                                    setShowCatMenu(*/}
                        {/*                                        false*/}
                        {/*                                    )*/}
                        {/*                                }*/}
                        {/*                            >*/}
                        {/*                                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">*/}
                        {/*                                    /!*{c.name}*!/*/}
                        {/*                                    <span className="opacity-50 text-sm">*/}
                        {/*                                        /!*{`(${c.products.data.length})`}*!/*/}
                        {/*                                    </span>*/}
                        {/*                                </li>*/}
                        {/*                            </Link>*/}
                        {/*                        );*/}
                        {/*                    }*/}
                        {/*                )}*/}
                        {/*            </ul>*/}
                        {/*        )}*/}
                        {/*    </li>*/}
                        {/*) : (*/}
                            <li className="desktop-nav">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        {/*)}*/}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;
