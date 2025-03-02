import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      <Link
        className="fixed bottom-5 right-5 text-5xl hover:scale-110 transition-all"
        href="https://wa.me/393203845470"
      >
        <FaWhatsapp />
      </Link>
    </>
  );
};

export default Whatsapp;
