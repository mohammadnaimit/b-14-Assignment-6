import React from "react";
import FooterLogo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] border-t border-gray-800/60 py-6 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
       
        <div className="flex gap-2 items-center">
          <Image src={FooterLogo} alt="Book VIbe" width={50} height={50} />
          <span className="text-xl font-bold">FITLOG</span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
