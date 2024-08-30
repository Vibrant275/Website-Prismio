import React from "react";
import Link from "next/link";

const data = [
    { id: 1, name: "Docs", url: "docs" },
    { id: 2, name: "Community", url: "/play" },
    { id: 3, name: "Contribute", url: "/contribute" },
    { id: 4, name: "About", url: "/about" }
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-sans text-gray-400">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                            <li className="desktop-nav md:h-[70px] content-center cursor-pointer">
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
