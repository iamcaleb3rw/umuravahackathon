import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Img1 from "@/public/homepage/image 1.png";
import Img2 from "@/public/homepage/Image 2.png";
import ReactionImage from "./ReactionImage";
import BannerAvatars from "./BannerAvatars";

const Hero = () => {
  return (
    <div className=" px-2 xl:px-[100px] xl:py-8 flex flex-col xl:flex-row justify-between gap-3 items-center mt-2">
      <div
        className={` max-w-[500px] flex items-start sm:items-center xl:items-start  flex-col gap-6`}
      >
        <h1 className="text-primary font-semibold text-2xl sm:text-4xl text-left sm:text-center xl:text-left">
          Build work experience through Skills Challenges Program
        </h1>
        <p className="text-[#2B3338] text-sm max-w-[400px] text-left sm:text-center xl:text-left">
          Enhance your Employability and Accelerate your Career Growth by
          working on Hands-on projects & hackathons from various businesses &
          organizations.
        </p>
        <Button className="text-sm w-full xl:w-[207px] ">Get Started</Button>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-[370px] max-w-[230px] relative">
          <Image src={Img2} alt="Banner Image" className="w-[100%]" />
          <ReactionImage />
          <BannerAvatars />
        </div>
        <div className="h-[370px] max-w-[230px]">
          <Image src={Img1} alt="Banner Image" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
