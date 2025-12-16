import { type FC, type ReactNode } from "react";
import * as React from "react";
import { tv } from "tailwind-variants";
import { cn } from "../../../lib/cn.ts";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "ghost" | "outline" | "fill";
  size?: "small" | "medium" | "large";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

const buttonVariants = tv({
  base: "flex flex-row gap-[8px] items-center rounded-[16px] w-fit border-none cursor-pointer justify-center font-bold",
  variants: {
    variant: {
      fill: "bg-blue-400 text-white",
      outline: "bg-white-100 text-blue-100",
      ghost: "bg-transparent text-blue-500",
    },
    size: {
      small: "px-[16px] py-2",
      medium: "px-[24px] py-[6px]",
      large: "px-[32px] py-3",
    },
  },
});

export const Button: FC<IButtonProps> = ({
  className,
  variant = "fill",
  leftIcon,
  rightIcon,
  children,
  size = "medium",
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
