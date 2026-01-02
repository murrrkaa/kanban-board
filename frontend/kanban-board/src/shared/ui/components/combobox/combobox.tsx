"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@shared/ui/components/combobox/button/button.tsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@shared/ui/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shared/ui/components/popover";
import { cn } from "@shared/lib/cn.ts";
import { useEffect } from "react";

export interface IOption {
  id: string;
  name: string;
}

interface IComboboxProps<T extends IOption> {
  selected: string;
  placeholder: string;
  options: T[];
  onChange: (value: string) => void;
}

export const Combobox = <T extends IOption>({
  selected,
  placeholder,
  options,
  onChange,
}: IComboboxProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected);

  const handleChangeValue = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    onChange(currentValue === value ? "" : currentValue);
  };

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "text-ellipsis text-[14px] hover:text-gray-50 justify-start flex items-center px-4 w-full h-[45px] rounded-[12px] border border-gray-50 bg-white-25 outline-none focus:border-blue-100 hover:border-blue-100",
            "bg-white-50 hover:bg-white bg-white shadow-none font-normal",
            placeholder && !value && "text-gray-50",
            value && "hover:text-[#000000]",
          )}
        >
          {value
            ? options?.find((option) => option?.id === value)?.name
            : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-gray-50 overflow-y-auto scrollbar">
        <Command>
          <CommandList
            className="overflow-y-auto scrollbar"
            onWheel={(e) => e.stopPropagation()}
          >
            <CommandEmpty>Список пуст</CommandEmpty>
            <CommandGroup className="p-0">
              {options?.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.id}
                  onSelect={handleChangeValue}
                  className="h-[40px] hover:bg-blue-100"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-blue-100",
                      value === option?.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
