import React from "react";
import { Button } from "./ui/button";
interface CategoryButtonProps {
  buttonText: string;
  className?: string;
}

const CategoryButton = ({ buttonText, className }: CategoryButtonProps) => {
  return <Button className={className}>{buttonText}</Button>;
};

export default CategoryButton;
