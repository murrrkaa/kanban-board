import type { FC, ReactNode } from "react";
import { Title } from "@shared/ui/components/title";

interface ITableWrapperProps {
  children: ReactNode;
  title?: string;
}

export const TableWrapper: FC<ITableWrapperProps> = ({ children, title }) => {
  return (
    <div className="w-full h-[calc(100vh-133px)] bg-white rounded-[20px] overflow-x-hidden overflow-y-scroll scrollbar">
      {title && (
        <Title className="pt-5 pl-7" size="md">
          {title}
        </Title>
      )}
      {children}
    </div>
  );
};
