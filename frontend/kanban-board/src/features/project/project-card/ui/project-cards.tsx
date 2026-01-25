import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { ProjectCard } from "@entities/project/project-card/ui";
import { useGetProjects } from "@features/project/project-card/model/use-get-projects.tsx";
import { EmptyProjects } from "@/pages/projects/ui/empty-projects.tsx";
import type { FC } from "react";

interface IProps {
  projectName: string;
}

export const ProjectCards: FC<IProps> = ({ projectName }) => {
  const { data, isLoading, isSuccess } = useGetProjects(projectName);

  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      {!isLoading && isSuccess && data && data.length > 0 ? (
        data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))
      ) : (
        <EmptyProjects />
      )}
    </TableWrapper>
  );
};
