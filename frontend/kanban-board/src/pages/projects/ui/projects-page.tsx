import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProjectCards } from "@features/project/project-card/ui";

export const ProjectsPage = () => {
  return (
    <PageWrapper title="Projects">
      <ProjectCards />
    </PageWrapper>
  );
};
