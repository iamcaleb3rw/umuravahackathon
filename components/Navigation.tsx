import React from "react";
import umuravaLogo from "@/public/homepage/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import MobileMenu from "./MobileMenu";

import { links } from "@/navLinks";
import Path from "./Path";

const Navigation = () => {
  return (
    <div>
      <nav className=" px-3 xl:px-[100px] py-6 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image src={umuravaLogo} alt="Umurava logo" width={125} />
        </div>
        <div className="hidden xl:flex gap-8">
          {links.map((link, index) => (
            <div key={index}>
              <Link href={link.path}>
                <p className="text-[#2B3338] text-sm hover:text-primary">
                  {link.name}
                </p>
              </Link>
              <div className="hidden">
                <Path pathName={link.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Button variant={"navButton"} className="hidden xl:block">
            Join the Program
          </Button>
          <div className="xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
