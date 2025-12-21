import { Controller, useForm } from "react-hook-form";
import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { useShallow } from "zustand/react/shallow";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";
import { useUpdateProject } from "@features/project/edit-project/model/use-update-project.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";

export const EditProjectForm = () => {
  const { mutateAsync: updateProject } = useUpdateProject();
  const query = useQueryClient();
  const { setOpenDialog, project } = useProjectsStore(
    useShallow((state) => ({
      setOpenDialog: state.setEditProjectModal,
      project: state.project,
    })),
  );

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IProjectDto>({
    defaultValues: {
      id: project?.id,
      name: project?.name ?? "",
      description: project?.description ?? "",
      createdAt: new Date(project?.createdAt ?? "").toLocaleDateString(),
      performer: {
        name: project?.performer?.name ?? "",
        surname: project?.performer?.surname ?? "",
        patronymic: project?.performer?.patronymic ?? "",
      },
    },
  });

  const onSubmit = async (data: IProjectDto) => {
    await updateProject(data);
    query.invalidateQueries({
      queryKey: [RoutesEnum.PROJECTS],
    });
    setOpenDialog(false);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-100px)] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Наименование проект"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"name"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Описание проекта"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"description"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              disabled
              placeholder="Дата создания"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"createdAt"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              disabled
              placeholder="Создатель"
              value={`${field?.value?.name} ${field?.value?.surname} ${field?.value?.patronymic ?? ""}`}
              onChange={field.onChange}
            />
          )}
          name={"performer"}
        />
      </div>
      <Button
        className="w-full bg-blue-200 py-[10px] mt-auto"
        onClick={handleSubmit(onSubmit)}
        disabled={!isDirty}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
