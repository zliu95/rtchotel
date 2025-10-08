'use client'
import BookingWidget from "../../components/BookingWidget";
import ChatButton from "../../components/ChatButton";
import Footer from "../../components/Footer";
import FooterWhite from "../../components/FooterWhite";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Navigation } from "../../components/Navigation";

export default function Page() {
    return (
        <div
            className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200"
            data-oid="xe67850"
        >
            <Navigation />
            <div className="relative">
                <Hero />
                <BookingWidget />
            </div>
            {/* Header */}
            <div className="container mx-auto px-4 text-center my-20" data-oid="rlamoge">
                <h1 className="text-5xl md:text-6xl font-bold mb-4" data-oid="t::qrty">
                    Beach Club
                </h1>
                <p className="text-xl md:text-2xl opacity-90" data-oid="nst_gk7">
                    A Seaside Escape in the Heart of Cabarete
                </p>
            </div>
            <div
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 bg-[url('/assets/beachclub/beach-club-hero.jpg')] bg-cover bg-center"
                data-oid="gnjyn_p"
            >
            </div>

            {/* Oasis Pool Bar Section */}
            <section className="py-16 bg-blue-50 dark:bg-gray-900" data-oid="2.ljszm">
                <div className="container mx-auto px-4" data-oid="k:vk1s3">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="52l7_hd">
                        <div data-oid="oa_ey8e">
                            <h2
                                className="text-4xl font-bold text-gray-600 mb-6"
                                data-oid="i5w.ve7"
                            >
                                Tropical Casa Laguna Beach Club
                            </h2>

                            <p className="text-gray-700 dark:text-gray-300 mb-4" data-oid="cai3f7v">
                                Step into the laid-back charm of Tropical Casa Laguna Beach Club, where the best of Cabarete Beach is right at your doorstep.
                                Located directly on the sand, our Beach Club offers guests a front-row seat to the ocean—complete with sun loungers, umbrellas,
                                 and a breezy, relaxed atmosphere perfect for soaking up the Caribbean sun or enjoying the rhythm of the waves.
                                 Look for Danny our Beach Concierge who will get yu a comfortable chaise loung right on the beach and advise as to which watersprots you might want to try

                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-oid="qow5e_g">
                            <h3 className="text-2xl font-bold mb-4 text-center" data-oid="l3sl5hq">
                                Beach Club Highlights
                            </h3>
                            <div className="gap-4 text-sm" data-oid="g5-6jea">
                                <div data-oid="xi7v1jw">
                                    <ul
                                        className="space-y-1 text-gray-600 dark:text-gray-400"
                                        data-oid="p3i:mv2"
                                    >
                                        <li data-oid="a-s1nhc">Beach Club is in the heart of all the activity</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                        <li>Cabarete is the water sports capital of the Caribbean, and you're already in the center of it all:</li>
                                        <li>Kitesurfing & Windsurfing – Take lessons or rent gear just down the beach. Cabarete Bay and Kite Beach are world-famous for steady winds and ideal conditions.</li>
                                        <li>Surfing at Playa Encuentro – A short ride west, this surf haven is great for all levels.</li>
                                        <li>Stand-Up Paddleboarding – Calm morning waters make for a peaceful paddle.</li>
                                        <li>Snorkeling & Diving – Explore vibrant reefs in nearby Sosúa Bay, with easy day trips available</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-gray-900" data-oid="2.ljszm">
                <div className="container mx-auto px-4" data-oid="k:vk1s3">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-600 dark:text-white">Tropical Casa Laguna Beach Club & Kalipso Restaurant</h2>
                    <p>Just steps away, you'll find Kalipso Restaurant, the official affiliated partner of the Beach Club. Here, 
                        beachside dining meets local flavor with a menu featuring fresh seafood, Mediterranean favorites, tropical cocktails, 
                        and chilled music vibes—all served with stunning views of the sea.</p>
                    <p>Whether you're sipping a cocktail at sunset or enjoying lunch with your feet in the sand, 
                        Tropical Casa Laguna Beach Club and Kalipso Restaurant offer the perfect blend of beach life and local flavor—right where Cabarete comes alive.
                    </p>
                </div>
            </section>
            <ChatButton />
            <FooterWhite />
        </div>
    );
}
