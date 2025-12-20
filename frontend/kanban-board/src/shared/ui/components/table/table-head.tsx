import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface ITableProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableSectionElement>;
  children?: ReactNode;
}

export const TableHead: FC<ITableProps> = ({ className, ref, children }) => {
  return (
    <thead className={cn("w-full h-8", className)} ref={ref}>
      {children}
    </thead>
  );
};
