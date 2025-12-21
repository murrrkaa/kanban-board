import type { FC } from "react";
import { Title } from "@shared/ui/components/title";

interface IProps {
  title: string;
  description?: string;
  createdAt?: Date;
  performer?: string;
}

export const ProjectCard: FC<IProps> = ({
  title,
  performer,
  createdAt,
  description,
}) => {
  return (
    <div className="w-[366px] h-[260px] bg-white rounded-[16px] shadow-md">
      <div className="p-[15px] flex flex-col gap-[16px]">
        <Title size="sm" className="line-clamp-2 trunacate text-ellipsis">
          {title}
        </Title>
        {performer && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Исполнитель
            </div>
            <span className="text-[16px]/[20px] text-gray-700 line-clamp-2 truncate ">
              {performer}
            </span>
          </div>
        )}
        {createdAt && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Дата создания
            </div>
            <span className="text-[16px]/[20px] text-gray-700">
              {createdAt?.toLocaleDateString()}
            </span>
          </div>
        )}
        {description && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Описание
            </div>
            <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
