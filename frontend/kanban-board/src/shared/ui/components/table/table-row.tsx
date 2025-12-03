import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableRowElement>;
}

export const TableRow: FC<ITableProps> = ({ className, ref }) => {
  return <tr className={className} ref={ref} />;
};
