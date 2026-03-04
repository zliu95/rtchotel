'use client';

import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export default function Residences() {
    const t = useTranslations('Residences');
    const messages = useMessages();
    const communityTags = messages?.Residences?.communityTags || [];
    const liveStayPlayBullets = messages?.Residences?.liveStayPlayBullets || [];
    const secondFloorUnits = [
        ["420", "48"],
        ["421", "34"],
        ["422", "37"],
        ["423", "32"],
        ["424", "39"],
        ["425", "31"],
        ["426", "32"],
        ["427", "38"],
        ["428", "37"],
    ];
    const firstFloorUnits = [
        ["410", "32"],
        ["411", "34"],
        ["412", "37"],
        ["413", "32"],
        ["414", "34"],
        ["415", "36"],
        ["416", "36"],
        ["417", "61"],
        ["418", "37"],
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-8 md:py-12">
            <section className="mx-auto w-full max-w-6xl px-4 md:px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-3">
                    {t('bannerTitle')}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                    {t('oasisTitle')} {t('oasisSubtitle')}
                </h2>
                <p className="mx-auto mt-4 max-w-5xl text-gray-600 leading-relaxed text-base">
                    {t('oasisDescription')}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl">
                    <Image
                        src="/assets/residences/pic-1.webp"
                        width={1600}
                        height={1000}
                        alt={t('oasisTitle')}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('liveStayPlayTitle')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-5xl text-left text-gray-600 leading-relaxed text-base">
                        {t('liveStayPlayDescription')}
                    </p>
                    <ul className="mx-auto mt-3 max-w-5xl list-disc space-y-1 pl-5 text-left text-gray-700 text-base">
                        {liveStayPlayBullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="mt-6 overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/residences/pic-2.webp"
                            width={1600}
                            height={1000}
                            alt={t('liveStayPlayTitle')}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('classicComfortTitle')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-5xl text-left text-gray-600 leading-relaxed text-base">
                        {t('classicComfortDescription')}
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/residences/pic-3.webp"
                            width={1600}
                            height={1000}
                            alt={t('classicComfortTitle')}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('communityTitle')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-5xl text-left text-gray-600 leading-relaxed text-base">
                        {t('communityDescription')}
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] md:text-xs text-[#4a4a4a]">
                        {communityTags.map((tag) => (
                            <span key={tag} className="rounded-full border border-[#d5d5d5] bg-white px-3 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6 overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/residences/pic-4.webp"
                            width={1600}
                            height={1000}
                            alt={t('communityTitle')}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('cabareteTitle')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-5xl text-left text-gray-600 leading-relaxed text-base">
                        {t('cabareteDescription')}
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/residences/pic-5.webp"
                            width={1600}
                            height={1000}
                            alt={t('cabareteTitle')}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('adventureTitle')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-5xl text-left text-gray-600 leading-relaxed text-base">
                        {t('adventureDescription')}
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/residences/pic-6.webp"
                            width={1600}
                            height={1000}
                            alt={t('adventureTitle')}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('floorPlansTitle')}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-lg border border-[#dcdcdc] bg-white p-4 text-left shadow-sm">
                            <h3 className="mb-3 text-base font-semibold text-[#1f1f1f]">{t('secondFloorTitle')}</h3>
                            <Image
                                src="/assets/residences/floorplan-1.jpg"
                                width={1000}
                                height={1200}
                                alt={t('secondFloorTitle')}
                                className="h-auto w-full border border-[#e4e4e4]"
                            />
                            <table className="mt-3 w-full text-center text-sm">
                                <thead>
                                    <tr className="bg-[#f5f5f5]">
                                        <th className="py-1">{t('unitLabel')}</th>
                                        <th className="py-1">{t('areaLabel')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {secondFloorUnits.map(([unit, area], idx) => (
                                        <tr key={`${unit}-${area}`} className={idx < 4 ? 'bg-blue-100' : 'bg-green-100'}>
                                            <td className="py-1">{unit}</td>
                                            <td>{area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-3 flex gap-4 text-xs font-semibold uppercase justify-center">
                                <span className="flex items-center"><span className="mr-2 h-3 w-3 border border-blue-200 bg-blue-100"></span>{t('poolView')}</span>
                                <span className="flex items-center"><span className="mr-2 h-3 w-3 border border-green-200 bg-green-100"></span>{t('courtyardView')}</span>
                            </div>
                        </div>

                        <div className="rounded-lg border border-[#dcdcdc] bg-white p-4 text-left shadow-sm">
                            <h3 className="mb-3 text-base font-semibold text-[#1f1f1f]">{t('firstFloorTitle')}</h3>
                            <Image
                                src="/assets/residences/floorplan-3.jpg"
                                width={1000}
                                height={1200}
                                alt={t('firstFloorTitle')}
                                className="h-auto w-full border border-[#e4e4e4]"
                            />
                            <table className="mt-3 w-full text-center text-sm">
                                <thead>
                                    <tr className="bg-[#f5f5f5]">
                                        <th className="py-1">{t('unitLabel')}</th>
                                        <th className="py-1">{t('areaLabel')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firstFloorUnits.map(([unit, area], idx) => (
                                        <tr key={`${unit}-${area}`} className={idx < 4 ? 'bg-blue-100' : 'bg-green-100'}>
                                            <td className="py-1">{unit}</td>
                                            <td>{area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-3 flex gap-4 text-xs font-semibold uppercase justify-center">
                                <span className="flex items-center"><span className="mr-2 h-3 w-3 border border-blue-200 bg-blue-100"></span>{t('poolView')}</span>
                                <span className="flex items-center"><span className="mr-2 h-3 w-3 border border-green-200 bg-green-100"></span>{t('courtyardView')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                        {t('discoveryTitle')}
                    </h2>
                    <p className="mt-2 text-gray-600 text-base">{t('discoverySubtitle')}</p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-center text-left">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/residences/pic-7.webp"
                                width={1200}
                                height={900}
                                alt={t('discoveryTitle')}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl p-6">
                            <Image
                                src="/logo.png"
                                width={220}
                                height={90}
                                alt="Tropical Casa Laguna logo"
                                className="h-auto w-40"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-[#1f1f1f]">{t('contactName')}</h3>
                            <p className="mt-3 text-sm text-gray-700">{t('contactAddress')}</p>
                            <p className="mt-2 text-sm text-gray-700">{t('contactPhone')}</p>
                            <a href={`mailto:${t('contactEmail')}`} className="mt-2 block text-sm text-gray-700 underline underline-offset-2">
                                {t('contactEmail')}
                            </a>
                            {/* <a
                                href={`mailto:${t('contactEmail')}`}
                                className="mt-5 inline-block rounded bg-[#2B4579] px-4 py-2 text-sm text-white hover:bg-[#223a66] transition-colors"
                            >
                                {t('contactCta')}
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
