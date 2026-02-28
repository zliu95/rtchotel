'use client';

import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('BeachClub');
    const messages = useMessages();
    const highlights = messages?.BeachClub?.highlights || [];
    const kalipsoTitle =
        (messages?.FoodDrink?.venues || []).find((venue) => venue.id === 'kalipso')?.name ||
        'Kalipso Restaurant';
    const kalipsoDescription =
        messages?.BeachClub?.intro?.[0] ||
        "Kalipso Restaurant is a relaxed beachfront restaurant located directly on Cabarete Beach. Known for its fresh seafood, Caribbean flavors, and tropical cocktails, Kalipso offers open-air dining right on the sand with beautiful ocean views. It's a popular spot for casual lunches, sunset dinners, and drinks by the sea in the heart of Cabarete.";

    return (
        <div className="w-full bg-[#f2f2f2] py-8 md:py-12">
            <section className="mx-auto w-full max-w-6xl text-center px-4 md:px-6">
                <h1 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">
                    {t('clubTitle')}
                </h1>

                <p className="text-gray-600 text-center leading-relaxed text-base">
                    {t('clubDescription')}
                </p>

                <h2 className="mt-10 text-center text-3xl md:text-3xl font-semibold text-[#1f1f1f]">
                    {t('highlightsTitle')}
                </h2>

                <ul className="mx-auto mt-6 max-w-6xl list-disc space-y-1 pl-8 text-left text-base md:text-[16px] leading-tight text-[#2f2f2f]">
                    {highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <div className="mt-10 overflow-hidden rounded-3xl">
                    <Image
                        src="/assets/beachclub/beach-club-hero.jpg"
                        width={1800}
                        height={1000}
                        alt={t('clubTitle')}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>

                <h2 className="mt-10 text-center text-3xl md:text-3xl font-semibold text-[#1f1f1f]">
                    {kalipsoTitle}
                </h2>

                <p className="mx-auto mt-5 max-w-6xl text-base md:text-base leading-tight text-[#2f2f2f]">
                    {kalipsoDescription}
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl">
                    <Image
                        src="/assets/beachclub/kalipso.png"
                        width={1800}
                        height={1000}
                        alt={kalipsoTitle}
                        className="h-auto w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
}
