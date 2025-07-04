import Image from "next/image";
import Link from "next/link";

export default function ChatButton() {
    return (
        <div className="relative">
            <div className="fixed bottom-10 right-10 z-10">
                <Link href="https://api.whatsapp.com/send?phone=14168285256&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">
                    <div className="bg-green-400 rounded-full p-3 h-16 w-16 flex justify-center items-center bg-shadow-lg shadow-lime-950 shadow-2xl">
                        <Image src="assets/whatsapp.svg" width={40} height={40} alt="whatsapp" />
                    </div>
                </Link>
            </div>
        </div>
    )
}