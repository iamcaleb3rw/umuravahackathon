"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface RegisterButtonProps {
  id: string | undefined;
  clerkId: string | undefined;
  firstName: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  disabled: boolean;
}

const RegisterButton = ({
  id,
  clerkId,
  firstName,
  email,
  avatarUrl,
  disabled,
}: RegisterButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

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

      // Immediate UI feedback
      setIsRegistered(true);
      toast.success("Successfully registered for the challenge!");

      // Refresh data after short delay
      setTimeout(() => {
        router.refresh();
      }, 1500);
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Registration failed";
      toast.error(errorMessage);

      // Handle duplicate registration error specifically
      if (error.response?.status === 409) {
        setIsRegistered(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button
        disabled={disabled || isRegistered || loading}
        className="w-full transition-all"
        onClick={handleJoin}
      >
        {loading
          ? "Processing..."
          : isRegistered
          ? "✓ Already Registered"
          : "Join Challenge"}
        {isRegistered && "✓ Already Registered"}
      </Button>

      {isRegistered && (
        <p className="text-sm text-center text-green-600 mt-2">
          You're successfully registered!
        </p>
      )}
    </div>
  );
};

export default RegisterButton;
