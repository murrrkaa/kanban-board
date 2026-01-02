import { Sheet } from "@shared/ui/components/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useShallow } from "zustand/react/shallow";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { EditTaskForm } from "@features/task/edit-task/ui/edit-task-form.tsx";

export const EditTaskModal = () => {
  const { open, setOpenDialog } = useTaskStore(
    useShallow((state) => ({
      open: state.editTaskModal,
      setOpenDialog: state.setEditTaskModal,
    })),
  );
  return (
    <Sheet open={open} onOpenChange={setOpenDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование задачи</SheetHeader>
        <EditTaskForm />
      </SheetContent>
    </Sheet>
  );
};
