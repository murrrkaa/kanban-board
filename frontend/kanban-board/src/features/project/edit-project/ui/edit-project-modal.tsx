import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useShallow } from "zustand/react/shallow";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import { EditProjectForm } from "@features/project/edit-project/ui/edit-project-form.tsx";

export const EditProjectModal = () => {
  const { open, setOpenDialog } = useProjectsStore(
    useShallow((state) => ({
      open: state.editProjectModal,
      setOpenDialog: state.setEditProjectModal,
    })),
  );
  return (
    <Sheet open={open} onOpenChange={setOpenDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование проекта</SheetHeader>
        <EditProjectForm />
      </SheetContent>
    </Sheet>
  );
};
