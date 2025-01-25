import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import bannerImg from "@/public/about/Image 3.png";
import FeatureCard from "@/components/FeatureCard";

import toriLogo from "@/public/about/Tori 1.png";
import gdgLogo from "@/public/about/Gdg_Kigali 1.png";
import eduCollabLogo from "@/public/about/EducationCollaborative 1.png";
import keplerLogo from "@/public/about/KeplerLogo 1.png";
import hillLogo from "@/public/about/HiiL_Logo 1.png";
import cibaLogo from "@/public/about/CIBA 1.png";
import aredLogo from "@/public/about/Ared 1.png";
import igiheLogo from "@/public/about/IGIHE_LOGO 1.png";
import viamoLogo from "@/public/about/viamo.png";
import lateriteLogo from "@/public/about/laterite.png";
import sokoFund from "@/public/about/SokoFund 1.png";
import dashBoardImage from "@/public/homepage/banner_img 1.png";
import ListComponent from "@/components/ListComponent";
import ellipseImage from "@/public/homepage/ellipse.svg";

const companies = [
  { logo: toriLogo },
  { logo: gdgLogo },
  { logo: eduCollabLogo },
  { logo: keplerLogo, width: 90 },
  { logo: hillLogo },
  { logo: cibaLogo, width: 100 },
  { logo: aredLogo },
  { logo: igiheLogo },
  { logo: viamoLogo },
  { logo: lateriteLogo },
  { logo: sokoFund, width: 100 },
];

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
      <div className="min-h-[80vh] flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl max-w-[600px] md:text-3xl text-darktext text-center tracking-tight font-bold">
          Join a few Educational Institutions using Skills Challenges by Umurava
        </h1>
        <div className="px-2 grid grid-cols-6 gap-1 sm:gap-2 xl:gap-8 text-center justify-items-center ">
          {companies.map((company, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Image
                src={company.logo}
                alt="Logo"
                width={company.width ? company.width : 150}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-14 bg-muted min-h-screen py-16 border-b">
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl md:text-3xl font-bold text-darktext max-w-[700px] mx-auto text-center">
            How Skills Challenges Program can Be Integrated into your Learning
            Institution
          </h1>
        </div>
        <div className="px-3 xl:px-24 flex flex-col lg:flex-row gap-5 items-start sm:items-center justify-between">
          <div className=" flex flex-col gap-6">
            <ListComponent
              number={"1"}
              text={"As Career Development and Job Readiness Program"}
            />
            <ListComponent
              number={"2"}
              text={"As Skills Assessments Method after a course or a term"}
            />
            <ListComponent
              number={"3"}
              text={
                "As extracurricular activities to complement academic courses"
              }
            />
            <ListComponent
              number={"4"}
              text={"As the portfolio of the Students"}
            />
            <ListComponent
              number={"5"}
              text={"As part of Capstone Projects or final-year assignments "}
            />
          </div>
          <div>
            <Image
              src={dashBoardImage}
              alt="bannerImg"
              className="max-w-[450px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="px-2 xl:px-[110px] flex flex-col w-full border items-center justify-center py-[50px]  min-h-[50vh]">
        <div className="relative min-h-[290px] w-full flex items-center justify-center xl:px-[75px] bg-primary rounded-[26px] overflow-hidden">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-[400px] text-center">
              Ready to transform your learning insitituion?
            </h2>
            <Button
              className="text-primary max-w-[250px]"
              size={"lg"}
              variant={"secondary"}
            >
              Partner with Us
            </Button>
          </div>
          <Image
            src={ellipseImage}
            alt="Ellipse Image"
            className="absolute -left-60 -bottom-[360px]"
          />
          <Image
            src={ellipseImage}
            alt="Ellipse Image"
            className="absolute -right-[270px] -top-[370px]"
          />
        </div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
