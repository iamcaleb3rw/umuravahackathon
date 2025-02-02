import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import UpdateHackathonForm from "./Updateform";

interface EditButtonProps {
  existingData: any;
}

const EditButton = ({ existingData }: EditButtonProps) => {
  return (
    <div>
      <Dialog>
        <Button className="w-full">
          <DialogTrigger>Edit</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit the Challenge</DialogTitle>
              <DialogDescription>
                No rush you can change this whenever you want.
              </DialogDescription>
            </DialogHeader>
            <UpdateHackathonForm existingData={existingData} />
          </DialogContent>
        </Button>
      </Dialog>
    </div>
  );
};

export default EditButton;
