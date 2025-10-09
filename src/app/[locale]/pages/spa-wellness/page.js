'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import FooterWhite from "../../components/FooterWhite";
import ChatButton from "../../components/ChatButton";
import { Hero } from "../../components/Hero";
import BookingWidget from "../../components/BookingWidget";

export default function Accomodations() {

	return (
		<div className="">
			<div className="content">
				<div className="w-full py-10">
					<div className="text-center w-2/3 mx-auto">
						<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">SPA & WELLNESS</h1>
						<div className="w-2/3 mx-auto"></div>
                        {/* <h2 className="title text-3xl font-bold text-cyan-600 font-['Montserrat'] text-left">OASIS POOL BAR</h2> */}
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">Spa & Wellness at the Resort – Where Relaxation Meets Rejuvenation</p>
							<p>Immerse yourself in a sanctuary of tranquility and indulgence with our comprehensive Spa & Wellness offerings, designed to elevate your 
								well-being and restore your natural balance.
                            </p>
						</div>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">The Endorphinery – Mindful Massage & Wellness</p>
							<p>Step into The Endorphinery, where skilled therapists blend mindfulness and technique to deliver transformative massage experiences. 
								From soothing Swedish and deep tissue massages to bespoke treatments tailored to your needs, each session is crafted to rejuvenate your 
								body, calm your mind, and uplift your spirit.
                            </p>
						</div>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">Beauty Is Art – Elevating Your Look</p>
							<p>Located on the third floor, Beauty Is Art offers a full spectrum of salon services that redefine self-care. Whether you’re seeking a flawless 
								manicure, precision brow shaping, luscious lashes, or a stylish hair makeover, our expert beauty artisans ensure you look and feel your 
								absolute best. The menu of luxurious beauty treatments, including facials and skincare therapies, adds an extra touch of radiance to your 
								visit.
                            </p>
						</div>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">Fitness & Aquatic Wellness Activities</p>
							<p>
								<li> Yoga with Saving Grace: Join our skilled instructor for regular yoga sessions that cater to all levels, helping you find balance and 
									harmony through movement and mindfulness.
								</li>
								<li> Water Aerobics: Dive into energizing water aerobics sessions held in our pool at scheduled times, offering a fun and low-impact 
									way to enhance your fitness and vitality.
								</li>
                            </p>
						</div>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">Pools and Jacuzzi</p>
							<p>
								Complete your wellness journey by unwinding in one of our three stunning pools, each designed for a unique experience—whether for 
								leisure, lap swimming, or family fun. For a deeper level of relaxation, indulge in the soothing warmth of our Jacuzzi, perfect for melting 
								away stress and tension
                            </p>
							<p>
								At our resort, Spa & Wellness isn’t just a service—it’s a way of life. We invite you to discover serenity, rejuvenation, and beauty in an 
								atmosphere of elegance and care.
							</p>
						</div>
                        {/* <div className="flex w-full"><Image src="/assets/accomodations/genghis.png" width="200" height="50" alt="Genghis" className="mx-auto" /></div> */}
					</div>
				</div>
				<div className="flex justify-center">
					{/* <div className="grid grid-cols-2 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="object-cover" /></div>
					</div> */}
				</div>
				
			</div>
			<ChatButton />
			<FooterWhite />
		</div>
	);
}
