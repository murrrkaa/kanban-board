import type { FC } from "react";
import { Title } from "@shared/ui/components/title";
import { ProjectsCardsMenu } from "@entities/project/project-card/ui/projects-cards-menu.tsx";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";

interface IProps {
  project: IProjectDto;
}

export const ProjectCard: FC<IProps> = ({ project }) => {
  const performerName = `${project?.performer?.name} ${project?.performer?.surname} ${project?.performer?.patronymic ?? ""}`;
  return (
    <div className="w-[366px] h-[260px] bg-white rounded-[16px] shadow-md">
      <div className="p-[15px] flex flex-col gap-[16px]">
        <div className="flex flex-row items-start justify-between gap-[8px]">
          <Link to={`${RoutesEnum.BOARDS}?projectId=${project.id}`}>
            <Title size="sm" className="line-clamp-2 trunacate text-ellipsis">
              {project?.name}
            </Title>
          </Link>

          <ProjectsCardsMenu project={project} />
        </div>
        {project?.performer && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Исполнитель
            </div>
            <span className="text-[16px]/[20px] text-gray-700 line-clamp-2 truncate ">
              {performerName}
            </span>
          </div>
        )}
        {project?.createdAt && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Дата создания
            </div>
            <span className="text-[16px]/[20px] text-gray-700">
              {new Date(project?.createdAt).toLocaleDateString()}
            </span>
          </div>
        )}
        {project?.description && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Описание
            </div>
            <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
              {project?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
