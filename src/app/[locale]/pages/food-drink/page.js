'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

function VenueCarousel({ images, alt }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const safeImages = (images || []).filter(Boolean);
    const hasMultiple = safeImages.length > 1;
    const activeImage = safeImages[currentIndex] || '/assets/foodndrink/food-n-drink-hero.jpg';

    function showPrev() {
        if (!hasMultiple) return;
        setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
    }

    function showNext() {
        if (!hasMultiple) return;
        setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }

    return (
        <div className="relative">
            <img
                src={activeImage}
                alt={alt}
                className="h-72 md:h-[400px] w-full object-cover rounded-lg shadow-xl"
            />

            {hasMultiple && (
                <>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={showPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/60 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={showNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/60 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                        {safeImages.map((_, dotIndex) => (
                            <button
                                key={`${alt}-dot-${dotIndex}`}
                                type="button"
                                aria-label={`Go to image ${dotIndex + 1}`}
                                onClick={() => setCurrentIndex(dotIndex)}
                                className={`h-2.5 rounded-full transition-all ${dotIndex === currentIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/60'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function Page() {
    const t = useTranslations('FoodDrink');
    const messages = useMessages();
    const venues = messages?.FoodDrink?.venues || [];
    const venueGalleryFallback = {
        oasis: [
            '/assets/foodndrink/Pool-Bar-1.webp',
            '/assets/foodndrink/Pool-Bar-2.webp',
            '/assets/foodndrink/Pool-Bar-3.webp',
        ],
        fresh: [
            '/assets/foodndrink/FreshFreshCafe-1.webp',
            '/assets/foodndrink/FreshFreshCafe-2.webp',
            '/assets/foodndrink/FreshFreshCafe-3.webp',
            '/assets/foodndrink/FreshFreshCafe-4.webp',
        ],
        kalipso: [
            
            '/assets/foodndrink/Kalipso-1.webp',
            '/assets/foodndrink/Kalipso-2.webp',
            '/assets/foodndrink/Kalipso-3.webp',
            '/assets/foodndrink/Kalipso-4.webp',
        ],
    };

    return (
        <>
            <div className="pt-2">
                <div className="container mx-auto bg-tcl-light-blue/30 py-16 text-center max-w-6xl">
                    <h1 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('title')}</h1>
                    <p className="text-gray-600 text-center leading-relaxed text-base">
                        {t('intro')}
                    </p>
                </div>

                <div className="container mx-auto px-4 py-12 space-y-24">
                    {venues.map((venue, index) => {
                        const galleryImages = [
                            ...((venue.images || []).filter(Boolean)),
                            ...((venueGalleryFallback[venue.id] || []).filter(Boolean)),
                            venue.imageUrl,
                        ].filter((img, idx, arr) => img && arr.indexOf(img) === idx).slice(0, 3);

                        return (
                            <div key={venue.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute top-4 -left-4 w-full h-full border-tcl-gold rounded-lg -z-10 hidden md:block group-hover:top-2 group-hover:-left-2 transition-all"></div>
                                    <VenueCarousel images={galleryImages} alt={venue.name} />
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
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {(venue.features || []).map(feature => (
                                                <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-gray-600 leading-relaxed space-y-2">
                                        {(venue.description || []).map((paragraph, idx) => (
                                            <p key={`${venue.id}-desc-${idx}`}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {venue.id === 'oasis' && (
                                        <div className="mt-4 flex">
                                            <a href="/assets/docs/Oasis_Pool_Bar_Menu_2.pdf"><div className="text-white cursor-pointer select-none font-bold rounded-sm bg-black px-4 py-2">Check Menu</div></a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}
