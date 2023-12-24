import React, {useState, useEffect} from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import bagIcon from './../public/icons/bag-icon.svg'
import searchIcon from './../public/icons/search-icon.svg'
import accountIcon from './../public/icons/account.svg'
import {BiMenuAltRight} from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc";
import {useSelector} from "react-redux";
import Image from "next/image";
import {toast, ToastContainer} from "react-toastify";
import {useRouter} from 'next/router';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const {cartItems} = useSelector((state) => state.cart);

    const [pushUrl, setPushUrl] = useState('');
    const router = useRouter();

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

    const toastOption = {
        position: "bottom-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <>
            <header
                className={`w-full h-[50px] md:h-[60px] bg-neutral-800 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
            >
                <Wrapper className="h-[60px] flex justify-between items-center">
                    <Link href="/">
                        <img src="/images/Banner.png" className="w-[70px] md:w-[90px]"/>
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
                        {/* Icon start */}

                        <Link href={"/donation"}>
                        <div className="text-white font-bold px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-700 cursor-pointer">Donate</div>
                        </Link>

                        <div
                            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <Image
                                priority
                                src={searchIcon}
                                alt="Search product"
                            /></div>

                        {/* Mobile icon start */}
                        <div
                            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
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
                        {/* Mobile icon end */}
                    </div>
                </Wrapper>
            </header>
            <ToastContainer/>
        </>
    );
};

export default Header;
