import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableCellElement>;
}

export const TableCell: FC<ITableProps> = ({ className, ref }) => {
  return <td className={className} ref={ref} />;
};
