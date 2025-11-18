import type { FC, ReactNode } from "react";
import { Title } from "@shared/ui/components/title";

interface IPageWrapperProps {
  title: string;
  children: ReactNode;
}

export const PageWrapper: FC<IPageWrapperProps> = ({ title, children }) => {
  return (
    <div className="my-[50px] mx-[20px] h-full w-full">
      <div className="text-[14px]/[24px] font-medium text-gray-700">
        Pages / {title}
      </div>
      <Title size="lg" className="mb-[30px]">
        {title}
      </Title>
      {children}
    </div>
  );
};
