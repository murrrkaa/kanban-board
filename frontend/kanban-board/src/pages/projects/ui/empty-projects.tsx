import { Button } from "@shared/ui/components/button";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";

export const EmptyProjects = () => {
  const handleOpenAddDialog = () => {
    useProjectsStore.getState().setAddProjectModal(true);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <span className="text-[16px]/[20px] font-medium text-blue-500">
          Нет созданных проектов
        </span>
        <Button
          className="h-[40px]"
          variant="outline"
          onClick={handleOpenAddDialog}
        >
          Создание проекта
        </Button>
      </div>
    </div>
  );
};
