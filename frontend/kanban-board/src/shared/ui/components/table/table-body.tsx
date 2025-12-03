import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableSectionElement>;
}

export const TableBody: FC<ITableProps> = ({ className, ref }) => {
  return <tbody className={className} ref={ref} />;
};
