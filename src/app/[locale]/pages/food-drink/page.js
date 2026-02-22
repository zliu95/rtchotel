'use client';

import { Clock, MapPin } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('FoodDrink');
    const messages = useMessages();
    const venues = messages?.FoodDrink?.venues || [];

    return (
        <>
            <div className="pt-20">
                <div className="bg-tcl-light-blue/30 py-16 text-center">
                    <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">{t('title')}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto px-4">
                        {t('intro')}
                    </p>
                </div>

                <div className="container mx-auto px-4 py-12 space-y-24">
                    {venues.map((venue, index) => (
                        <div key={venue.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute top-4 -left-4 w-full h-full border-tcl-gold rounded-lg -z-10 hidden md:block group-hover:top-2 group-hover:-left-2 transition-all"></div>
                                <img
                                    src={venue.imageUrl}
                                    alt={venue.name}
                                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-tcl-blue">{venue.name}</h2>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex items-start">
                                        <MapPin size={18} className="text-tcl-gold mr-2 mt-1 min-w-[18px]" />
                                        <span>{venue.location}</span>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock size={18} className="text-tcl-gold mr-2 mt-1 min-w-[18px]" />
                                        <span>{venue.hours}</span>
                                    </div>
                                </div>

                                <div className="text-gray-600 leading-relaxed space-y-2">
                                    {(venue.description || []).map((paragraph, idx) => (
                                        <p key={`${venue.id}-desc-${idx}`}>{paragraph}</p>
                                    ))}
                                </div>

                                {venue.name === 'Oasis Pool Bar' && (
                                    <div className="mt-4 flex">
                                        <a href="/assets/docs/Oasis_Pool_Bar_Menu_2.pdf"><div className="text-white cursor-pointer select-none font-bold rounded-sm bg-blue-300 px-4 py-2">Check Menu</div></a>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {venue.features.map(feature => (
                                        <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
