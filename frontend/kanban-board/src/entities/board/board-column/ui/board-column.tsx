import type { FC } from "react";
import { Title } from "@shared/ui/components/title";
import { Button } from "@shared/ui/components/button";
import { PlusIcon } from "@shared/ui/icons/plus-icon.tsx";
import { BoardTaskCard } from "@entities/board/board-column/ui/board-task-card.tsx";

interface IBoardColumn {
  status: string;
  columnId: string;
}

export const BoardColumn: FC<IBoardColumn> = ({ columnId, status }) => {
  return (
    <div className="bg-white rounded-[20px] h-full p-5 scrollbar-none overflow-y-auto min-w-[250px]">
      <div className="flex justify-between items-center gap-4">
        <Title size="sm">{status}</Title>
        <Button variant="outline" className="w-[90px] h-[35px]">
          <PlusIcon />
        </Button>
      </div>
      <div className="mt-[20px] flex flex-col gap-[20px]">
        <BoardTaskCard />
        <BoardTaskCard />
        <BoardTaskCard />
        <BoardTaskCard />
      </div>
    </div>
  );
};
