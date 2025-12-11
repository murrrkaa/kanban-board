import type { FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableSectionElement>;
  children: ReactNode;
}

export const TableBody: FC<ITableProps> = ({ className, ref, children }) => {
  return (
    <tbody className={className} ref={ref}>
      {children}
    </tbody>
  );
};
