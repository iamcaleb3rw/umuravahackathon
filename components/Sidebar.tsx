"use server";
import Logo from "@/public/dashboard/sidebarlogo.png";
import Image from "next/image";
import { FooterLinks, SidebarLinks } from "@/SidebarLinks";

import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export const DashboardSidebar = async () => {
  const user = await currentUser();
  return (
    <div className="flex flex-col h-full bg-primary">
      <div className="h-14 flex items-center px-4">
        <Image src={Logo} alt="Umurava Logo" />
      </div>
      <nav className="flex-1 flex flex-col justify-between overflow-y-auto p-4 text-white text-sm">
        <ul className="space-y-2">
          {SidebarLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                className="flex items-center p-2  rounded-lg"
              >
                <item.Icon className="w-5 h-5  transition duration-75" />
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <ul className="space-y-2">
            {FooterLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  className="flex items-center p-2  rounded-lg"
                >
                  <item.Icon className="w-5 h-5  transition duration-75" />
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            {user?.imageUrl ? (
              <Image
                src={user.imageUrl}
                width={35}
                height={35}
                alt="Image"
                className="rounded-full"
              />
            ) : (
              <div className="h-8 w-8 bg-pink rounded-full" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
