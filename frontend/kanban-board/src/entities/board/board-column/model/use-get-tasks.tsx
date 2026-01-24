import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getTasks } from "@entities/board/board-column/model/get-tasks.ts";

export const useGetTasks = (filters?: {
  boardColumnId?: string;
  taskName?: string;
}) => {
  return useQuery({
    queryKey: [RoutesEnum.TASKS, filters?.boardColumnId, filters?.taskName],
    queryFn: () => getTasks(filters),
    retry: false,
    refetchOnWindowFocus: false,
  });
};
