import { type FC, type JSX } from "react";
import { cn } from "@shared/lib/cn.ts";
import * as React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ITitleProps {
  className?: string;
  size?: TitleSize;
  children: React.ReactNode;
}

const TagBySize: Record<string, keyof JSX.IntrinsicElements> = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
};

const ClassNameBySize: Record<string, string> = {
  xs: "text-[16px]/[20px]",
  sm: "text-[22px]/[26px]",
  md: "text-[26px]/[30px]",
  lg: "text-[32px]/[36px]",
  xl: "text-[40px]/[56px]",
};

export const Title: FC<ITitleProps> = ({ className, size, children }) => {
  const titleSize = size ?? "xl";
  const Tag = TagBySize[titleSize];
  return (
    <Tag
      className={cn(
        "text-blue-500 font-bold",
        ClassNameBySize[titleSize],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
