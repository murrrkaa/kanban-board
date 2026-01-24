import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getProjects } from "@features/project/project-card/model/get-projects.ts";

export const useGetProjects = (projectName?: string) => {
  return useQuery({
    queryKey: [RoutesEnum.PROJECTS, projectName],
    queryFn: () => getProjects(projectName),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
