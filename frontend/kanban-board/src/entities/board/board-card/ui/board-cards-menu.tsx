import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/components/dropdown";
import { Button } from "@shared/ui/components/button";
import { MoreIcon } from "@shared/ui/icons/more-icon.tsx";
import type { IBoard } from "@features/board/board-cards/model/types.ts";
import type { FC } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useDeleteBoard } from "@entities/board/board-card/model/use-delete-board.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

interface IProp {
  board: IBoard;
}

export const BoardCardsMenu: FC<IProp> = ({ board }) => {
  const { mutateAsync: deleteBoard } = useDeleteBoard();
  const queryClient = useQueryClient();

  const handleEditBoard = () => {
    useBoardStore.getState().setBoard(board);
    useBoardStore.getState().setEditBoardModal(true);
  };

  const handleRemoveBoard = async () => {
    if (board) await deleteBoard(board.id);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.BOARDS],
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          <MoreIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={handleEditBoard}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleRemoveBoard}>Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
