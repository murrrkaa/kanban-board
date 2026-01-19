import { Controller, useForm } from "react-hook-form";
import { Input } from "@shared/ui/components/input";
import { Combobox } from "@shared/ui/components/combobox";
import { Button } from "@shared/ui/components/button";
import { RoutesEnum } from "@shared/routes";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { useGetUsers } from "@entities/user/model/use-get-users.tsx";
import { useMemo } from "react";
import type { IAddTaskForm } from "@features/task/add-task/model/types.ts";
import { useQueryClient } from "@tanstack/react-query";
import { TaskPriorityList } from "@shared/model/task-priority.ts";
import { useCreateTask } from "@features/task/add-task/model/use-create-task.tsx";

export const AddTaskForm = () => {
  const queryClient = useQueryClient();
  const columnId = useBoardStore.getState().selectedColumnId;

  const { data: users } = useGetUsers();

  const { mutateAsync: createTask } = useCreateTask(columnId ?? "");

  const usersList = useMemo(() => {
    return users?.map((user) => ({
      id: user.id_user ?? "",
      name: `${user.name} ${user.surname} ${user.patronymic ?? ""}`,
    }));
  }, [users]);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IAddTaskForm>({
    defaultValues: {
      name: "",
      description: "",
      boardColumnId: "",
      performerId: "",
      priority: "1",
    },
  });

  const onSubmit = async (data: IAddTaskForm) => {
    if (columnId) {
      await createTask({
        ...data,
        boardColumnId: columnId,
        priority: Number(data.priority),
      });

      queryClient.invalidateQueries({
        queryKey: [RoutesEnum.TASKS, columnId],
      });

      useBoardStore.getState().setAddTaskModal(false);
    }
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              placeholder="Наименование задачи"
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
              placeholder="Описание задачи"
              value={field.value}
              onChange={field.onChange}
              error={errors?.name?.message}
            />
          )}
          name={"description"}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Combobox
              placeholder="Исполнитель"
              options={usersList ?? []}
              selected={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"performerId"}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Combobox
              placeholder="Приоритет"
              options={TaskPriorityList}
              selected={(field.value as string) ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"priority"}
        />
      </div>
      <Button
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-blue-200 py-[10px] mt-auto"
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
