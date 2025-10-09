import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import BookingWidget from './BookingWidget';

export default function Header() {


    return (
        <>
            <Navigation />
            <div className="relative">
                <Hero />
                <BookingWidget />
            </div>
        </>
    );
}