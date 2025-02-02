"use client";
import React, { useState } from "react";
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
      router.push("/dashboard/hackathons");
      // Replace alert with a toast notification if available
    } catch (error: any) {
      console.error("Error deleting hackathon:", error);
      alert("Failed to delete hackathon");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full" variant={"destructive"}>
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Delete {title}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to delete this
              challenge?
            </DialogDescription>
            <div className="flex gap-3">
              <DialogClose className="w-full">
                <Button className="w-full" variant={"outline"}>
                  Discard
                </Button>
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
