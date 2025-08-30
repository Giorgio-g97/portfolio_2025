import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Link
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
      href="https://wa.me/393203845470"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-2xl" />
    </Link>
  );
};

export default Whatsapp;