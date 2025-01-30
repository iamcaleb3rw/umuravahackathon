import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SidebarLinks } from "@/SidebarLinks";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="border p-2 rounded-lg shadow-sm ml-1">
          <Menu size={20} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Utilities</SheetTitle>
            <SheetDescription>Navigate wherever you want</SheetDescription>
          </SheetHeader>
          <div>
            {SidebarLinks.map((link) => (
              <div key={link.path}>{link.label}</div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
