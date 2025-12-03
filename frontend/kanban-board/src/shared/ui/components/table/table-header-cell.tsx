import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableCellElement>;
}

export const TableHeaderCell: FC<ITableProps> = ({ className, ref }) => {
  return <th className={className} ref={ref} />;
};
