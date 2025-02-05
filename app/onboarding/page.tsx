"use client";
import React, { useState } from "react";
import Logo from "@/public/homepage/logo.png";
import Image from "next/image";
import Lottie from "lottie-react";
import webLottie from "@/public/about/Web.json";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";

const Onboarding = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChoice = (choice: string) => {
    // Navigate to the dashboard with the user's choice
    router.push(`/dashboard?role=${choice}`);
  };

  return (
    <div className="min-h-screen flex items-center bg-muted justify-center">
      <div className="bg-white border rounded-2xl">
        <div className="flex justify-center border-b">
          <Image src={Logo} alt="Umurava Logo" width={145} />
        </div>
        <div className="max-w-[900px] w-full grid grid-cols-2">
          <div className="p-3">
            <div>
              <h1 className="text-2xl text-darktext font-bold tracking-tighter">
                Tell us about yourself
              </h1>
              <p className="text-mutedtext">
                Complete the survey for a more personalized experience of the
                Umurava Skills Challenge platform.
              </p>
            </div>
            <div>
              <Lottie animationData={webLottie} loop={true} />
            </div>
          </div>
          <div className="p-3 flex flex-col gap-3 items-center justify-center">
            <h1>How do you wish to proceed?</h1>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full">
                <Button
                  className="w-full group"
                  variant={"outline"}
                  onClick={() => handleChoice("talent")}
                >
                  As a Talent
                  <MoveRightIcon className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
              <div className="w-full">
                <Button
                  className="w-full group"
                  variant={"outline"}
                  onClick={() => handleChoice("organizer")}
                >
                  As an Organizer
                  <MoveRightIcon className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
