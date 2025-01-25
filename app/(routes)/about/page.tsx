import FeatureCard from "@/components/FeatureCard";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import bannerImg from "@/public/about/bannerImg.png";

const InstitutionsPage = () => {
  return (
    <div>
      <div className="px-3 xl:px-[100px] my-6 min-h-[90vh]">
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between">
          <div className="text-center flex flex-col gap-3 text-[18px] lg:text-left xl:text-md lg:max-w-[500px]">
            <h1 className="text-2xl  font-bold text-primary">Our Story</h1>
            <p className="">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents. <br /> <br /> Driven by our mission to place skilled and
              professional digital talent, we created Skills Challenges as a
              project-based learning solution for talents to gain real-world
              experience, solve problems, and build portfolios so that they
              become ready for global job markets.
            </p>
          </div>
          <div className="bg-primary p-2 border xl:p-8 rounded-2xl max-w-[500px]">
            <video autoPlay controls muted className="rounded-xl">
              <source src="/about/heroVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col gap-4 items-center py-14 px-1 xl:py-[76px] xl:px-[183px] bg-[#F9FAFB]">
        <div className="max-w-[530px] flex flex-col gap-3">
          <h1 className="-tracking-[0.5px] text-darktext text-center text-3xl font-bold">
            Why are we solving this problem
          </h1>
        </div>
        <div className="flex flex-col gap-3 w-full mt-14">
          <FeatureCard
            title={"Bridging the Experience Gap."}
            description={
              "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools."
            }
          />

          <div className="w-full flex flex-col sm:flex-row gap-3">
            <FeatureCard
              title={"Bridging Education and Employment"}
              description={
                "Traditional education doesnt’ always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges."
              }
            />
            <FeatureCard
              title={"Preparing Talents for Global Job Markets"}
              description={
                "We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and shandout globally."
              }
            />
          </div>
        </div>
      </div>
      <div className=" px-2 xl:px-[100px] xl:py-10 min-h-[90vh] flex flex-col xl:flex-row justify-between gap-4 items-center mt-2">
        <div
          className={` max-w-[500px] flex items-start sm:items-center xl:items-start  flex-col gap-7`}
        >
          <h1 className="font-semibold tracking-tight text-2xl sm:text-3xl text-left sm:text-center xl:text-left">
            Skills Challenges Program is built on the Umurava Talent Marketplace
            Platform
          </h1>
          <p className="text-[#2B3338] text-sm max-w-[400px] text-left sm:text-center xl:text-left">
            A Project-based Learning Solution aimed at providing young and
            senior talents with an opportunity to showcase their skills to
            real-world projects and challenges from our partner companies and
            organizations. <br /> <br /> Umurava Skills Challenges enables young
            talents to build a portfolio and experience that increases their
            readiness to access job opportunities and projects.
          </p>
          <Button className="text-sm w-full xl:w-[207px] ">Get Started</Button>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="h-[350px] aspect-square">
            <Image src={bannerImg} alt="Banner Image" className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
