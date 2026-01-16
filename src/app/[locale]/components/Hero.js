'use client'
import HeroNav from "./HeroNav";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 z-50 w-full transition-all duration-300 bg-card/95">
            <HeroNav />
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://rtc-hotel.s3.us-east-1.amazonaws.com/hotel.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />
    </section>
  );
};
