"use client";
import { MoveUp } from "lucide-react";
import React from "react";
import { NumericFormat } from "react-number-format";

interface StatCardProps {
  timeline: string;
  title: string;
  metric: string;
  number: number;
}
const StatCard = ({ timeline, title, metric, number }: StatCardProps) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  }).format(number);

  return (
    <div className="border w-full min-h-[150px] flex items-center p-4 bg-white rounded-lg">
      <div className="flex items-center gap-4">
        <div className="h-12 flex items-center justify-center rounded-full bg-primary/20  w-12 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#332ce6"}
            fill={"none"}
          >
            <path
              d="M20.4999 14V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50008 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 13.9999C3.49997 17.7712 3.49995 19.6568 4.67153 20.8284C5.8431 22 7.72873 22 11.5 22H12.4999C16.2712 22 18.1568 22 19.3284 20.8284C20.4999 19.6569 20.4999 17.7712 20.4999 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 7H16M8 12H16M8 17L12 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm text-mutedtext">{title}</p>
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-darktext">
              {formattedNumber}
            </h1>
            <div className="aspect-[5/2] h-6 bg-green-100/50 font-medium text-primary flex items-center justify-center rounded-full text-xs">
              <MoveUp size={10} strokeWidth={2} />
              <p>{metric}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
