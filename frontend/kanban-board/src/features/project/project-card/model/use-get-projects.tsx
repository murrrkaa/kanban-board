import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getProjects } from "@features/project/project-card/model/get-projects.ts";

export const useGetProjects = () => {
  return useQuery({
    queryKey: [RoutesEnum.PROJECTS],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
