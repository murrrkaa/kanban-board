import type { FC, ReactNode } from "react";
import { Title } from "@shared/ui/components/title";
import { cn } from "@shared/lib/cn.ts";

interface ITableWrapperProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const TableWrapper: FC<ITableWrapperProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full h-[calc(100vh-133px)] bg-white rounded-[20px] overflow-x-hidden overflow-y-scroll scrollbar",
        className,
      )}
    >
      {title && (
        <Title className="pt-5 pl-7" size="md">
          {title}
        </Title>
      )}
      {children}
    </div>
  );
};
