"use client";

import type * as React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerDemo } from "@/components/Datepicker";
import { useRouter } from "next/navigation";

// Define the schema using Zod
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

// Infer TypeScript types from the schema
type HackathonFormData = z.infer<typeof hackathonSchema>;

interface UpdateHackathonFormProps {
  existingData: HackathonFormData; // Prop to receive existing data
}

const UpdateHackathonForm: React.FC<UpdateHackathonFormProps> = ({
  existingData,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HackathonFormData>({
    resolver: zodResolver(hackathonSchema),
    defaultValues: existingData, // Set default values from existing data
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<HackathonFormData> = async (data) => {};

  console.log("Form errors:", errors); // Log errors to debug

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-[700px] overflow-hidden px-1 border md:mx-auto text-sm"
    >
      <div>
        <label htmlFor="title">Challenge/Hackathon Title</label>
        <Input
          id="title"
          {...register("title")}
          placeholder="Enter title"
          className="focus-visible:ring-yellow-500 focus-visible:ring-1 focus-visible:ring-offset-0 p-2"
          value={existingData.title}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
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
      <Button type="submit">Update Challenge</Button>
    </form>
  );
};

export default UpdateHackathonForm;
