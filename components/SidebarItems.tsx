"use client";
import { cn } from "@/lib/utils";
import { SidebarLinks } from "@/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const SidebarItems = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="space-y-2">
        {SidebarLinks.map((item) => {
          const isActive = item.path === pathname;

          // Add active class to the current link

          return (
            <li key={item.label}>
              <Link
                href={item.path}
                className={cn(
                  "flex items-center p-[9px]  rounded-lg",
                  isActive && "bg-white text-primary"
                )}
              >
                <item.Icon className="w-5 h-5  transition duration-75" />
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarItems;
