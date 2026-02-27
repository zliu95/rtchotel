'use client';

import Image from "next/image";
import FooterWhite from "./components/FooterWhite";
import Header from "./components/Header";
import { MapPin, Palmtree, Sailboat } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations('Home');

	const highlights = [
		{
			icon: <MapPin className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.0.title'),
			body: t('highlights.0.body'),
			image: '/assets/home/Cabarete.jpg'
		},
		{
			icon: <Sailboat className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.1.title'),
			body: t('highlights.1.body'),
			image: '/assets/home/Kiteboarding.jpg'
		},
		{
			icon: <Palmtree className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.2.title'),
			body: t('highlights.2.body'),
			image: '/assets/home/CabareteBeach.jpg'
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
						<div className="container mx-auto px-4 text-center max-w-6xl">
							{/* <h5 className="text-[#2B4579] font-bold uppercase tracking-widest text-sm mb-4">{t('taglineLabel')}</h5> */}
							<h2 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('taglineHeading')}</h2>
							<p className="text-gray-600 text-start leading-relaxed text-base">
								{t('taglineBody')}
							</p>
						</div>
					</section>

					{/* Location/Highlights Grid */}
					<section className="bg-neutral-200 py-14 md:py-16">
						<div className="mx-auto max-w-6xl px-4 space-y-10 md:space-y-12">
							{highlights.map((item, idx) => (
								<article key={idx} className="space-y-4 md:space-y-5">
									<div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.45fr] items-center md:items-center md:gap-8">
										<div className="flex items-center gap-3">
											{item.icon}
											<h3 className="text-3xl md:text-3xl font-medium text-neutral-800">{item.title}</h3>
										</div>
											<p className="text-base md:text-base text-neutral-700 leading-snug">
											{item.body}
										</p>
									</div>
									<div className="overflow-hidden rounded-2xl shadow-sm">
										<img src={item.image} alt={item.title} className="w-full h-60 md:h-[430px] object-cover" />
									</div>
								</article>
							))}
						</div>
					</section>

				</div>

				{/* Geo Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4 text-center max-w-6xl">
						{/* <h5 className="text-[#2B4579] font-bold uppercase tracking-widest text-sm mb-4">{t('taglineLabel')}</h5> */}
						<h2 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('taglineHeading')}</h2>
						<p className="text-gray-600 text-start leading-relaxed text-base">
							{t('taglineBody')}
						</p>
						<div className="overflow-hidden rounded-2xl shadow-sm mt-10">
							<img src="/assets/home/MapLocation.png" alt="Regional Map" className="w-full h-60 md:h-[430px] object-cover" />
						</div>
					</div>
				</section>

			</div>
			<FooterWhite />
		</div>
	);
}
