import { Button } from "@shared/ui/components/button";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

export const EmptyBoards = () => {
  const handleOpenAddDialog = () => {
    useBoardStore.getState().setAddBoardModal(true);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <span className="text-[16px]/[20px] font-medium text-blue-500">
          Нет созданных досок
        </span>
        <Button
          className="h-[40px]"
          variant="outline"
          onClick={handleOpenAddDialog}
        >
          Создание доски
        </Button>
      </div>
    </div>
  );
};
