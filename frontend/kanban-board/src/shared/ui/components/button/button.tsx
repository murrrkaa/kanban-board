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
  base: "flex flex-row gap-[8px] items-center rounded-[16px] w-fit border-none cursor-pointer",
  variants: {
    variant: {
      fill: "bg-[#11047A] text-[#ffffff]",
      outline: "bg-[#F4F7FE] text-[#4318FF]",
      ghost: "bg-transparent text-[#2B3674]",
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
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
