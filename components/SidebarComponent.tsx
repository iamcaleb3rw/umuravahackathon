import React from "react";
import Logo from "@/public/dashboard/sidebarlogo.png";
import Image from "next/image";
const SidebarComponent = () => {
  return (
    <div className="bg-primary h-full w-[220px] p-2">
      <div>
        <Image src={Logo} alt="Logo Image" width={40} />
      </div>
    </div>
  );
};

export default SidebarComponent;
