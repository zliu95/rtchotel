'use client'
import Image from "next/image";
import { useState } from "react";
import ChatButton from "./components/ChatButton";
import { Hero } from "./components/Hero";
import BookingWidget from "./components/BookingWidget";
import FooterWhite from "./components/FooterWhite";
import { Navigation } from "./components/Navigation";

export default function Home() {
	const [slides, setSlides] = useState([
		{
			id: 1,
			image: "/slides/170819978.jpg",
			title: "Slide 1",
			description: "Slide 1 description",
		},
		{
			id: 2,
			image: "/slides/170819992.jpg",
			title: "Slide 2",
			description: "Slide 2 description",
			},
		{
			id: 3,
			image: "/slides/170819994.jpg",
			title: "Slide 3",
			description: "Slide 3 description",
		},
		{
			id: 4,
			image: "/slides/170909763.jpg",
			title: "Slide 4",
			description: "Slide 4 description",
		},
		{
			id: 5,
			image: "/slides/577306405.jpg",
			title: "Slide 5",
			description: "Slide 5 description",
		},
	]);
	return (
		<div className="">
			<Navigation />
			<div className="relative">
				<Hero />
				<BookingWidget />
			</div>
			{/* <SlideShow slides={slides} /> */}
			<div className="content">
				<div className="w-full py-10 px-4">
					<div className="text-center">
						<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">AN OASIS, STEPS FROM THE BEACH, IN THE HEART OF CABARETE.</h1>
						<div className="w-2/3 mx-auto"></div>
						<div className="font-mono my-4 w-2/3 text-center mx-auto">
							Tropical Casa Laguna is a peaceful and tranquil oasis located in the center of Cabarete on the shores of the north 
							coast of the Dominican Republic. Just a 25-minute drive from Puerto Plata International Airport, this city has 
							quickly become one of the most popular holiday destinations in the Caribbean.
						</div>
						<div className="w-2/3 mx-auto">
							Cabarete beach is world famous for Surfing; Windsurfing, Kitesurfing, Foil surfing & Wing Foiling We have it all for the most 
							active athletic tourists but we area also great for a relaxing family vacation on the soft sand and warm sea water. The central 
							beach just steps from our resort - Cabarete Beach, has a well-developed infrastructure. The beaches are clean, covered with 
							golden sand and surrounded by the greenery of royal palms.
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-2 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="object-cover" /></div>
					</div>
				</div>
			</div>
			<ChatButton />
          	<FooterWhite />
		</div>
	);
}
