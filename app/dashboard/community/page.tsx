"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { Suspense } from "react";
import SendImage from "@/public/dashboard/send.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const Community = () => {
  return (
    <Suspense fallback={<p>Loading.....</p>}>
      <div>
        <Dialog open>
          <DialogContent className="p-12">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-8 items-center text-center justify-center">
              <div className="p-6 w-fit rounded-full bg-primary/30">
                <Image src={SendImage} alt="Send image" width={70} />
              </div>
              <div className="flex flex-col gap-3 max-w-[380px]">
                <h1 className="text-xl font-semibold">
                  Join our WhatsApp Community
                </h1>
                <p className="text-mutedtext">
                  Get notified on the latest projects and hackathons
                </p>
              </div>
              <div>
                <Button className="max-w-[150px] w-full">Join</Button>
                <Link href="/dashboard">
                  <Button variant={"link"}>Cancel</Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Suspense>
  );
};

export default Community;
