import React from "react";

interface StatlineProps {
  number: string;
  title: string;
}

const Statline = ({ number, title }: StatlineProps) => {
  return (
    <div className="text-white flex gap-1 justify-center flex-col">
      <h1 className="text-3xl font-bold">{number}</h1>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default Statline;
