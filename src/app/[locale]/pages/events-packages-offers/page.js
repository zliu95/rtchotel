'use client';

import { useMessages, useTranslations } from "next-intl";

export default function EventsPackagesOffers() {
    const t = useTranslations('Events');
    const messages = useMessages();
    const events = messages?.Events || {};

    const featureItems = events?.featureItems || [];
    const locationItems = events?.locationItems || [];
    const activityGroups = events?.activityGroups || [];
    const priceRows = events?.priceRows || [];
    const nights = events?.priceTable?.nights || [];
    const bookingFields = events?.bookingInfo?.fields || [];

    const contactRows = [
        { label: events?.contact?.addressLabel, value: events?.contact?.address },
        { label: events?.contact?.websiteLabel, value: events?.contact?.website },
        { label: events?.contact?.phoneLabel, value: events?.contact?.phone },
        { label: events?.contact?.facebookLabel, value: events?.contact?.facebook },
        { label: events?.contact?.emailLabel, value: events?.contact?.email },
    ].filter((row) => row.label && row.value);

    return (
        <div className="bg-neutral-100 pb-16 text-neutral-900">
            <section className="mx-auto max-w-6xl bg-neutral-100 pt-6">
                <img src="/slides/CabareteBeach.jpg" alt={events?.alts?.beach || 'Cabarete beach'} className="h-52 w-full object-cover md:h-64" />

                <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-3">
                    <img src="/assets/home/resort-2.jpg" alt={events?.alts?.resortAerial || 'Resort aerial view'} className="h-48 w-full object-cover" />
                    <img src="/assets/home/pool-1.jpg" alt={events?.alts?.pool || 'Pool area'} className="h-48 w-full object-cover" />
                    <img src="/assets/accomodations/room-1.jpg" alt={events?.alts?.room || 'Room with balcony'} className="h-48 w-full object-cover" />
                </div>

                <div className="bg-neutral-100 px-4 py-8 md:px-8">
                    <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
                        <img src="/logo.png" alt={events?.alts?.logo || 'Tropical Casa Laguna logo'} className="h-20 w-auto md:h-24" />
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold tracking-wide text-emerald-700 md:text-5xl">{events?.hero?.brandName || t('title')}</h1>
                            <p className="text-2xl font-semibold text-emerald-700 md:text-3xl">{events?.hero?.subTitle}</p>
                            <p className="mt-2 text-base font-semibold text-emerald-700 md:text-lg">{events?.hero?.slogan || t('description')}</p>
                        </div>
                    </div>

                    <p className="mx-auto mt-5 max-w-5xl text-center text-sm leading-6 text-neutral-700 md:text-base">
                        <span className="font-semibold">{events?.hero?.introLead}</span> {events?.hero?.introBody}
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="border-2 border-emerald-600 p-4">
                            <div className="-mt-8 mb-3 inline-block bg-emerald-600 px-6 py-1 text-2xl font-semibold text-white">{events?.sections?.featuresTitle}</div>
                            <ul className="space-y-2 text-sm leading-6 text-neutral-800">
                                {featureItems.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1 text-emerald-600">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-2 border-emerald-600 p-4">
                            <div className="-mt-8 mb-3 inline-block bg-emerald-600 px-6 py-1 text-2xl font-semibold text-white">{events?.sections?.locationTitle}</div>
                            <ul className="space-y-2 text-sm leading-6 text-neutral-800">
                                {locationItems.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1 text-emerald-600">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5 rounded-md bg-neutral-200 p-4 text-center text-sm text-neutral-600">
                                <p className="font-semibold text-neutral-800">{events?.locationMap?.country}</p>
                                <p className="mt-1">{events?.locationMap?.airport}</p>
                                <p className="mt-1">{events?.locationMap?.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-neutral-300 pt-6">
                        <h2 className="text-center text-2xl font-semibold text-neutral-800">{events?.sections?.activitiesTitle}</h2>
                        <div className="mt-4 space-y-4">
                            {activityGroups.map((group) => (
                                <div key={group.id || group.title}>
                                    <h3 className="text-xl font-semibold">{group.title}</h3>
                                    <ul className="mt-1 space-y-1 text-sm leading-6 md:text-base">
                                        {(group.items || []).map((item) => (
                                            <li key={item} className="ml-4 list-disc">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-6xl bg-neutral-100 px-4 py-8 md:px-8">
                <div className="inline-block bg-emerald-600 px-6 py-1 text-4xl font-semibold text-white">{events?.sections?.priceListTitle}</div>
                <p className="mt-2 text-sm font-medium text-neutral-700">{events?.priceTable?.note}</p>

                <div className="mt-4 overflow-x-auto border border-neutral-400 bg-white">
                    <table className="min-w-full border-collapse text-center text-xs md:text-sm">
                        <thead className="bg-emerald-50">
                            <tr>
                                <th className="border border-neutral-400 px-2 py-2" rowSpan={3}>{events?.priceTable?.typeOfUnitHeader}</th>
                                <th className="border border-neutral-400 px-2 py-2" rowSpan={3}>{events?.priceTable?.maxOccupancyHeader}</th>
                                <th className="border border-neutral-400 px-2 py-2" rowSpan={3}>{events?.priceTable?.roomTypeHeader}</th>
                                <th className="border border-neutral-400 px-2 py-2" colSpan={6}>{events?.priceTable?.highSeasonLabel}<br />{events?.priceTable?.highSeasonRange}</th>
                                <th className="border border-neutral-400 px-2 py-2" colSpan={6}>{events?.priceTable?.lowSeasonLabel}<br />{events?.priceTable?.lowSeasonRange}</th>
                            </tr>
                            <tr>
                                <th className="border border-neutral-400 px-2 py-1" colSpan={6}>{events?.priceTable?.consecutiveNightsLabel}</th>
                                <th className="border border-neutral-400 px-2 py-1" colSpan={6}>{events?.priceTable?.consecutiveNightsLabel}</th>
                            </tr>
                            <tr>
                                {nights.map((n, index) => (
                                    <th key={`high-${index}`} className="border border-neutral-400 px-2 py-1">{n}</th>
                                ))}
                                {nights.map((n, index) => (
                                    <th key={`low-${index}`} className="border border-neutral-400 px-2 py-1">{n}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {priceRows.map((row) => (
                                <tr key={row.id || row.unitType}>
                                    <td className="border border-neutral-300 px-2 py-2 text-left">{row.unitType}</td>
                                    <td className="border border-neutral-300 px-2 py-2">{row.occupancy}</td>
                                    <td className="border border-neutral-300 px-2 py-2">{row.roomType}</td>
                                    {(row.high || []).map((v, index) => (
                                        <td key={`${row.id || row.unitType}-h-${index}`} className="border border-neutral-300 px-2 py-2">{v}</td>
                                    ))}
                                    {(row.low || []).map((v, index) => (
                                        <td key={`${row.id || row.unitType}-l-${index}`} className="border border-neutral-300 px-2 py-2">{v}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-3 text-center text-sm font-medium text-neutral-700">{events?.sections?.airportTransfer}</p>

                <div className="mt-6 text-center text-neutral-800">
                    <h3 className="text-3xl font-semibold">{events?.serviceIncluded?.title}</h3>
                    <p className="mt-2 text-2xl font-semibold">{events?.serviceIncluded?.regularTitle}</p>
                    <p className="text-base">{events?.serviceIncluded?.regularDescription}</p>
                    <p className="mt-3 text-2xl font-semibold">{events?.serviceIncluded?.longTitle}</p>
                    <p className="text-base">{events?.serviceIncluded?.longDescription}</p>
                    <p className="mt-2 text-base">{events?.serviceIncluded?.additional}</p>
                    <p className="mt-2 text-base">{events?.serviceIncluded?.promotionLabel} <span className="font-semibold">{events?.serviceIncluded?.promotionCode}</span></p>
                </div>

                <div className="mt-8">
                    <div className="inline-block bg-emerald-600 px-6 py-1 text-4xl font-semibold text-white">{events?.bookingInfo?.title}</div>
                    <p className="mt-2 text-sm">{events?.bookingInfo?.intro}</p>

                    <div className="mt-3 overflow-x-auto border border-neutral-400 bg-white">
                        <table className="min-w-full border-collapse text-sm">
                            <thead className="bg-emerald-50 text-center">
                                <tr>
                                    <th className="border border-neutral-400 px-3 py-2" colSpan={2}>{events?.bookingInfo?.formTitle}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-emerald-50 font-semibold text-center">
                                    <td className="border border-neutral-300 px-3 py-1">{events?.bookingInfo?.guestInfoLabel}</td>
                                    <td className="border border-neutral-300 px-3 py-1">{events?.bookingInfo?.detailsLabel}</td>
                                </tr>
                                {bookingFields.map((field) => (
                                    <tr key={field.id || field.label}>
                                        <td className={`border border-neutral-300 px-3 ${field?.multiline ? 'py-8' : 'py-1'}`}>{field.label}</td>
                                        <td className={`border border-neutral-300 px-3 ${field?.multiline ? 'py-8' : 'py-1'} ${field?.center ? 'text-center' : ''}`}>{field.value || ''}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="inline-block bg-emerald-600 px-6 py-1 text-4xl font-semibold text-white">{events?.contact?.title}</div>
                    <div className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2 md:gap-8">
                        {contactRows.map((row) => (
                            <p key={row.label}>{row.label} {row.value}</p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
