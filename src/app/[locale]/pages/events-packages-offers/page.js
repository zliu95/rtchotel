'use client';

import { useEffect, useMemo, useState } from "react";
import { useMessages } from "next-intl";

function getInputType(fieldId) {
    if (fieldId === "email-address") return "email";
    if (fieldId === "phone-number") return "tel";
    if (fieldId === "check-in" || fieldId === "check-out") return "date";
    if (fieldId === "nights" || fieldId === "adults" || fieldId === "children") return "number";
    return "text";
}

export default function EventsPackagesOffers() {
    const messages = useMessages();
    const events = messages?.Events || {};

    const activityGroups = events?.activityGroups || [];
    const priceRows = events?.priceRows || [];
    const nights = events?.priceTable?.nights || [];
    const bookingFields = events?.bookingInfo?.fields || [];
    const guestFields = bookingFields.slice(0, 3);
    const detailFields = bookingFields.slice(3);
    const requiredFieldIds = new Set(["full-name", "email-address"]);
    const initialFormValues = useMemo(
        () => bookingFields.reduce((acc, field) => ({ ...acc, [field.id]: field.value || "" }), {}),
        [bookingFields]
    );
    const [formValues, setFormValues] = useState(initialFormValues);
    const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

    useEffect(() => {
        setFormValues(initialFormValues);
    }, [initialFormValues]);

    function handleFieldChange(fieldId, value) {
        setFormValues((prev) => ({
            ...prev,
            [fieldId]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitState({ status: "submitting", message: "" });

        try {
            const labels = bookingFields.reduce(
                (acc, field) => ({ ...acc, [field.id]: field.label }),
                {}
            );
            const response = await fetch("/api/booking-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fields: formValues,
                    labels,
                }),
            });
            const data = await response.json();

            if (!response.ok || !data?.ok) {
                throw new Error(data?.message || "Failed to submit booking form.");
            }

            setSubmitState({ status: "success", message: "Submitted successfully." });
        } catch (error) {
            setSubmitState({
                status: "error",
                message: error?.message || "Failed to submit booking form.",
            });
        }
    }

    return (
        <div className="bg-[#f2f2f2] py-10 md:py-12 text-[#1f1f1f]">
            <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
                <h1 className="text-center text-3xl md:text-4xl font-semibold text-[#2B4579]">
                    2026 Packages.
                </h1>

                <div className="mt-8">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        {events?.sections?.priceListTitle}
                    </h2>
                    <p className="mt-4 text-sm md:text-base">{events?.priceTable?.note}</p>

                    <div className="mt-3 overflow-x-auto border border-[#6b6b6b] bg-white">
                        <table className="min-w-full border-collapse text-center text-xs md:text-sm">
                            <thead className="bg-[#f3f3f3]">
                                <tr>
                                    <th className="border border-[#6b6b6b] px-2 py-2" rowSpan={3}>{events?.priceTable?.typeOfUnitHeader}</th>
                                    <th className="border border-[#6b6b6b] px-2 py-2" rowSpan={3}>{events?.priceTable?.maxOccupancyHeader}</th>
                                    <th className="border border-[#6b6b6b] px-2 py-2" rowSpan={3}>{events?.priceTable?.roomTypeHeader}</th>
                                    <th className="border border-[#6b6b6b] px-2 py-2" colSpan={6}>{events?.priceTable?.highSeasonLabel}<br />{events?.priceTable?.highSeasonRange}</th>
                                    <th className="border border-[#6b6b6b] px-2 py-2" colSpan={6}>{events?.priceTable?.lowSeasonLabel}<br />{events?.priceTable?.lowSeasonRange}</th>
                                </tr>
                                <tr>
                                    <th className="border border-[#6b6b6b] px-2 py-1" colSpan={6}>{events?.priceTable?.consecutiveNightsLabel}</th>
                                    <th className="border border-[#6b6b6b] px-2 py-1" colSpan={6}>{events?.priceTable?.consecutiveNightsLabel}</th>
                                </tr>
                                <tr>
                                    {nights.map((n, index) => (
                                        <th key={`high-${index}`} className="border border-[#6b6b6b] px-2 py-1">{n}</th>
                                    ))}
                                    {nights.map((n, index) => (
                                        <th key={`low-${index}`} className="border border-[#6b6b6b] px-2 py-1">{n}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {priceRows.map((row) => (
                                    <tr key={row.id || row.unitType}>
                                        <td className="border border-[#7a7a7a] px-2 py-1.5 text-left">
                                            {(row.unitType || '').split('|').map((part) => (
                                                <div key={`${row.id}-${part}`}>{part.trim()}</div>
                                            ))}
                                        </td>
                                        <td className="border border-[#7a7a7a] px-2 py-1.5">{row.occupancy}</td>
                                        <td className="border border-[#7a7a7a] px-2 py-1.5">{row.roomType}</td>
                                        {(row.high || []).map((v, index) => (
                                            <td key={`${row.id || row.unitType}-h-${index}`} className="border border-[#7a7a7a] px-2 py-1.5">{v}</td>
                                        ))}
                                        {(row.low || []).map((v, index) => (
                                            <td key={`${row.id || row.unitType}-l-${index}`} className="border border-[#7a7a7a] px-2 py-1.5">{v}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-2 border border-t-0 border-[#6b6b6b] bg-white px-3 py-2 text-center text-sm">
                        {events?.sections?.airportTransfer}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {events?.serviceIncluded?.title}
                    </h2>
                    <p className="mt-4 text-base font-semibold">{events?.serviceIncluded?.regularTitle}</p>
                    <p className="mt-1 text-base">{events?.serviceIncluded?.regularDescription}</p>
                    <p className="mt-3 text-base font-semibold">{events?.serviceIncluded?.longTitle}</p>
                    <p className="mt-1 text-base">{events?.serviceIncluded?.longDescription}</p>
                    <p className="mt-1 text-base">{events?.serviceIncluded?.additional}</p>
                </div>
                
                {/* Booking Form */}
                <div className="mt-16">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        {events?.bookingInfo?.formTitle || events?.bookingInfo?.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base">{events?.bookingInfo?.intro}</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-3 overflow-x-auto border border-[#6b6b6b] bg-white">
                            <table className="min-w-full border-collapse text-sm">
                                <thead className="bg-[#f3f3f3] text-center">
                                    <tr>
                                        <th className="border border-[#6b6b6b] px-3 py-2 font-semibold" colSpan={2}>
                                            {events?.bookingInfo?.formTitle}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#f3f3f3] text-center font-semibold">
                                        <td className="border border-[#7a7a7a] px-3 py-1">{events?.bookingInfo?.guestInfoLabel}</td>
                                        <td className="border border-[#7a7a7a] px-3 py-1">{events?.bookingInfo?.detailsLabel}</td>
                                    </tr>
                                    {guestFields.map((field) => (
                                        <tr key={field.id || field.label}>
                                            <td className="border border-[#7a7a7a] px-3 py-1">{field.label}</td>
                                            <td className="border border-[#7a7a7a] px-3 py-1">
                                                <input
                                                    type={getInputType(field.id)}
                                                    required={requiredFieldIds.has(field.id)}
                                                    value={formValues[field.id] || ""}
                                                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                                    className="w-full bg-transparent px-1 py-1 outline-none"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-[#f3f3f3] text-center font-semibold">
                                        <td className="border border-[#7a7a7a] px-3 py-1">{events?.bookingInfo?.title || 'Booking Details'}</td>
                                        <td className="border border-[#7a7a7a] px-3 py-1">{events?.bookingInfo?.detailsLabel}</td>
                                    </tr>
                                    {detailFields.map((field) => (
                                        <tr key={field.id || field.label}>
                                            <td className={`border border-[#7a7a7a] px-3 ${field?.multiline ? 'py-10' : 'py-1'}`}>
                                                {field.label}
                                            </td>
                                            <td className={`border border-[#7a7a7a] px-3 ${field?.multiline ? 'py-3' : 'py-1'} ${field?.center ? 'text-center' : ''}`}>
                                                {field?.multiline ? (
                                                    <textarea
                                                        value={formValues[field.id] || ""}
                                                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                                        rows={4}
                                                        className="w-full resize-y bg-transparent px-1 py-1 outline-none"
                                                    />
                                                ) : (
                                                    <input
                                                        type={getInputType(field.id)}
                                                        value={formValues[field.id] || ""}
                                                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                                        className="w-full bg-transparent px-1 py-1 outline-none"
                                                    />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={submitState.status === "submitting"}
                                className="rounded bg-[#2B4579] px-6 py-2 text-white transition-colors hover:bg-[#223a66] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {submitState.status === "submitting" ? "submitting..." : "submit"}
                            </button>
                            {submitState.message && (
                                <p className={`text-sm ${submitState.status === "error" ? "text-red-600" : "text-green-700"}`}>
                                    {submitState.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                <div className="mt-9">
                    <h2 className="text-center text-3xl md:text-4xl font-semibold">
                        {events?.sections?.activitiesTitle}
                    </h2>
                    <div className="mt-4 space-y-4">
                        {activityGroups.map((group) => (
                            <div key={group.id || group.title}>
                                <h3 className="text-lg font-semibold">{group.title}</h3>
                                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm md:text-base">
                                    {(group.items || []).map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
