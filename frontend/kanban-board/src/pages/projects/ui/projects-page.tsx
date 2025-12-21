import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProjectCards } from "@features/project/project-card/ui";
import { EditProjectModal } from "@features/project/edit-project/ui";
import { AddProjectDialog } from "@features/project/add-project/ui";
import { Button } from "@shared/ui/components/button";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";

export const ProjectsPage = () => {
  const handleOpenAddDialog = () => {
    useProjectsStore.getState().setAddProjectModal(true);
  };
  return (
    <>
      <PageWrapper
        title="Projects"
        leftSlot={
          <Button className="h-[40px]" onClick={handleOpenAddDialog}>
            Создать новый проект
          </Button>
        }
      >
        <ProjectCards />
      </PageWrapper>
      <EditProjectModal />
      <AddProjectDialog />
    </>
  );
};
