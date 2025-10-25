import type { FC, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface IDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const Description: FC<IDescriptionProps> = ({ className, children }) => {
  return (
    <p className={cn("text-gray-50 text-[16px]/[20px]", className)}>
      {children}
    </p>
  );
};
