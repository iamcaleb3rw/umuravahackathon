"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
// Import toast

interface DeleteButtonProps {
  title: string;
  id: string;
}

const DeleteButton = ({ title, id }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`/api/hackathons`, {
        data: { id },
      });

      toast.success("Challenge deleted!");
      router.push("/dashboard/hackathons");
    } catch (error: any) {
      console.error("Error deleting hackathon:", error);
      toast.error("Failed to delete hackathon"); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full rounded-md p-2 text-white bg-red-500">
          Delete
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Delete {title}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to delete this
              challenge?
            </DialogDescription>
            <div className="flex gap-3">
              <DialogClose className="w-full bg-secondary rounded-md">
                <span className="w-full">Discard</span>
              </DialogClose>
              <Button
                className="w-full"
                onClick={handleDelete}
                variant={"destructive"}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteButton;
