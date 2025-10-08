'use client'
import Image from "next/image";
import FooterWhite from "../../components/FooterWhite";
import ChatButton from "../../components/ChatButton";
import { Navigation } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import BookingWidget from "../../components/BookingWidget";

export default function Accomodations() {

	return (
		<div className="">
			<Navigation />
			<div className="relative">
				<Hero />
				<BookingWidget />
			</div>
			<div className="content">
				<div className="w-full py-10">
					<div className="text-center w-2/3 mx-auto">
						<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">AMENITIES</h1>
						<div className="w-2/3 mx-auto"></div>
                        <h2 className="title text-3xl font-bold text-cyan-600 font-['Montserrat'] text-left">OASIS POOL BAR</h2>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold">The Oasis Bar – A Poolside Paradise</p>
							<p>Nestled within the shimmering blue waters of the main resort pool, The Oasis Bar redefines relaxation with its one-of-a-kind swim-up 
                                design. Perfectly blending luxury with convenience, this vibrant bar allows guests to sip on handcrafted cocktails, savor refreshing mocktails, 
                                or enjoy a crisp cold beer—all without leaving the water.
                            </p>
							<p>Guests can relax on submerged stools, feeling the cool embrace of the water as they socialize or unwind. The bar menu offers a diverse 
                                selection of tropical drinks, fine wines, and premium spirits, complemented by a light bites menu that includes fresh ceviche, artisanal 
                                flatbreads, and tropical fruit platters.
                            </p>
							<p>Designed to be the heart of the pool area, The Oasis Bar is not just a place to refresh but also a social hub for resort guests. Whether 
                                enjoying a mid-afternoon break or toasting an unforgettable evening, every moment spent at The Oasis Bar becomes part of the ultimate 
                                vacation experience
                            </p>
						</div>
						<div className="font-mono my-4 text-left mx-auto">
							Cabarete beach is world famous for Surfing; Windsurfing, Kitesurfing, Foil surfing & Wing Foiling We have it all for the most 
							active athletic tourists but we area also great for a relaxing family vacation on the soft sand and warm sea water. The central 
							beach just steps from our resort - Cabarete Beach, has a well-developed infrastructure. The beaches are clean, covered with 
							golden sand and surrounded by the greenery of royal palms.
						</div>
                        <div className="flex w-full"><Image src="/assets/accomodations/genghis.png" width="200" height="50" alt="Genghis" className="mx-auto" /></div>
						<div className="font-mono my-4 text-left mx-auto">
                            <p>Welcome to Genghis Wang Chinese Cuisine, where the grandeur of ancient Chinese traditions meets the vibrant flavors of modern culinary 
                                artistry. Inspired by the legendary tales of Genghis Wang, a fictional explorer and gastronomic pioneer, our restaurant celebrates the rich 
                                diversity of Chinese cuisine.
                            </p>
                            <p>The menu at Genghis Wang is a tribute to China’s culinary heritage, offering a journey through its diverse regions. From the bold and spicy 
                                dishes of Sichuan to the delicate and aromatic flavors of Cantonese cuisine, every dish is crafted with authenticity and passion. Signature 
                                dishes include savory Peking duck, fiery mapo tofu, handmade dumplings, and fragrant tea-smoked ribs, all prepared with the finest 
                                ingredients and time-honored techniques.
                            </p>
                            <p>At Genghis Wang Chinese Cuisine, we invite you to savor a feast fit for emperors, where every meal is a celebration of taste, tradition, and 
                                togetherness. Join us and embark on a flavorful journey through the heart of China
                            </p>
						</div>
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
