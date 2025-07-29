'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Accomodations() {

	return (
		<div className="">
			<Navbar />
			<div className="content">
				<div className="w-full py-10">
					<div className="text-center w-2/3 mx-auto">
						{/* <h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">AMENITIES</h1> */}
						<div className="w-2/3 mx-auto"></div>
                        <h1 className="title text-3xl font-bold text-cyan-600 font-['Montserrat'] text-center">OASIS POOL BAR</h1>
						<div className="grid grid-cols-2 gap-10 font-mono my-4">
							<div className="text-base/8 colleft">
								<h3 className="uppercase font-semibold text-2xl my-4">cocktails</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Frozen Daiquiri</div><div className="text-right">250</div>
									<div className="text-left">Frozen Strawberry Daiquiri</div><div className="text-right"> 300</div>
									<div className="text-left">Frozen Passion Fruit Daiquiri</div><div className="text-right">300</div>
									<div className="text-left">Mojito</div><div className="text-right">280</div>
									<div className="text-left">Strawberry mojito</div><div className="text-right">320</div>
									<div className="text-left">Margarita</div><div className="text-right">360</div>
									<div className="text-left">Strawberry Margarita</div><div className="text-right">360</div>
									<div className="text-left">Bloody Mary</div><div className="text-right">360</div>
									<div className="text-left">Long Island Iced Tea</div><div className="text-right">420</div>
									<div className="text-left">Santa Libre</div><div className="text-right">240</div>
									<div className="text-left">Cuba Libre</div><div className="text-right">240</div>
									<div className="text-left">Piña Colada</div><div className="text-right">300</div>
									<div className="text-left">Sex on the beach</div><div className="text-right">420</div>
									<div className="text-left">Screwdriver</div><div className="text-right">280</div>
									<div className="text-left">Gin & Tonic</div><div className="text-right">400</div>
									<div className="text-left">Black Russian</div><div className="text-right">450</div>
									<div className="text-left">Rum Punch</div><div className="text-right">270</div>
									<div className="text-left">Blue Lagoon</div><div className="text-right">300</div>
									<div className="text-left">Tequila Sunrise</div><div className="text-right">320</div>
									<div className="text-left">Sangria Red or White</div><div className="text-right">300</div>
									<div className="text-left">Cosmopolitan</div><div className="text-right">300</div>
									<div className="text-left">Maitai</div><div className="text-right">320</div>
									<div className="text-left">Mamajuana</div><div className="text-right">150</div>
									<div className="text-left">BananaMama</div><div className="text-right">300</div>
								</div>
								
								<h3 className="uppercase font-semibold text-2xl my-4">Pitchers for sharing</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Mojito</div><div className="text-right">950</div>
									<div className="text-left">Rum Punch</div><div className="text-right"> 1100</div>
									<div className="text-left">Sangria Red or White</div><div className="text-right">1100</div>
								</div>
								
								<h3 className="uppercase font-semibold text-2xl my-4">Rum</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Brugal Añejo 50ml</div><div className="text-right">180</div>
									<div className="text-left">Brugal Extra Viejo 50ml</div><div className="text-right">260</div>
									<div className="text-left">Brugal XV 50ml</div><div className="text-right">280</div>
									<div className="text-left">Barceló Imperial 50ml</div><div className="text-right">260</div>
									<div className="text-left">Brugal Lenda 50ml</div><div className="text-right">280</div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Whisky & Cognac</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">William Lawson’s 50ml</div><div className="text-right">180</div>
									<div className="text-left">Dewar’s White Label 50ml</div><div className="text-right">230</div>
									<div className="text-left">Jack Daniels 50ml</div><div className="text-right">380</div>
									<div className="text-left">Chivas Regal 12 50ml</div><div className="text-right">500</div>
									<div className="text-left">Hennessy Cognac</div><div className="text-right">550</div>
								</div>
								
								<h3 className="uppercase font-semibold text-2xl my-4">Bottles(750ml)</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">William Lawson’s</div><div className="text-right">1,500</div>
									<div className="text-left">Dewar’s White Label</div><div className="text-right">2,100</div>
									<div className="text-left">Jack Daniels</div><div className="text-right">3,500</div>
									<div className="text-left">Chivas Regal 12</div><div className="text-right">4,500</div>
									<div className="text-left">Hennessy Cognac</div><div className="text-right">5000</div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Gin</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Bermudez London Dry 50ml</div><div className="text-right">150</div>
									<div className="text-left">Beefeater 50ml</div><div className="text-right">250</div>
								</div>
								
								<h3 className="uppercase font-semibold text-2xl my-4">Liquors & Bitters</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Martini Bianco 50ml</div><div className="text-right">200</div>
									<div className="text-left">Ponche Bordas 50ml</div><div className="text-right">240</div>
									<div className="text-left">Campari Bitter 50ml</div><div className="text-right">250</div>
									<div className="text-left">Bailey’s 50ml</div><div className="text-right">260</div>
									<div className="text-left">Kahlúa 50ml</div><div className="text-right">280</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>
							</div>

							<div className="text-base/8 colright">
								<h3 className="uppercase font-semibold text-2xl my-4">Mocktails No-alcohol</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">AmapolaVirgin Piña Colada</div><div className="text-right">200</div>
									<div className="text-left">Frozen Strawberry Lemonade</div><div className="text-right">200</div>
									<div className="text-left">Frozen Passion Fruit Lemonade</div><div className="text-right">200</div>
									<div className="text-left">BananaBaby</div><div className="text-right"> – 200</div>
								</div>
								<h3 className="uppercase font-semibold text-2xl my-4">Specialty Coffees</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Irish Coffee</div><div className="text-right">400</div>
									<div className="text-left">Spanish Coffee</div><div className="text-right">400</div>
								</div>
								<h3 className="uppercase font-semibold text-2xl my-4">Beer</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Heineken / Corona</div><div className="text-right">300</div>
									<div className="text-left">Presidente / Presidente Light</div><div className="text-right">200</div>
								</div>
								<h3 className="uppercase font-semibold text-2xl my-4">Soft Drinks</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Water Dasani</div><div className="text-right">50</div>
									<div className="text-left">Coca Cola / Sprite / Fanta</div><div className="text-right">100</div>
									<div className="text-left">Ginger Ale / Tonic</div><div className="text-right">100</div>
								</div>
								<h3 className="uppercase font-semibold text-2xl my-4">Juice</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Passion fruit / Pineapple / Fruit punch / Orange /Cranberry</div><div className="text-right">100</div>
								</div>
								<h3 className="uppercase font-semibold text-2xl my-4">Tea & Coffee</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Black/Green tea</div><div className="text-right">120</div>
									<div className="text-left">Iced Tea</div><div className="text-right">150</div>
									<div className="text-left">Espresso</div><div className="text-right">120</div>
									<div className="text-left">Americano</div><div className="text-right">120</div>
									<div className="text-left">Café Latte</div><div className="text-right">140</div>
									<div className="text-left">Cappuccino</div><div className="text-right">300</div>
									<div className="text-left">Frappuccino</div><div className="text-right">300</div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Cigarettes</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Marlboro Red or White</div><div className="text-right">400</div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Tequila</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Agavita Blanco 50ml</div><div className="text-right">230</div>
									<div className="text-left">Margarita Ville Silver 50ml</div><div className="text-right">250</div>
									<div className="text-left">Margarita Ville Gold 50ml</div><div className="text-right">270</div>
									<div className="text-left">Jose Cuervo Silver 50ml</div><div className="text-right">300</div>
									<div className="text-left">Jose Cuervo Gold 50ml</div><div className="text-right">300</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Bottle(750ml)</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Agavita Blanco</div><div className="text-right">1,200</div>
									<div className="text-left">Margarita Ville Silver</div><div className="text-right">1,250</div>
									<div className="text-left">Margarita Ville Gold</div><div className="text-right">1,300</div>
									<div className="text-left">Jose Cuervo Silver</div><div className="text-right">1,500</div>
									<div className="text-left">Jose Cuervo Gold</div><div className="text-right">1,500</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Vodka</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Stolichnaya 45ml</div><div className="text-right">200</div>
									<div className="text-left">Grey Goose 45ml</div><div className="text-right">300</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Bottles</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Stolichnaya (375ml)</div><div className="text-right">800</div>
									<div className="text-left">Stolichnaya (750ml)</div><div className="text-right">1,500</div>
									<div className="text-left">Grey Goose (750ml)</div><div className="text-right">3,000</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">Wine By Glass</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Frontera Merlot 200ml</div><div className="text-right">295</div>
									<div className="text-left">Frontera Chardonnay 200ml</div><div className="text-right">295</div>
									<div className="text-left">Frontera Sauvignon Blanc 200ml</div><div className="text-right">295</div>
									<div className="text-left">Rigol Brut Cava 125ml</div><div className="text-right">320</div>
									<div className="text-left"></div><div className="text-right"></div>
								</div>

								<h3 className="uppercase font-semibold text-2xl my-4">WINES BY BOTTLE (750ml)</h3>
								<div className="grid grid-cols-2">
									<div className="text-left">Frontera Merlot</div><div className="text-right">1,000</div>
									<div className="text-left">Frontera Chardonnay</div><div className="text-right">1,000</div>
									<div className="text-left">Frontera Sauvignon Blanc</div><div className="text-right">1,000</div>
									<div className="text-left">Rigol Brut Cava</div><div className="text-right">1,600</div>
									<div className="text-left">Prosecco Riondo Collezione</div><div className="text-right">1,700</div>
									<div className="text-left">JP Chenet Ice Edition White</div><div className="text-right">1,800</div>
									<div className="text-left">Champagne André</div><div className="text-right">2,500</div>
								</div>
							</div>
							
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
			
			<Footer />
		</div>
	);
}
