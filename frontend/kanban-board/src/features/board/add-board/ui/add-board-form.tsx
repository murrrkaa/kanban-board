import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { RoutesEnum } from "@shared/routes";
import { Input } from "@shared/ui/components/input";
import { Combobox } from "@shared/ui/components/combobox";
import { Button } from "@shared/ui/components/button";
import { useGetProjects } from "@features/project/project-card/model/use-get-projects.tsx";
import type { IAddBoardForm } from "@features/board/add-board/model/types.ts";
import { useCreateBoard } from "@features/board/add-board/model/use-create-board.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

export const AddBoardForm = () => {
  const { data: projects } = useGetProjects();

  const { mutateAsync: createBoard } = useCreateBoard();

  const projectList = useMemo(() => {
    return projects?.map((project) => ({
      id: project.id ?? "",
      name: project.name,
    }));
  }, [projects]);

  const queryClient = useQueryClient();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IAddBoardForm>({
    defaultValues: {
      name: "",
      description: "",
      projectId: "",
    },
  });

  const onSubmit = async (data: IAddBoardForm) => {
    await createBoard(data);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.BOARDS],
    });
    useBoardStore.getState().setAddBoardModal(false);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Наименование доски"
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name={"name"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Описание доски"
              value={field.value}
              onChange={field.onChange}
              error={errors?.name?.message}
            />
          )}
          name={"description"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Combobox
              placeholder="Проект"
              options={projectList ?? []}
              selected={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"projectId"}
        />
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-blue-200 py-[10px] mt-auto"
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
