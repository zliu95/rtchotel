'use client';

import { Heart, Scissors, Sparkles } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

export default function SpaWellness() {
	const t = useTranslations('SpaWellness');
	const messages = useMessages();
	const endorphineryServices = messages?.SpaWellness?.endorphineryServices || [];
	const savingGraceBenefits = messages?.SpaWellness?.savingGraceBenefits || [];
	const servicesCards = messages?.SpaWellness?.servicesCards || [];

	return (
		<div className="">
			<div className="content">
				<div className="py-8 text-center max-w-6xl mx-auto px-4 md:px-6">
					<h1 className="text-3xl md:text-4xl font-nano text-[#2B4579] mb-8">{t('heroTitle')}</h1>
					<div className="my-4">
						<p className="text-gray-700 text-base font-light">{t('heroIntro')}</p>
					</div>
				</div>
				

				{/* Pools Section */}
				<section className="bg-[#f2f2f2] py-10 md:py-14">
					<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
						<h2 className="text-center text-3xl md:text-4xl font-nano font-semibold text-[#1f1f1f]">
							{t('poolsTitle')}
						</h2>
						<div className="mx-auto mt-8 max-w-6xl text-base md:text-base leading-tight text-[#343434]">
							<p>{t('poolsIntro')}</p>
							<p className="mt-3">{t('poolsBody')}</p>
						</div>
						<div className="mt-8 overflow-hidden rounded-3xl">
							<img
								src="/assets/spa/pool-1.webp"
								alt={t('poolsTitle')}
								className="h-auto w-full object-cover"
							/>
						</div>
					</div>
				</section>

				{/* The Endorphinery Section */}
				<section className="bg-white py-16">
					{/* Banner */}
					<div className="w-full bg-[#902526] text-white py-4 mb-12 shadow-md">
						<div className="container mx-auto px-4 flex justify-center items-center">
							<div className="flex items-center space-x-6">
								<div className="hidden md:flex border-4 border-dotted border-white/50 rounded-full p-2 w-20 h-20 items-center justify-center">
									<div className="w-3 h-3 bg-white rounded-full"></div>
								</div>
								<h2 className="text-2xl md:text-3xl font-sans tracking-[0.1em] uppercase">{t('endorphineryBanner')}</h2>
							</div>
						</div>
					</div>
					
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center mb-16">
							<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">{t('endorphineryTitle')}</h3>
							<p className="text-gray-700 leading-relaxed text-lg font-light">
								{t('endorphineryDescription')}
							</p>
						</div>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
							{endorphineryServices.map((name, i) => (
								<div key={name} className="flex flex-col items-center group cursor-pointer">
									<div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#902526] mb-4 shadow-lg transition-transform duration-300 group-hover:scale-105 bg-white">
										<img src={`https://picsum.photos/seed/massage_${i}/300/300`} alt={name} className="w-full h-full object-cover" />
									</div>
									<span className="text-[#902526] font-serif font-bold text-center leading-tight max-w-[120px]">{name}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Beauty Is Art Section */}
				<section className="bg-[#FAF9F6] py-24 border-t border-gray-200">
					<div className="container mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-16 items-start">
							<div className="lg:w-1/3 w-full">
								<div className="bg-[#EAE2D1] p-10 flex items-center justify-center rounded shadow-inner aspect-square">
									<div className="text-center">
										<div className="text-8xl font-serif italic text-black leading-none relative inline-block">
											B
											<span className="absolute top-4 -right-6 text-2xl not-italic font-sans">is</span>
										</div>
										<h3 className="text-3xl font-serif italic text-black border-t-2 border-b-2 border-black py-1 my-2">Beauty is Art</h3>
										<span className="text-sm tracking-[0.3em] font-sans font-bold">SALON</span>
									</div>
								</div>
							</div>
							<div className="lg:w-2/3 w-full">
								<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">{t('beautyTitle')}</h3>
								<p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
									{t('beautyDescription')}
								</p>
								<p className="font-bold text-[#7D8F38] tracking-widest uppercase mb-8">{t('beautyLocation')}</p>
								
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<img src="/assets/spa/salon-1.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Manicure" />
									<img src="/assets/spa/salon-2.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Facial" />
									<img src="/assets/spa/salon-3.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Makeup" />
									<img src="/assets/spa/salon-4.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Nails" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Saving Grace Yoga Section */}
				<section className="bg-white py-24 border-t border-gray-200">
					<div className="container mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-16">
							<div className="lg:w-1/3 flex flex-col items-center">
								<div className="mb-8 text-center">
									<h3 className="text-5xl text-[#00AEEF] font-sans font-light tracking-wide mb-2">{t('savingGraceTitle')}</h3>
									<p className="text-gray-400 tracking-widest uppercase text-sm">{t('savingGraceSubtitle')}</p>
								</div>
								<img src="/assets/spa/Yoga.webp" className="w-full rounded-lg shadow-lg object-cover h-[400px]" alt="Yoga Instructor" />
							</div>
							<div className="lg:w-2/3">
								<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">{t('savingGraceHeroTitle')}</h3>
								<p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
									{t('savingGraceDescription')}
								</p>
								
								<div className="bg-[#F0FAFF] border-l-4 border-[#00AEEF] p-8 mb-8 rounded-r-lg shadow-sm">
									<h4 className="font-bold text-[#00AEEF] mb-6 uppercase tracking-wide text-sm">{t('savingGraceBenefitsTitle')}</h4>
									<ul className="text-gray-700 space-y-3 text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-x-6">
										{savingGraceBenefits.map((benefit) => (
											<li key={benefit} className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">*</span>{benefit}</li>
										))}
									</ul>
								</div>
								
								<div className="flex items-center space-x-2 text-lg font-medium text-gray-800 mb-8 p-4 bg-gray-50 rounded inline-block">
									<span className="text-[#00AEEF] font-bold uppercase tracking-wider">{t('savingGraceScheduleLabel')}</span> 
									<span>{t('savingGraceScheduleValue')}</span>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<img src="/assets/spa/yoga-2.jpg" className="w-full h-48 object-cover rounded shadow-lg" alt="Yoga on Beach" />
									<img src="/assets/spa/yoga-3.jpg" className="w-full h-48 object-cover rounded shadow-lg" alt="Yoga at Sunset" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Services Grid */}
				<section className="bg-tcl-light-blue/20 py-20">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							
							{servicesCards.map((card) => (
								<div key={card.title} className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
									<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
										{card.title.includes('Beauty') ? <Scissors className="text-purple-500" size={32} /> : card.title.includes('Yoga') ? <Sparkles className="text-green-600" size={32} /> : <Heart className="text-tcl-blue" size={32} />}
									</div>
									<h3 className="text-xl font-bold font-serif mb-4">{card.title}</h3>
									<p className="text-sm text-gray-600 mb-4">{card.subtitle}</p>
									<p className="text-gray-500 text-sm leading-relaxed">
										{card.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
				
			</div>
		</div>
	);
}
