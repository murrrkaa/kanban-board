import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getBoard } from "@features/board/board-cards/model/get-board.ts";

export const useGetBoard = (boardId: string) => {
  return useQuery({
    queryKey: [RoutesEnum.BOARDS, boardId],
    queryFn: () => getBoard(boardId),
  });
};
