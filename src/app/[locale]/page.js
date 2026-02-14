'use client';

import Image from "next/image";
import FooterWhite from "./components/FooterWhite";
import Header from "./components/Header";
import { MapPin, Palmtree, Wind } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations('Home');

	const highlights = [
		{
			icon: <MapPin className="text-tcl-gold" size={24} />,
			title: t('highlights.0.title'),
			body: t('highlights.0.body')
		},
		{
			icon: <Wind className="text-tcl-gold" size={24} />,
			title: t('highlights.1.title'),
			body: t('highlights.1.body')
		},
		{
			icon: <Palmtree className="text-tcl-gold" size={24} />,
			title: t('highlights.2.title'),
			body: t('highlights.2.body')
		}
	];

	const teasers = [
		{
			href: "/dining",
			image: "https://picsum.photos/seed/dining/600/800",
			title: t('teasers.0.title'),
			description: t('teasers.0.description')
		},
		{
			href: "/spa",
			image: "https://picsum.photos/seed/spa/600/800",
			title: t('teasers.1.title'),
			description: t('teasers.1.description')
		},
		{
			href: "/residences",
			image: "https://picsum.photos/seed/condo/600/800",
			title: t('teasers.2.title'),
			description: t('teasers.2.description')
		}
	];

	return (
		<div className="">
			<Header />
			<div className="content">
				<div>
					{/* Intro Section */}
					<section className="py-20 bg-white">
						<div className="container mx-auto px-4 text-center max-w-4xl">
							<h5 className="text-tcl-gold font-bold uppercase tracking-widest text-sm mb-4">{t('taglineLabel')}</h5>
							<h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">{t('taglineHeading')}</h2>
							<p className="text-gray-600 leading-relaxed text-lg">
								{t('taglineBody')}
							</p>
						</div>
					</section>

					{/* Location/Highlights Grid */}
					<section className="bg-gray-50 py-20">
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
								<div className="order-2 md:order-1 space-y-8">
									{highlights.map((item, idx) => (
										<div key={idx}>
											<div className="flex items-center space-x-3 mb-4">
												{item.icon}
												<h3 className="text-2xl font-serif font-bold text-gray-800">{item.title}</h3>
											</div>
											<p className="text-gray-600">
												{item.body}
											</p>
										</div>
									))}
								</div>
								<div className="order-1 md:order-2">
									<div className="grid grid-cols-2 gap-4">
										<img src="/assets/home/resort-1.jpg" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-0" alt="Kitesurfing" />
										<img src="/assets/home/resort-2.jpg" className="rounded-lg shadow-lg w-full h-64 object-cover" alt="Town Life" />
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Teaser Sections */}
					{/* <section className="py-20">
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{teasers.map((item) => (
									<Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
										<img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
											<h3 className="text-white font-serif text-2xl font-bold mb-2">{item.title}</h3>
											<p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
												{item.description}
											</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</section> */}
				</div>
				<div className="w-full py-10 px-4">
					<div className="text-center">
						<h1 className="text-3xl md:text-4xl font-serif text-gray-800">{t('oasisBanner')}</h1>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-4 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
					</div>
				</div>
				<section className="my-20 container mx-auto px-4">
					<div className="w-2/3 mx-auto"></div>
						
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-2">
								<div>
									<img src="/assets/residences/map-1.jpg" className="w-full h-52 object-cover rounded shadow mb-2" alt="Flight Map" />
									<img src="/assets/residences/map-2.jpg" className="w-full h-56 object-cover rounded shadow mt-2" alt="Regional Map" />
								</div>
								
								<img src="/assets/residences/map-3.jpg" className=" w-full h-110 object-cover rounded shadow" alt="Satellite View" />
							</div>
						</div>
						<div className="bg-white p-10 rounded-xl shadow-lg text-center md:text-left">
							<div className="font-mono my-4 w-2/3 mx-auto">
								{t('geoLead')}
							</div>
							<div className="w-2/3 mx-auto">
								{t('geoBody')}
							</div>
						</div>
					</div>
				</section>
			</div>
			<FooterWhite />
		</div>
	);
}
