import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {


    return (
        <>
        <div className="bg-[#313232]">
            <div className="flex justify-center py-8 lg:w-4/5 mx-auto">
            </div>
            <div className="md:grid md:grid-cols-12 justify-center md:justify-start md:gap-10 items-center lg:w-4/5 mx-auto">
                <Link href="https://rewardsholiday.com" className="items-center flex justify-center cursor-pointer md:col-span-3 mx-auto">
                    <Image src="/logo.png" width="180" height="63" alt="RTC"/>
                </Link>
                <div className="mx-auto my-4 flex justify-center md:col-span-6">
                    <div className="mx-auto text-gray-200 text-center">
                        <div className="flex gap-2 items-center">
                            <Image src="/icons/address.svg" width="18" height="18" alt="address" />
                            <div>Calle Principal, Cabarete, Puerto Plata</div>
                        </div>
                        <div>Dominican Republic</div>
                        
                    </div>
                </div>
                <div className="md:col-span-3 mx-auto">
                    <div className="mx-auto text-gray-200 text-center my-4">
                        <div className="flex items-center gap-2">
                            <div><Image src="/icons/phone.svg" width="18" height="18" alt="phone" /></div>
                            <div>+1-849-212-0012</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><Image src="/icons/email.svg" width="18" height="18" alt="email" /></div>
                            <div>info@tropicalcasalaguna.com</div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-items-end items-start gap-6">
                        <div className="min-w-[42px] min-h-[42px]">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" fill="#fff" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </div>
                        <div className="min-w-[42px] min-h-[42px]">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook-square" fill="#fff" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                        </div>
                        <div className="min-w-[54px] min-h-[42px]">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fab-cc-visa" fill="#fff" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-white text-[12px] pt-10 pb-16 bg-[#313232] mx-4">
                TROPICAL CASA LAGUNA RESIDENCES, RESORT & SPA. ALL RIGHTS RESERVED. COPYRIGHT © {new Date().getFullYear()}.
            </div>
        </div>
        </>
    );
}