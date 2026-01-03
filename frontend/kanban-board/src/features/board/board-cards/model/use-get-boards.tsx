import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getBoards } from "@features/board/board-cards/model/get-boards.ts";

export const useGetBoards = (filters: object) => {
  return useQuery({
    queryKey: [RoutesEnum.BOARDS, filters],
    queryFn: () => getBoards(filters),
  });
};
