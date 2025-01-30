import React from "react";
import { Input } from "./ui/input";
import { Bell, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="border bg-white flex justify-between px-6 py-2 fixed top-0 w-full lg:w-[calc(100vw-240px)]">
      <div className="bg-muted max-w-[400px] w-full rounded-lg flex items-center px-2">
        <Search strokeWidth={1.2} size={20} className="text-mutedtext" />
        <Input
          placeholder="Search here"
          className="max-w-[400px] border focus-visible:ring-offset-0 ring-offset-0 bg-transparent border-none focus-visible:ring-0 text-mutedtext"
        ></Input>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-muted h-8 w-8 flex items-center justify-center rounded-full">
          <Bell size={20} strokeWidth={1.5} />
        </div>
        <div className="flex items-center justify-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
