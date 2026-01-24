import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProjectCards } from "@features/project/project-card/ui";
import { EditProjectModal } from "@features/project/edit-project/ui";
import { AddProjectDialog } from "@features/project/add-project/ui";
import { Button } from "@shared/ui/components/button";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import { Input } from "@shared/ui/components/input";
import { useState } from "react";
import { useDebounce } from "@shared/hooks/use-debounce.tsx";

export const ProjectsPage = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 400);

  const handleOpenAddDialog = () => {
    useProjectsStore.getState().setAddProjectModal(true);
  };
  return (
    <>
      <PageWrapper
        title="Projects"
        leftSlot={
          <div className="flex flex-row gap-3 items-center">
            <Input
              value={value}
              classNames={{
                inputClassName: "w-[250px]",
              }}
              placeholder="Наименование проекта"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className="h-[40px]" onClick={handleOpenAddDialog}>
              Создать новый проект
            </Button>
          </div>
        }
      >
        <ProjectCards projectName={debounceValue} />
      </PageWrapper>
      <EditProjectModal />
      <AddProjectDialog />
    </>
  );
};
