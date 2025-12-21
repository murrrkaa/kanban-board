import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProjectCards } from "@features/project/project-card";

export const ProjectsPage = () => {
  return (
    <PageWrapper title="Projects">
      <ProjectCards />
    </PageWrapper>
  );
};
