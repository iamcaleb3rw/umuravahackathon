"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import errorAnimation from "@/public/homepage/404lottie.json";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center flex-col">
      <p className="text-2xl font-semibold">
        The page you are looking for cannot be found
      </p>
      <div className="w-[300px]">
        <Lottie animationData={errorAnimation} />
      </div>
      <Link href={"/"}>
        <Button variant={"outline"}>Back to Homepage</Button>
      </Link>
    </div>
  );
}
