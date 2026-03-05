'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useMessages, useTranslations } from "next-intl";

export default function Accomodations() {
	const router = useRouter();
	const t = useTranslations('Accomodations');
	const messages = useMessages();
	const rooms = messages?.Accomodations?.rooms || [];
	const slideImages = [
		'/assets/accomodations/slides/Accommodation-1.webp',
		'/assets/accomodations/slides/Accommodation-2.webp',
		'/assets/accomodations/slides/Accommodation-3.webp',
		'/assets/accomodations/slides/Accommodation-4.webp',
		'/assets/accomodations/slides/Accommodation-5.webp',
	];
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		if (slideImages.length <= 1) return;
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slideImages.length);
		}, 3500);
		return () => clearInterval(timer);
	}, [slideImages.length]);

	return (
		<div className="">
			<div className="content">
				<div className="w-full">
					{/* Header */}
					<div className="container mx-auto bg-tcl-light-blue/30 pt-12 pb-8 text-center max-w-6xl">
						<h1 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('title')}</h1>
						<p className="text-gray-600 text-center leading-relaxed text-base">
							{t('subtitle')}
						</p>
					</div>

					{/* Header Slideshow */}
					<section className="mx-auto w-2/3 px-4 mt-2">
						<div className="relative overflow-hidden rounded-2xl shadow-sm">
							<div className="relative h-60 md:h-[420px]">
								{slideImages.map((image, idx) => (
									<img
										key={image}
										src={image}
										alt={`Accommodation slide ${idx + 1}`}
										className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
									/>
								))}
							</div>
							<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
								{slideImages.map((_, idx) => (
									<span
										key={`dot-${idx}`}
										className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/70'}`}
									/>
								))}
							</div>
						</div>
					</section>

					{/* Room List */}
					<section className="bg-white w-2/3 mx-auto mt-10">
						<div className="container mx-auto px-4 py-12">
							<div className="space-y-12">
								{rooms.map((room) => (
									<div key={room.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
									<div className="md:w-1/3">
										<img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover min-h-[250px]" />
									</div>
									<div className="md:w-2/3 p-8 flex flex-col justify-between">
										<div>
										<h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{room.name}</h3>
										<div className="flex space-x-4 mb-4 text-gray-500 text-sm">
											{room.amenities.map(amenity => (
											<span key={amenity} className="flex items-center">
												<span className="w-1 h-1 bg-tcl-gold rounded-full mr-2"></span>
												{amenity}
											</span>
											))}
										</div>
										<p className="text-gray-600 mb-6">{room.description}</p>
										</div>
										
										<div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
										<div className="text-sm text-gray-500">
											<a href="https://direct-book.com/properties/HotelTropicalCasaLagunaDirect/policies" className="underline hover:text-tcl-blue">{t('amenitiesLink')}</a>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-xs text-green-600 font-bold mb-1 flex items-center">
											<span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> {t('todaysLowRate')}
											</span>
											<button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wide transition-colors" 
												onClick={() => {router.push(`https://direct-book.com/properties/HotelTropicalCasaLagunaDirect?check_in_date=${format(new Date(), "MM-dd-yyyy")}&check_out_date=${format(new Date(), "MM-dd-yyyy")}&number_adults=${2}`)}}>
											{t('checkRates')}
											</button>
										</div>
										</div>
									</div>
									</div>
								))}
							</div>
						</div>
					</section>
					
				<div className="flex justify-center">
					{/* <div className="grid grid-cols-2 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="object-cover" /></div>
					</div> */}
				</div>
			</div>
		</div>	
		</div>		
	);
}
