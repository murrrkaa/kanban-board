import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { BoardColumn } from "@entities/board/board-column/ui";
import { AddTaskDialog } from "@features/task/add-task/ui";
import { EditTaskModal } from "@features/task/edit-task/ui/edit-task-modal.tsx";
import { CommentTaskDialog } from "@features/task/comment-task/ui";
import { useParams } from "react-router-dom";
import { useGetBoard } from "@features/board/board-cards/model/use-get-board.tsx";
import { useEffect } from "react";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

export const BoardPage = () => {
  const { boardId } = useParams();
  const { data: board } = useGetBoard(boardId ?? "");

  useEffect(() => {
    if (board) useBoardStore.getState().setBoard(board);
  }, [board]);

  console.log(board);

  return (
    <>
      <PageWrapper title={board?.name ?? "Board"}>
        <div className="w-full h-[calc(100vh-140px)] grid grid-cols-[1fr_1fr_1fr] gap-4">
          {board?.columns?.map((column) => (
            <BoardColumn column={column} />
          ))}
        </div>
      </PageWrapper>
      <AddTaskDialog />
      <EditTaskModal />
      <CommentTaskDialog />
    </>
  );
};
