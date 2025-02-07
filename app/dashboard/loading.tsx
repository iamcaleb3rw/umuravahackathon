import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="p-2">
      <div>
        <Skeleton className="max-w-[200px]" />
      </div>
    </div>
  );
};

export default Loading;
