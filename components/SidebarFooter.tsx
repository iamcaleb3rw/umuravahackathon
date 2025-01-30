"use client";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { FooterLinks } from "@/SidebarLinks";
import { LogOut } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SidebarFooter = () => {
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 mb-5">
        {FooterLinks.map((link, index) => {
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
      <div className="flex items-center gap-3">
        {user?.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full ring-1 ring-white"
          />
        ) : (
          <div className="h-10 w-10 bg-pink-600 rounded-full"></div>
        )}
        <div className="text-white text-xs">
          <ClerkLoading>
            <Skeleton className="w-[120px] h-[40px]" />
          </ClerkLoading>
          <ClerkLoaded>
            <p>{user?.firstName}</p>
            <p>{`${user?.primaryEmailAddress}`}</p>
          </ClerkLoaded>
        </div>
        <div className="cursor-pointer hover:scale-105 justify-end">
          <SignOutButton redirectUrl="/">
            <LogOut className="text-white" size={20} />
          </SignOutButton>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
