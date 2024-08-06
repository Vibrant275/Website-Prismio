// components/Header.tsx
"use client";  // Ensure this is added

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import searchIcon from '../../public/icons/search-icon.svg';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation'; // Use this import for Next.js 13 App Router
import { useCart } from '../context/CartContext'; // Adjust path accordingly

const Header: React.FC = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
    const [show, setShow] = useState<string>("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [categories, setCategories] = useState<string[] | null>(null);
    const { cartItems } = useCart();
    const [pushUrl, setPushUrl] = useState<string>('');
    const router = useRouter();  // Ensure this is used within a valid Next.js page context

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
                className={`w-full h-[100px] md:h-[70px] bg-neutral-800 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
            >
                <Wrapper className="h-[90px] flex justify-between items-center">
                    <Link href="/public">
                        <img src="/images/Banner.png" className="w-[140px] md:w-[140px]" alt="Banner" />
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
                        <Link href={"/donation"}>
                            <div className="text-white font-bold px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-700 cursor-pointer">
                                Donate
                            </div>
                        </Link>

                        <div
                            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
                        >
                            <Image
                                priority
                                src={searchIcon}
                                alt="Search product"
                            />
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
                </Wrapper>
            </header>
            <ToastContainer />
        </>
    );
};

export default Header;
