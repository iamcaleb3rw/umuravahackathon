import Image from "next/image";
import React from "react";
import logo from "@/public/homepage/careerticket.png";
import SocialMedia from "./SocialMedia";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { FaGooglePlusG, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FooterProps {
  className: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={`${className}  px-3 sm:px-14 bg-[#001A40] flex flex-col`}>
      <div className="flex flex-wrap justify-between items-center mt-10 py-2 border-b border-gray-700">
        <Image src={logo} alt="Logo" width={60} />
        <div className="flex gap-1">
          <SocialMedia icon={Facebook} />
          <SocialMedia icon={FaGooglePlusG} className="h-6 w-6" />
          <SocialMedia icon={FaLinkedinIn} />
          <SocialMedia icon={FaYoutube} />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-between mt-10 py-2 border-b border-gray-700">
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold">Our Address</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-mutedtext">
              <Mail strokeWidth={0.9} size={20} />
              <p className="text-sm">career@tickets.com</p>
            </div>
            <div className="flex items-center gap-2 text-mutedtext">
              <MapPin strokeWidth={0.9} size={20} />
              <p className="text-sm">89 KG 14 Ave, Kigali</p>
            </div>
            <div className="flex items-center gap-2 text-mutedtext">
              <Phone strokeWidth={0.9} size={20} />
              <p className="text-sm">+250 700 000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <h1 className="text-white font-bold">Quick Links</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-mutedtext">
              <p className="text-sm">Home</p>
            </div>
            <div className="flex items-center gap-2 text-mutedtext">
              <p className="text-sm">Program</p>
            </div>
            <div className="flex items-center gap-2 text-mutedtext">
              <p className="text-sm">About</p>
            </div>
            <div className="flex items-center gap-2 text-mutedtext">
              <p className="text-sm">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold">
            Join our newsletter to keep up to date with us
          </h1>
          <div className="bg-white w-full min-h-12 p-2 flex rounded-xl">
            <Input
              placeholder="Email"
              className="border-none focus-visible:ring-0 focus-visible:"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="text-mutedtext flex flex-wrap items-center text-sm py-4 justify-between">
        <div>Copyright &copy; All rights reserved SawaPay 2025.</div>
        <div>Privacy Policy | Terms and Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
