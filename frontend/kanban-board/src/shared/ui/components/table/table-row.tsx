import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface ITableProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableRowElement>;
  children?: ReactNode;
}

export const TableRow: FC<ITableProps> = ({ className, ref, children }) => {
  return (
    <tr className={cn("h-8 w-full", className)} ref={ref}>
      {children}
    </tr>
  );
};
