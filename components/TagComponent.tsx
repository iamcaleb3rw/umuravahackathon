import { NotebookText } from "lucide-react";
import React from "react";

interface TagComponentProps {
  name: string;
  count: number;
}

const TagComponent = ({ name, count }: TagComponentProps) => {
  return (
    <div className="border px-4 py-1 w-fit flex gap-1 text-xs items-center bg-muted rounded-lg">
      <NotebookText strokeWidth={1.3} size={20} />
      <p>{name}</p>
      <div className="bg-primary h-4 w-4 text-xs font-semibold text-white rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TagComponent;
