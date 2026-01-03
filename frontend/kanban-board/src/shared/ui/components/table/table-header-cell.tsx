import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface ITableProps extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableCellElement>;
  children?: ReactNode;
}

export const TableHeaderCell: FC<ITableProps> = ({
  className,
  ref,
  children,
}) => {
  return (
    <th
      className={cn(
        "text-nowrap text-gray-50 font-medium text-left",
        className,
      )}
      ref={ref}
    >
      {children}
    </th>
  );
};
