import type { FC } from "react";
import { Title } from "@shared/ui/components/title";
import { Button } from "@shared/ui/components/button";
import { PlusIcon } from "@shared/ui/icons/plus-icon.tsx";
import { BoardTaskCard } from "@entities/board/board-column/ui/board-task-card.tsx";
import type { IBoardColumn } from "@features/board/board-cards/model/types.ts";
import { TaskColumnName } from "@shared/model/task-column.ts";
import { useGetTasks } from "@entities/board/board-column/model/use-get-tasks.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

interface IProp {
  column: IBoardColumn;
}

export const BoardColumn: FC<IProp> = ({ column }) => {
  const { data: tasks } = useGetTasks({
    boardColumnId: column.id,
  });
  const handleAddTask = () => {
    useBoardStore.getState().setAddTaskModal(true);
    useBoardStore.getState().setSelectedColumnId(column.id);
  };
  return (
    <div className="bg-white rounded-[20px] h-full p-5 scrollbar-none overflow-y-auto min-w-[250px]">
      <div className="flex justify-between items-center gap-4">
        <Title size="sm">{TaskColumnName[column.status]}</Title>
        <Button
          variant="outline"
          className="w-[90px] h-[35px]"
          onClick={handleAddTask}
        >
          <PlusIcon />
        </Button>
      </div>
      <div className="mt-[20px] flex flex-col gap-[20px]">
        {tasks?.map((task) => (
          <BoardTaskCard task={task} />
        ))}
      </div>
    </div>
  );
};
