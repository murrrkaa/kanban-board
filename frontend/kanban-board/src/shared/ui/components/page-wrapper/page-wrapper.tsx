import type { FC, ReactNode } from "react";
import { Title } from "@shared/ui/components/title";

interface IPageWrapperProps {
  title: string;
  children: ReactNode;
  leftSlot?: ReactNode;
}

export const PageWrapper: FC<IPageWrapperProps> = ({
  title,
  children,
  leftSlot,
}) => {
  return (
    <div className="mt-[30px] mb-[10px] mx-[20px] h-full w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-[14px]/[24px] font-medium text-gray-700">
            Pages / {title}
          </div>
          <Title size="lg" className="mb-[30px]">
            {title}
          </Title>
        </div>

        {leftSlot}
      </div>

      {children}
    </div>
  );
};
