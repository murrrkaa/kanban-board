import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { AddTaskForm } from "@features/task/add-task/ui/add-task-form.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { useShallow } from "zustand/react/shallow";

export const AddTaskDialog = () => {
  const { openAddDialog, setOpenAddDialog } = useBoardStore(
    useShallow((state) => ({
      openAddDialog: state.addTaskModal,
      setOpenAddDialog: state.setAddTaskModal,
    })),
  );
  return (
    <Sheet open={openAddDialog} onOpenChange={setOpenAddDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Создание новой задачи</SheetHeader>
        <AddTaskForm />
      </SheetContent>
    </Sheet>
  );
};
