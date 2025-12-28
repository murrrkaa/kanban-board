import { useShallow } from "zustand/react/shallow";
import { Sheet } from "@shared/ui/components/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import { AddProjectForm } from "@features/project/add-project/ui/add-project-form.tsx";

export const AddProjectDialog = () => {
  const { openAddDialog, setOpenAddDialog } = useProjectsStore(
    useShallow((state) => ({
      openAddDialog: state.addProjectModal,
      setOpenAddDialog: state.setAddProjectModal,
    })),
  );
  return (
    <Sheet open={openAddDialog} onOpenChange={setOpenAddDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Создание нового проекта</SheetHeader>
        <AddProjectForm />
      </SheetContent>
    </Sheet>
  );
};
