import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { ProjectCard } from "@entities/project/project-card/ui";
import { useGetProjects } from "@features/project/project-card/model/use-get-projects.tsx";

export const ProjectCards = () => {
  const { data } = useGetProjects();
  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      {data?.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </TableWrapper>
  );
};
