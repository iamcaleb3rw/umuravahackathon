import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { links } from "@/navLinks";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-primary text-left">
            Browse the platform
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-4">
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              <div className=" ml-2 text-center  text-dark-muted p-2 underline  rounded">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
