import type { ChangeEvent, ReactNode } from "react";

export interface IInputProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classNames?: {
    inputClassName?: string;
    labelClassName?: string;
    leftSlotClassName?: string;
    rightSlotClassName?: string;
  };
  required?: boolean;
  inputSize?: "small" | "medium" | "large";
  rightSlot?: ReactNode;
  leftSlot?: ReactNode;
  disabled?: boolean;
  error?: string;
}
