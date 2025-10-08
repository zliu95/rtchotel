'use client';
import { Menu, User, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import HeaderWidget from "./HeaderWidget";

const getVH = () => window.visualViewport?.height ?? window.innerHeight;

export const Navigation = () => {
    const t = useTranslations('Navbar');
    const [isScrolled, setIsScrolled] = useState(false);
    const [siteSelectionDisplay, setSiteSelectionDisplay] = useState(false);
    const siteRef = useRef();

    const handleMouseEnter = () => {
        setSiteSelectionDisplay(true);
    };

    const handleMouseLeave = () => {
        setSiteSelectionDisplay(false);
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
        setIsScrolled(window.scrollY > getVH());
        console.log("scrollY:", window.scrollY, " getVH:", getVH());
        console.log(window.scrollY > getVH());
        });
    }

    return (
        <nav
            className={`${
                isScrolled ? "fixed top-0 z-100 w-full transition-all duration-300 bg-card/95 bg-white shadow-lg" : "hidden"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-2">
                <div className={`flex items-center gap-8 text-foreground`}>
                    <div>
                        <Link href="https://localhost:3000" className="py-1 flex justify-center items-center cursor-pointer mx-auto">
                            <Image src="/logo.png" width="140" height="30" alt="RTC"/>
                        </Link>
                    </div>
                    <div className="hidden items-center gap-6 md:flex">
                        <HeaderWidget />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className='flex relative items-center justify-end cursor-pointer'>
                        <div className={`flex items-center gap-2 ${siteSelectionDisplay ? 'text-foreground' : ''}`} onClick={()=>setSiteSelectionDisplay(!siteSelectionDisplay)}>
                                {/* <div><Image src={`/assets/${t('language')}.svg`} width="32" height="32" alt="RTC"/></div> */}
                                <div className="uppercase">{t('language')}</div>
                                <div className="w-[2em] h-[2em]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill="#c4c4c4"></path> </g></svg>
                                </div>
                        </div>
                        {siteSelectionDisplay &&<div className="absolute z-40 top-0 right-0 backdrop-blur-md shadow-lg" ref={siteRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Link href="/en"><div className="flex justify-center items-center space-x-3 hover:bg-[#e4c932] px-5 py-2">
                                {/* <div><Image src="/assets/us.svg" width="32" height="32" alt="RTC"/></div> */}
                                <div>US</div>
                            </div></Link>
                            <Link href="/es"><div className="flex justify-center items-center space-x-3 hover:bg-[#e4c932] px-5 py-2">
                                {/* <div><Image src="/assets/es.svg" width="32" height="32" alt="RTC"/></div> */}
                                <div>ES</div>
                            </div></Link>
                            <Link href="/ru"><div className="flex justify-center items-center space-x-3 hover:bg-[#e4c932] px-5 py-2">
                                {/* <div><Image src="/assets/ru.svg" width="32" height="32" alt="RTC"/></div> */}
                                <div>RU</div>
                            </div></Link>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
};
