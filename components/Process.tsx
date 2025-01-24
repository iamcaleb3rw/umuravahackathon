import React from "react";
import stepOne from "@/public/homepage/step1.png";
import stepTwo from "@/public/homepage/step2.png";
import StepComponents from "./StepComponents";

const Process = () => {
  return (
    <div className="bg-muted min-h-screen flex flex-col gap-[100px] items-center py-14">
      <div>
        <h1 className="text-2xl md:text-4xl text-darktext font-bold tracking-tight">
          How to Get Started
        </h1>
      </div>
      <div className="max-w-[980px] min-h-[700px] w-full grid-cols-1 grid sm:grid-cols-2 gap-4">
        <div className=" grid grid-rows-2 gap-4">
          <div className="">
            <StepComponents
              image={stepOne}
              title={"Sign up on Umurava Platform"}
              description={"Submit your completed project for evaluation."}
              badge={"Step 1"}
            />
          </div>
          <div className="">
            <StepComponents
              image={stepTwo}
              title={"Browse Open Challenges"}
              description={
                "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals"
              }
              badge={"Step 2"}
            />
          </div>
        </div>
        <div className=" grid grid-rows-3 gap-4">
          <div className="">
            <StepComponents
              title={"Register and Participate"}
              description={
                "Sign up for the challenge and start working on the project."
              }
              badge={"Step 3"}
            />
          </div>
          <div className="">
            <StepComponents
              title={"Submit your work"}
              description={"Submit your completed project for evaluation"}
              badge={"Step 4"}
            />
          </div>
          <div className=" ">
            <StepComponents
              title={"Receive Feedback and Recognition"}
              description={
                "Get feedback on your work and celebrate your achievements"
              }
              badge={"Step 5"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
