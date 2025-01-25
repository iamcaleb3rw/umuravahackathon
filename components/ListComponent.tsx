import React from "react";

interface ListComponentProps {
  text: string;
  number: string;
}

const ListComponent = ({ text, number }: ListComponentProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-9 w-9 bg-primary rounded-full flex items-center justify-center text-white font-bold border border-black">
        {number}
      </div>
      <p className="max-w-[400px]">{text}</p>
    </div>
  );
};

export default ListComponent;
