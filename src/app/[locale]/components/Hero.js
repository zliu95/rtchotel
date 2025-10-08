'use client'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import heroLobby from "../../../../public/slides/170819978.jpg";
import heroPool from "../../../../public/slides/170819992.jpg";
import heroBeach from "../../../../public/slides/170819994.jpg";
import { Button } from "./ui/button";
import Image from "next/image";
import Navbar from "./Navbar";
import HeroNav from "./HeroNav";

const slides = [
  { image: heroLobby, alt: "Luxury hotel lobby" },
  { image: heroPool, alt: "Resort pool" },
  { image: heroBeach, alt: "Beach paradise" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute top-0 z-50 w-full transition-all duration-300 bg-card/95">
            <HeroNav />
        </div>
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            >
            <Image
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />
            </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-8">
            <Button
                variant="luxuryOutline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="luxuryOutline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-gold" : "w-2 bg-card/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
