'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function HeroNav() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
    const [siteSelectionDisplay, setSiteSelectionDisplay] = useState(false);
    const mobileMenuRef = useRef();
    const siteRef = useRef();

    const handleMouseEnter = () => {
        setSiteSelectionDisplay(true);
    };

    const handleMouseLeave = () => {
        setSiteSelectionDisplay(false);
    };

    return (
        <div className="w-full">
            <div className="flex gap-6 justify-between text-gray-300 px-4 py-2">
                <div className="flex justify-around gap-2 font-[opensans] text-sm select-none">
                    <div>Tropical CasaLaguna Resort</div>
                    <div>{t('Dominican-Republic-Cabarete-Calle-principal')}</div>
                </div>
                <div className='flex relative items-center justify-end cursor-pointer'>
                    <div className={`flex items-center gap-2 ${siteSelectionDisplay ? 'text-foreground' : ''}`} onClick={()=>setSiteSelectionDisplay(!siteSelectionDisplay)}>
                            {/* <div><Image src={`/assets/${t('language')}.svg`} width="32" height="32" alt="RTC"/></div> */}
                            <div className="uppercase">{t('language')}</div>
                            <div className="w-[2em] h-[2em]">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill="#fff"></path> </g></svg>
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
            <div className="flex justify-center">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="https://localhost:3000" className="py-4 flex justify-center items-center cursor-pointer mx-auto">
                            <Image src="/logo-white.png" width="220" height="55" alt="RTC"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-3">
                <div className="px-4 grid grid-cols-6 md:grid-cols-12">
                    <div className="col-span-5 md:col-span-10 lg:hidden hover:bg-white hover:fill-white active:bg-gray-400" onClick={()=>setIsMobileMenuShow(!isMobileMenuShow)}>
                        <svg width="30px" height="30px" fill="#000000" viewBox="0 0 24 24" id="menu-alt-3" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color hover:fill-white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect id="primary" x="2" y="2" width="20" height="20" rx="2" style={{fill: "#000000"}}></rect><path id="secondary" d="M17,17H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7A1,1,0,0,1,7,7H17a1,1,0,0,1,0,2Z" style={{fill: "#c4c4c4"}}></path></g></svg>
                    </div>
                    <div className="hidden lg:inline-block lg:col-span-12 font-mono cursor-pointer">
                        <ul className="flex gap-6 text-white">
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/">{t('home')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/accomodations">{t('accomodations')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/food-drink">{t('food-drink')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/beach-club">{t('beach-club')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/spa-wellness">{t('spa-wellness')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/events-packages-offers">{t('events-packages-offers')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/events-packages-offers">{t('residences')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/pages/events-packages-offers">{t('live-webcam')}</Link></li>
                            <li><Link className="hover:text-white hover:bg-blue-400/60 px-3 py-5 transition select-none uppercase" href="/book-now">{t('book-now')}</Link></li>
                            {/* <li><Link className="hover:text-gray-400 transition select-none" href="https://rewardsholiday.com/?page_id=21">CUSTOMERLOGIN</Link></li> */}
                        </ul>                   
                    </div>
                </div>
                
            </div>
            {isMobileMenuShow && 
                <div className="relative text-[14px] font-[Roboto] font-medium text-gray-800">
                    <ul className="absolute bg-gray-100 z-20 w-full md:hidden">
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/">{t('home')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/accomodations">{t('accomodations')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/food-drink">{t('food-drink')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/beach-club">{t('beach-club')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/spa-wellness">{t('spa-wellness')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/events-packages-offers">{t('events-packages-offers')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/events-packages-offers">{t('residences')}</Link></li>
                        <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="/pages/events-packages-offers">{t('live-webcam')}</Link></li>
                        {/* <li className="px-6 py-2 hover:bg-[#33373d] hover:text-gray-100 transition"><Link href="https://rewardsholiday.com/?page_id=21">CUSTOMERLOGIN</Link></li> */}
                    </ul>   
                </div>}
        </div>
    );
}