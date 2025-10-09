'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterWhite from "../../components/FooterWhite";
import ChatButton from "../../components/ChatButton";
import { Navigation } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import BookingWidget from "../../components/BookingWidget";

export default function EventsPackagesOffers() {

	return (
		<div className="">
			<div className="content">
				<div className="w-full py-10">
					<div className="text-center w-2/3 mx-auto">
						<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">EVENTS, PACKAGES & OFFERS</h1>
						<div className="w-2/3 mx-auto"></div>
                        {/* <h2 className="title text-3xl font-bold text-cyan-600 font-['Montserrat'] text-left">OASIS POOL BAR</h2> */}
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold"></p>
							<p>
                            </p>
						</div>
					</div>
				</div>
			</div>
			<ChatButton />
			<FooterWhite />
		</div>
	);
}
