"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EmailAddress } from "@clerk/nextjs/server";

interface RegisterButtonProps {
  id: string | undefined;
  clerkId: string | undefined;
  firstName: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
}

const RegisterButton = ({
  id,
  clerkId,
  firstName,
  email,
  avatarUrl,
}: RegisterButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(id, clerkId, firstName);
  const handleJoin = async () => {
    setLoading(true);
    try {
      await axios.patch(`/api/participate`, {
        id,
        clerkId,
        firstName,
        email,
        avatarUrl,
      });
      toast.success(`Your participation was successfully recorded`); // Show success toast
      setTimeout(() => {
        router.refresh();
      }, 2000); // Redirect after 2 seconds
    } catch (error: any) {
      console.error("Error deleting hackathon:", error);
      toast.error("Failed to delete hackathon"); // Show error toast
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button className="w-full" onClick={handleJoin}>
        Join Challenge
      </Button>
    </div>
  );
};

export default RegisterButton;
