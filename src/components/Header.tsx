// components/Header.tsx
"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import {BiMenuAltRight} from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc";
import Image from "next/image";
import {toast, ToastContainer} from "react-toastify";

import SearchIcon from "../../public/icons/SeachIcon";

const Header: React.FC = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
    const [show, setShow] = useState<string>("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [categories, setCategories] = useState<string[] | null>(null);
    const [pushUrl, setPushUrl] = useState<string>('');

    const [isHovered, setIsHovered] = useState(false);


    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>

            <header
                className={`w-full h-[100px] md:h-[70px] bg-[#19181d]
                 flex items-center justify-between z-20 sticky top-0
                  transition-transform duration-300 ${show} px-[6rem]`
            }
            >
                <Link href="/public">
                    <Image
                        src="/images/BannerLight.png"
                        width={140}
                        height={140}
                        alt="Banner"/>
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

                <div className="flex items-center gap-2 text-black">

                    <div className="custom-icon-container" onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}>

                        <SearchIcon color={isHovered ? '#19181d' : '#19181d'}/>
                    </div>

                    <div
                        className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2"
                    >
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                </div>
            </header>
            <ToastContainer/>
        </>
    );
};

export default Header;
