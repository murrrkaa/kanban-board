import { type ChangeEvent, forwardRef, useId } from "react";
import * as Label from "@radix-ui/react-label";
import { cn } from "@shared/lib/cn.ts";
import type { IInputProps } from "@shared/model/input-types.ts";

const inputSizeClassName = {
  small: "h-[34px] text-[12px]",
  medium: "h-[45px]",
  large: "h-[52px] text-[14px]",
};

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      value = "",
      onChange,
      onBlur,
      label,
      placeholder = "Напишите что-нибудь",
      classNames,
      required = true,
      inputSize = "medium",
      rightSlot,
      leftSlot,
      id,
      disabled,
      error,
    },
    ref,
  ) => {
    const inputId = id ?? useId();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <Label.Root>
        {label && (
          <div className="flex flex-row items-start">
            <Label.Label
              htmlFor={inputId}
              className={cn(
                "font-medium text-blue-500 text-[16px] mb-3",
                inputSize === "small" && "text-[14px]",
                classNames?.labelClassName,
              )}
            >
              {label}
            </Label.Label>
            {required && <span className="text-red">*</span>}
          </div>
        )}
        <div className="relative">
          {leftSlot && (
            <span
              className={cn(
                "absolute top-1/2 -translate-y-1/2 left-4 text-gray-50",
                classNames?.leftSlotClassName,
              )}
            >
              {leftSlot}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            value={value}
            onChange={handleChangeInput}
            onBlur={onBlur}
            placeholder={placeholder}
            className={cn(
              "text-ellipsis text-[14px] flex items-center px-4 w-full h-[45px] rounded-[12px] border border-gray-50 bg-white-25 outline-none focus:border-blue-100 hover:border-blue-100 placeholder:text-gray-50",
              inputSizeClassName[inputSize],
              leftSlot && "pl-[40px]",
              rightSlot && "pr-[40px]",
              disabled && "hover:border-gray-50 text-gray-50 bg-white-50",
              error && "border-red hover:border-red focus:border-red",
              classNames?.inputClassName,
            )}
            disabled={disabled}
            aria-required={required}
          />
          {rightSlot && (
            <span
              className={cn(
                "absolute top-1/2 -translate-y-1/2 right-4 text-gray-50",
                classNames?.rightSlotClassName,
              )}
            >
              {rightSlot}
            </span>
          )}
        </div>
        {error && <div className="text-[12px]/[16px] text-red">{error}</div>}
      </Label.Root>
    );
  },
);
