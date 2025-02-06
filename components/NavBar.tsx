"use client";
import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/public/dashboard/sidebarlogo.png";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { DashboardSidebar } from "./Sidebar";
import { SidebarLinks } from "@/SidebarLinks";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import SearchBar from "./Search";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-2">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-4 md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-64 p-0 bg-primary text-white"
            >
              <SheetHeader>
                <SheetTitle className="p-3">
                  <Image src={Logo} alt="Umurava Logo" width={40} />
                </SheetTitle>
                <SheetDescription className="text-left text-white"></SheetDescription>
              </SheetHeader>
              <div className="ml-3 mt-4 flex flex-col gap-3">
                {SidebarLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      href={link.path}
                      className="flex gap-2 text-sm items-center"
                    >
                      <link.Icon strokeWidth={1.3} />
                      <p>{link.label}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>

        <div className=" flex items-center">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-muted rounded-full"
            >
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
