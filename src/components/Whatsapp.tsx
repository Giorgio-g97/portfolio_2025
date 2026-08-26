import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() { return <Link className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#1faf57] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-[#25c463]" href="https://wa.me/393203845470" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp className="text-2xl" /></Link>; }
