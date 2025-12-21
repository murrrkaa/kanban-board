import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProjectCards } from "@features/project/project-card/ui";
import { EditProjectModal } from "@features/project/edit-project/ui";

export const ProjectsPage = () => {
  return (
    <>
      <PageWrapper title="Projects">
        <ProjectCards />
      </PageWrapper>
      <EditProjectModal />
    </>
  );
};
