import type { FC, ForwardedRef, HTMLAttributes } from "react";

interface ITableProps extends HTMLAttributes<HTMLTableElement> {
  className?: string;
  ref?: ForwardedRef<HTMLTableElement>;
}

export const Table: FC<ITableProps> = ({ className, ref }) => {
  return <table className={className} ref={ref} />;
};
