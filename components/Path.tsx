import React, { ReactNode } from "react";

interface PathProps {
  pathName: string;
}

const Path = ({ pathName }: PathProps) => {
  return <div>{pathName}</div>;
};

export default Path;
