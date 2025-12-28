import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { deleteBoard } from "@entities/board/board-card/model/delete-board.ts";

export const useDeleteBoard = () => {
  return useMutation({
    mutationKey: [RoutesEnum.DASHBOARDS],
    mutationFn: (id: string) => deleteBoard(id),
  });
};
