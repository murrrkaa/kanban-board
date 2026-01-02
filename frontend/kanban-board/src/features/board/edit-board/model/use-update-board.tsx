import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { updateBoard } from "@features/board/edit-board/model/update-board.ts";
import type { IBoard } from "@features/board/board-cards/model/types.ts";

export const useUpdateBoard = () => {
  return useMutation({
    mutationKey: [RoutesEnum.BOARDS],
    mutationFn: (data: IBoard) => updateBoard(data),
  });
};
