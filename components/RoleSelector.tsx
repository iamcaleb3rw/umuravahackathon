"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

// Define the option type
interface Option {
  value: string;
  label: string;
}

// Define the props for the RoleSelector component
interface RoleSelectorProps {
  register: UseFormRegister<any>; // Replace 'any' with your form data type
  setValue: UseFormSetValue<any>; // Replace 'any' with your form data type
  name: string;
}

const options: Option[] = [
  {
    value: "organiser",
    label: "Organiser",
  },
  {
    value: "talent",
    label: "Talent",
  },
];

export function RoleSelector({ register, setValue, name }: RoleSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValueState] = React.useState<string>("");

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValueState(newValue);
    setValue(name, newValue); // Update the form state
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select role..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search role..." />
          <CommandList className="w-full">
            <CommandEmpty>No role found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
