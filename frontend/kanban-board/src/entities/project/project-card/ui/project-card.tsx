import type { FC } from "react";
import { Title } from "@shared/ui/components/title";
import { ProjectsCardsMenu } from "@entities/project/project-card/ui/projects-cards-menu.tsx";

interface IProps {
  name: string;
  description?: string;
  createdAt?: string;
  performer?: {
    name: string;
    surname: string;
    patronymic?: string;
  };
}

export const ProjectCard: FC<IProps> = ({
  name,
  performer,
  createdAt,
  description,
}) => {
  const performerName = `${performer?.name} ${performer?.surname} ${performer?.patronymic ?? ""}`;
  return (
    <div className="w-[366px] h-[260px] bg-white rounded-[16px] shadow-md">
      <div className="p-[15px] flex flex-col gap-[16px]">
        <div className="flex flex-row items-start justify-between gap-[8px]">
          <Title size="sm" className="line-clamp-2 trunacate text-ellipsis">
            {name}
          </Title>
          <ProjectsCardsMenu />
        </div>
        {performer && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Исполнитель
            </div>
            <span className="text-[16px]/[20px] text-gray-700 line-clamp-2 truncate ">
              {performerName}
            </span>
          </div>
        )}
        {createdAt && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Дата создания
            </div>
            <span className="text-[16px]/[20px] text-gray-700">
              {new Date(createdAt).toLocaleDateString()}
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
