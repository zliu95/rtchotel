import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterWhite() {


    return (
        <>
        <div className="bg-gray-100">
            <div className="flex justify-center py-8 lg:w-4/5 mx-auto">
            </div>
            <div className="md:grid md:grid-cols-12 justify-center md:justify-start md:gap-10 items-start lg:w-4/5 mx-auto">
                <div className="cursor-pointer md:col-span-3 mx-auto flex flex-col items-center">
                    <Link href="https://rewardsholiday.com" className="items-center flex justify-center ">
                        <Image src="/logo.png" width="180" height="63" alt="RTC"/>
                    </Link>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs mt-4">
                        A peaceful and tranquil oasis located in the center of Cabarete on the shores of the north coast of the Dominican Republic.
                    </p>
                </div>
                
                <div className="mx-auto my-4 flex justify-center md:col-span-6">
                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex items-center space-x-2">
                            <MapPin size={16} className="text-tcl-gold" />
                            <span>Calle Principal, Cabarete, Puerto Plata, DR</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone size={16} className="text-tcl-gold" />
                            <span>+1-849-212-0012</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail size={16} className="text-tcl-gold" />
                            <span>reservations@tropicalcasalaguna.com</span>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-3 mx-auto my-4">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">Residences Sales</h4>
                        <p className="text-gray-400 text-sm mb-2">Interested in owning a piece of paradise?</p>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center space-x-2">
                                <Phone size={16} className="text-tcl-gold" />
                                <span>+1-849-212-0012</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={16} className="text-tcl-gold" />
                                <span>info@tropicalcasalaguna.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-tcl-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-tcl-gold transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-[12px] pt-10 pb-16 bg-gray-100 mx-4">
                TROPICAL CASA LAGUNA RESIDENCES, RESORT & SPA. ALL RIGHTS RESERVED. COPYRIGHT © {new Date().getFullYear()}.
            </div>
        </div>
        </>
    );
}