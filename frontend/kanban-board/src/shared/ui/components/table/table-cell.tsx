import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface ITableProps extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableCellElement>;
  children: ReactNode;
}

export const TableCell: FC<ITableProps> = ({ className, ref, children }) => {
  return (
    <td
      className={cn("text-blue-500 font-medium truncate", className)}
      ref={ref}
    >
      {children}
    </td>
  );
};
