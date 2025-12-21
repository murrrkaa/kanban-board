import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { ProjectCard } from "@entities/project/project-card/ui";

export const ProjectCards = () => {
  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      <ProjectCard
        title="Наименование проектаddddddddddddddddddddddddddddd"
        description={"Описание проектаddddddddddddddddddddddddddddddddddddddd"}
        performer={"Анна Петровнаddddddddddddddddddddddddddddd"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проектаddddddddddddddddddddddddddddd"
        description={"Описание проектаddddddddddddddddddddddddddddddddddddddd"}
        performer={"Анна Петровнаddddddddddddddddddddddddddddd"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
      <ProjectCard
        title="Наименование проекта"
        description={"Описание проекта"}
        performer={"Анна Петровна"}
        createdAt={new Date()}
      />
    </TableWrapper>
  );
};
