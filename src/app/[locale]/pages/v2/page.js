'use client'
import Image from "next/image";
import { useState } from "react";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";

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
		<div className="relative w-full">
            <div className="mx-auto w-full flex justify-center my-4">
                <Image src="/logo.png" alt="logo" width="300" height="80" />
            </div>
            <div className="relative text-white font-bold">
                <div className="flex z-40">
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                </div>
                <div className="-mt-8 z-10">
                    <SlideShow className="absolute top-0 left-0 min-h-40 z-10" slides={slides} />
                </div>
            </div>
			
			<div className="w-full py-10">
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
			<Footer />
		</div>
	);
}
