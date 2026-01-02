import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { BoardColumn } from "@entities/board/board-column/ui";

export const BoardPage = () => {
  const board = useBoardStore((state) => state.board);
  return (
    <PageWrapper title={board?.name ?? "Board"}>
      <div className="w-full h-[calc(100vh-140px)] grid grid-cols-[1fr_1fr_1fr] gap-4">
        {board?.columns?.map((column) => (
          <BoardColumn column={column} />
        ))}
      </div>
    </PageWrapper>
  );
};
