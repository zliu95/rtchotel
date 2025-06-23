'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

const SlideShow = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    function handleShowPrevImage() {
        setCurrentIndex((prevIndex) => {
            if (prevIndex - 1 < 0) {
                return slides.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }
    function handleShowNextImage() {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 >= slides.length) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }
    return (
        <div className="slider relative">
            {slides? <>
                {slides.map((url, index) => (
                    <Link key={index} href={`/tour/${url.slug}`}>
                    <div 
                        className={`relative w-full aspect-[16/5] overflow-hidden transition duration-500 ease-in-out ${currentIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                    >
                        <Image
                            src={url.image}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    </Link>
                ))}
                <div className="w-full z-40 cursor-pointer select-none">
                    <div className="top-1/2 -translate-y-1/2 left-button absolute left-4 z-40" aria-label="左翻页" onClick={handleShowPrevImage}>
                        <Image src="/assets/arrow-left.svg" width="80" height="80" alt="左箭头" className="opacity-50 hover:opacity-80" />
                    </div>
                    <div className="top-1/2 -translate-y-1/2 right-button absolute right-4 z-40" aria-label="右翻页" onClick={handleShowNextImage}>
                        <Image src="/assets/arrow-right.svg" width="80" height="80" alt="右箭头" className="opacity-50 hover:opacity-80" />
                    </div>
                </div>
                <div className="w-full absolute top-1/2 -translate-y-1/2 flex justify-center">
                    <div>
                        {slides[currentIndex].title && <h1 className="text-white text-6xl font-bold text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{slides[currentIndex].title}</h1>}
                        {slides[currentIndex].content && <p className="text-white text-xl font-medium text-center p-4 bg-gray-800 rounded-xl my-4 opacity-75" dangerouslySetInnerHTML={{ __html: slides[currentIndex].content }} />}
                    </div>
                </div>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    {slides && slides.map((_, index) => (
                        <span key={index} className={`h-2 rounded-full ${slides.indexOf(slides[index]) === currentIndex ? 'bg-black' : 'bg-gray-800'}`}
                        />
                    ))}
                </div>
            </> : <>
                <div className="w-full min-h-80 flex justify-center items-center">
                    <Image src="/loading.svg" alt="Loading" width={100} height={100} />
                </div>
            </>}
        </div>
    );
};

export default SlideShow