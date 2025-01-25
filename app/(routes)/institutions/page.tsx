import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import bannerImg from "@/public/about/Image 3.png";
import FeatureCard from "@/components/FeatureCard";

const InstitutionsPage = () => {
  return (
    <div>
      <div className=" px-2 xl:px-[100px] xl:py-10 min-h-[90vh] flex flex-col xl:flex-row justify-between gap-4 items-center mt-2">
        <div
          className={` max-w-[500px] flex items-start sm:items-center xl:items-start  flex-col gap-7`}
        >
          <p className="text-primary tracking-tight  text-2xl font-bold sm:text-[25px] text-left sm:text-center xl:text-left">
            Accelerate Your Students and Traineess Employability and Career
            Growth through Project-based Learning Solution
          </p>
          <p className="text-[#2B3338] text-[18px] max-w-[400px] text-left sm:text-center xl:text-left">
            We partner with Universities, Schools, and Trainining Institutions
            to build the work experience of their students and trainees through
            project based learning challenges and hackathons Partner with us
          </p>
          <Button className="text-sm w-full xl:w-[207px] ">
            Partner with Us
          </Button>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="">
            <Image src={bannerImg} alt="Banner Image" className="w-[100%]" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-12 py-20 px-2 sm:px-6 xl:px-20 py-18 min-h-screen bg-muted">
        <div>
          <h1 className="text-2xl md:text-3xl text-darktext text-center tracking-tight font-bold">
            Key Offerings & Benefits:
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
            <FeatureCard
              title={"Employability and Career Development Opportunities"}
              description={
                "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes.."
              }
            />
            <FeatureCard
              title={"Practical Application of Classroom Knowledge"}
              description={
                "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses."
              }
            />
            <FeatureCard
              title={"Students & Trainees Engagement"}
              description={
                "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices  that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey."
              }
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
            <div className="xl:col-span-2 h-full">
              <FeatureCard
                title={"Access to the Industry Experts & Mentors"}
                description={
                  "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field."
                }
              />
            </div>
            <div className="xl:col-span-1">
              <FeatureCard
                title={"Skills Assessments"}
                description={
                  "Embed our projects based tests and skills assessments directly into your curriculum."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
