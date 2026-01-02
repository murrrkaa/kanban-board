import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getTasks } from "@entities/board/board-column/model/get-tasks.ts";

export const useGetTasks = (boardColumnId: string) => {
  return useQuery({
    queryKey: [RoutesEnum.BOARDS, boardColumnId],
    queryFn: () => getTasks(boardColumnId),
    retry: false,
    refetchOnWindowFocus: false,
  });
};
