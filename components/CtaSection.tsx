import React from "react";
import bottomEllipse from "@/public/homepage/bottomellipse.png";
import cornerEllipse from "@/public/homepage/cornerellipse.png";
import Image from "next/image";
import bannerImage from "@/public/homepage/Rectangle 4386 1.png";
import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <div className="min-h-[90vh] py-20 border-t xl:px-24">
      <div className="h-full w-full bg-primary flex flex-col lg:flex-row pb-3 lg:items-center gap-6 lg:gap-[150px] lg:px-16 lg:py-8 relative rounded-[30px]">
        <div className=" w-full lg:w-[400px] z-20">
          <Image src={bannerImage} alt="banner" className="w-[100%]" />
        </div>
        <div className="text-white px-2 lg:ml-0 flex flex-col gap-4 lg:max-w-[450px]">
          <h1 className="text-2xl  lg:text-[27px] font-bold">
            Ready to Unlock Your Career Potential Today!
          </h1>
          <p>
            Join a challenge or a hackathon to gain valuable work experience,
            build an impressive portofolio and increase your chances to land job
            opportunities and accelerate your career growth
          </p>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="text-primary w-full  lg:w-[200px]"
          >
            View Challenge
          </Button>
        </div>
        <Image
          src={bottomEllipse}
          alt="Ellipse Image"
          width={450}
          className="absolute bottom-0 left-6"
        />

        <Image
          src={cornerEllipse}
          alt="Ellipse Image"
          width={170}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default CtaSection;
