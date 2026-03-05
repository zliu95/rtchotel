'use client';

import { useEffect, useState } from "react";
import FooterWhite from "./components/FooterWhite";
import Header from "./components/Header";
import { MapPin, Palmtree, Sailboat } from "lucide-react";
import { useTranslations } from "next-intl";

function HighlightCarousel({ images, alt }) {
	const safeImages = (images || []).filter(Boolean);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setCurrentIndex(0);
	}, [safeImages.length]);

	useEffect(() => {
		if (safeImages.length <= 1) return;
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % safeImages.length);
		}, 3500);
		return () => clearInterval(timer);
	}, [safeImages.length]);

	if (safeImages.length === 0) {
		return null;
	}

	return (
		<div className="relative overflow-hidden rounded-2xl shadow-sm">
			<div className="relative h-60 md:h-[430px]">
				{safeImages.map((image, index) => (
					<img
						key={`${alt}-${image}-${index}`}
						src={image}
						alt={alt}
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
					/>
				))}
			</div>
			{safeImages.length > 1 && (
				<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
					{safeImages.map((_, dotIndex) => (
						<span
							key={`${alt}-dot-${dotIndex}`}
							className={`h-2 rounded-full transition-all ${dotIndex === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/70'}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default function Home() {
	const t = useTranslations('Home');

	const highlights = [
		{
			icon: <MapPin className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.0.title'),
			body: t('highlights.0.body'),
			image: '/assets/home/Cabarete.jpg',
			gallery: [
				'/assets/home/in-the-heart-of-cabarete/001.webp',
				'/assets/home/in-the-heart-of-cabarete/002.webp',
				'/assets/home/in-the-heart-of-cabarete/003.webp',
				'/assets/home/in-the-heart-of-cabarete/004.webp',
			],
		},
		{
			icon: <Sailboat className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.1.title'),
			body: t('highlights.1.body'),
			image: '/assets/home/Kiteboarding.jpg',
			gallery: [
				'/assets/home/world-class-watersports/001.webp',
				'/assets/home/world-class-watersports/002.webp',
				'/assets/home/world-class-watersports/003.webp',
				'/assets/home/world-class-watersports/004.webp',
			],
		},
		{
			icon: <Palmtree className="text-neutral-800" size={24} strokeWidth={2.5} />,
			title: t('highlights.2.title'),
			body: t('highlights.2.body'),
			image: '/assets/home/CabareteBeach.jpg',
			gallery: [
				'/assets/home/lush-surroundings/001.webp',
				'/assets/home/lush-surroundings/002.webp',
				'/assets/home/lush-surroundings/003.webp',
				'/assets/home/lush-surroundings/004.webp',
				'/assets/home/lush-surroundings/005.webp',
			],
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
									<div className="grid grid-cols-1 gap-2 md:grid-cols-1 items-center md:items-center md:gap-8">
										<div className="flex justify-center items-center gap-3">
											{item.icon}
											<h3 className="text-3xl md:text-3xl font-medium text-neutral-800">{item.title}</h3>
										</div>
											<p className="text-center md:text-center text-neutral-700 leading-snug">
											{item.body}
										</p>
									</div>
									<HighlightCarousel
										images={(item.gallery && item.gallery.length > 0) ? item.gallery : [item.image]}
										alt={item.title}
									/>
								</article>
							))}
						</div>
					</section>

				</div>

					{/* Geo Section */}
					<section className="py-20 bg-white">
						<div className="container mx-auto px-4 text-center max-w-6xl">
							<h2 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('geoTitle')}</h2>
							<p className="text-gray-600 text-start leading-relaxed text-base">
								{t('geoLead')}
							</p>
							<p className="text-gray-600 text-start leading-relaxed text-base mt-4">
								{t('geoBody')}
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
