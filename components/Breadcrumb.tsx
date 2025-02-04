import { cn } from "@/lib/utils"; // Ensure this is correctly implemented
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  backRoute: string;
  currentRoute: string;
  className?: string;
  parentRoute?: string;
}

const Breadcrumb = ({
  backRoute,
  currentRoute,
  className,
  parentRoute,
}: BreadcrumbProps) => {
  return (
    <div className={`flex gap-4 p-3 ${className}`}>
      <Link href={backRoute}>
        <div className="flex items-center gap-2 group">
          <div className="border w-fit p-1 rounded-md flex items-center transition-transform justify-center group-hover:-translate-x-1">
            <MoveLeft className="h-3 w-3 text-muted-foreground" />
          </div>

          <div>
            <p className="text-sm text-mutedtext">Go Back</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-1">
        <div className="text-sm text-mutedtext/80">{parentRoute}</div>
        <div className="text-mutedtext">/</div>
        <div>
          <p className="text-sm text-primary">{currentRoute}</p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
