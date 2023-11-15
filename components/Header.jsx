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

    const onAccountClick = () => {
        if (pushUrl === '')
            toast.info('Please wait a moment', toastOption);
        else
            router.push(pushUrl)
    }


    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        const checkLoginStatus = async () => {

            try {
                const response = await fetch('http://localhost:4000/api/verifyToken');
                const data = await response.json();

                if (data.isLoggedIn) {
                    setPushUrl('/account')
                } else {
                    setPushUrl('/vibrantId')
                }
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };

        checkLoginStatus();
    }, []);

    const fetchCategories = async () => {
        const data = ["mobile", "laptop", "PC", "console"];
        setCategories(data);
    };

    return (
        <>
            <header
                className={`w-full h-[50px] md:h-[60px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
            >
                <Wrapper className="h-[60px] flex justify-between items-center">
                    <Link href="/">
                        <img src="/images/Prism.png" className="w-[70px] md:w-[90px]"/>
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
                        <div
                            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <Image
                                priority
                                src={searchIcon}
                                alt="Search product"
                            /></div>

                        <Link href="/cart">
                            <div
                                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">

                                <Image
                                    priority
                                    src={bagIcon}
                                    alt="Check your bag"
                                />

                                {cartItems.length > 0 && (
                                    <div
                                        className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-black absolute bottom-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                        {cartItems.length}
                                    </div>
                                )}
                            </div>
                        </Link>

                        <div onClick={onAccountClick}
                             className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">

                            <Image
                                priority
                                src={accountIcon}
                                alt="Account"
                            />

                            {cartItems.length > 0 && (
                                <div
                                    className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-black absolute bottom-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                        {/* Icon end */}

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
