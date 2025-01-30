"use client";
import React from "react";
import Logo from "@/public/dashboard/sidebarlogo.png";
import Image from "next/image";
import { SidebarLinks } from "@/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SidebarFooter from "./SidebarFooter";
const SidebarComponent = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary hidden lg:flex justify-between flex-col h-screen lg:w-[240px] p-2">
      <div>
        <div>
          <Image src={Logo} alt="Logo Image" width={40} />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          {SidebarLinks.map((link, index) => {
            const isActive = link.path === pathname;
            console.log(isActive);
            return (
              <Link
                href={link.path}
                key={index}
                className={cn(
                  "text-xs flex items-center gap-2 text-white px-2 py-2 rounded-lg",
                  isActive && "bg-white text-primary"
                )}
              >
                <link.Icon strokeWidth={1.2} size={20} />
                <span className="">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <SidebarFooter />
    </div>
  );
};

export default SidebarComponent;
