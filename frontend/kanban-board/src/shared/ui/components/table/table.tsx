import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/lib/cn.ts";

interface ITableProps extends HTMLAttributes<HTMLTableElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableElement>;
  children?: ReactNode;
}

export const Table: FC<ITableProps> = ({ className, ref, children }) => {
  return (
    <table className={cn("my-5 mx-7 w-full table-fixed", className)} ref={ref}>
      {children}
    </table>
  );
};
