"use client";
import UpdateHackathonForm from "@/components/Updateform";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/Datepicker";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { fetchHackathonsById } from "@/lib/actions/hackathon";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const hackathonSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    deadline: z.date({
      required_error: "Deadline is required",
      invalid_type_error: "That's not a date!",
    }),
    startDate: z.date({
      required_error: "Starting Date is required",
      invalid_type_error: "That's not a date!",
    }),
    endDate: z.date({
      required_error: "Ending Date is required",
      invalid_type_error: "That's not a date!",
    }),
    duration: z.string().min(1, "Duration is required"),
    moneyPrize: z.string().min(1, "Money prize is required"),
    contactEmail: z.string().email("Invalid email address"),
    projectDescription: z
      .string()
      .max(1000, "Project description must be less than 1000 characters"),
    projectBrief: z
      .string()
      .max(1500, "Project brief must be less than 1500 characters"),
    projectTasks: z
      .string()
      .max(1500, "Project tasks must be less than 1500 characters"),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

type HackathonFormData = z.infer<typeof hackathonSchema>;

const Updateform = ({ hackathon }: { hackathon: any }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HackathonFormData>({
    resolver: zodResolver(hackathonSchema),
  });

  useEffect(() => {
    // Set initial values for the form fields
    reset({
      title: hackathon.title,
      deadline: new Date(hackathon.deadline),
      startDate: new Date(hackathon.startDate),
      endDate: new Date(hackathon.endDate),
      duration: hackathon.timeline,
      moneyPrize: hackathon.prize,
      contactEmail: hackathon.contactEmail,
      projectDescription: hackathon.projectDescription,
      projectBrief: hackathon.projectBrief,
      projectTasks: hackathon.projectTasks,
    });
  }, [hackathon, reset]);
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<HackathonFormData> = async (data) => {
    console.log("Submission started", data);
    try {
      setLoading(true);
      toast.info("Updating...");
      const response = await axios.patch(`/api/hackathons`, {
        ...data,
        id: hackathon._id,
      });
      console.log("Hackathon updated successfully", response.data);
      toast.success("Hackathon updated successfully");
      redirect("/dashboard");
    } catch (error) {
      toast.error("Error updating scribe");
      console.error("Failed to update hackathon", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-muted">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-[700px] bg-white overflow-hidden md:mx-auto text-sm px-4 border-2 rounded-xl border-mutedtext/10  py-6"
      >
        <div className="text-center">
          <h1 className="text-xl font-bold">Edit a Challenge</h1>
          <p className="text-mutedtext">
            Fill out these details to build your broadcast.
          </p>
        </div>
        <div>
          <label htmlFor="title">Challenge/Hackathon Title</label>
          <Input
            id="title"
            {...register("title")}
            placeholder="Enter title"
            className="focus-visible:ring-yellow-500 focus-visible:ring-1 focus-visible:ring-offset-0 p-2"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label htmlFor="startDate">Start Date</label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePickerDemo
                  value={field.value}
                  onChange={(date: Date | undefined) => field.onChange(date)}
                />
              )}
            />
            {errors.startDate && (
              <p className="text-red-500">{errors.startDate.message}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="endDate">End Date</label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePickerDemo
                  value={field.value}
                  onChange={(date: Date | undefined) => field.onChange(date)}
                />
              )}
            />
            {errors.endDate && (
              <p className="text-red-500">{errors.endDate.message}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="deadline">Registration deadline</label>
          <Controller
            name="deadline"
            control={control}
            render={({ field }) => (
              <DatePickerDemo
                value={field.value}
                onChange={(date: Date | undefined) => field.onChange(date)}
              />
            )}
          />
          {errors.deadline && (
            <p className="text-red-500">{errors.deadline.message}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="duration">Duration</label>
          <Input
            id="duration"
            {...register("duration")}
            placeholder={"How long will the hackathon take?"}
          />
          {errors.duration && (
            <p className="text-red-500">{errors.duration.message}</p>
          )}
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <label htmlFor="moneyPrize">Money Prize</label>
            <Input
              id="moneyPrize"
              {...register("moneyPrize")}
              placeholder={"RWF"}
            />
            {errors.moneyPrize && (
              <p className="text-red-500">{errors.moneyPrize.message}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="contactEmail">Contact Email</label>
            <Input
              id="contactEmail"
              type="email"
              {...register("contactEmail")}
              placeholder="Enter Email address"
            />
            {errors.contactEmail && (
              <p className="text-red-500">{errors.contactEmail.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="projectDescription">Project Description</label>
          <Textarea
            id="projectDescription"
            {...register("projectDescription")}
            placeholder="Text here..."
          />
          {errors.projectDescription && (
            <p className="text-red-500">{errors.projectDescription.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="projectBrief">Project Brief</label>
          <Textarea id="projectBrief" {...register("projectBrief")} />
          {errors.projectBrief && (
            <p className="text-red-500">{errors.projectBrief.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="projectTasks">Project Description & Tasks</label>
          <Textarea id="projectTasks" {...register("projectTasks")} />
          {errors.projectTasks && (
            <p className="text-red-500">{errors.projectTasks.message}</p>
          )}
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <p>Updating...</p>
              <Loader2 className="animate-spin" />
            </>
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Updateform;
