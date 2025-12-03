import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableSectionElement>;
}

export const TableHead: FC<ITableProps> = ({ className, ref }) => {
  return <thead className={className} ref={ref} />;
};
