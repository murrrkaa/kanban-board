import { Controller, useForm } from "react-hook-form";
import { Input } from "@shared/ui/components/input";
import { Combobox } from "@shared/ui/components/combobox";
import { TaskPriorityList } from "@shared/model/task-priority.ts";
import { Button } from "@shared/ui/components/button";
import type { ITask } from "@entities/task/model/types.ts";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { useGetUsers } from "@entities/user/model/use-get-users.tsx";
import { useEffect, useMemo, useState } from "react";
import { useGetProjects } from "@features/project/project-card/model/use-get-projects.tsx";
import { getBoards } from "@features/board/board-cards/model/get-boards.ts";
import type { IOption } from "@shared/ui/components/combobox/combobox.tsx";
import { TaskColumnName } from "@shared/model/task-column.ts";
import { useUpdateTask } from "@features/task/edit-task/model/use-update-task.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";

export const EditTaskForm = () => {
  const task = useTaskStore.getState().selectedTask;
  const { mutateAsync: updateTask } = useUpdateTask();
  const queryClient = useQueryClient();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<ITask>({
    defaultValues: {
      name: task?.name ?? "",
      description: task?.description ?? "",
      performerId: task?.performerId ?? "",
      priority: String(task?.priority),
      projectId: task?.projectId ?? "",
      boardId: task?.boardId ?? "",
      boardColumnId: task?.boardColumnId ?? "",
    },
  });
  const { data: users } = useGetUsers();
  const { data: projects } = useGetProjects();

  const [boardsList, setBoardsList] = useState<IOption[]>([]);
  const [statusList, setStatusList] = useState<IOption[]>([]);

  const usersList = useMemo(() => {
    return users?.map((user) => ({
      id: user.id_user ?? "",
      name: `${user.name} ${user.surname} ${user.patronymic ?? ""}`,
    }));
  }, [users]);

  const projectsList = useMemo(() => {
    return projects?.map((project) => ({
      id: project.id ?? "",
      name: project?.name ?? "",
    }));
  }, [projects]);

  const filterBoards = (projectId: string) => {
    if (!projectId) {
      setBoardsList([]);
      return;
    }
    getBoards({ projectId })
      .then((data) =>
        data.map((board) => ({
          id: board.id,
          name: board.name,
        })),
      )
      .then((data) => setBoardsList(data))
      .catch(() => {});
  };

  const filterColumn = (boardId: string) => {
    if (!boardId) {
      setStatusList([]);
      return;
    }

    getBoards({ boardId })
      .then((data) =>
        data[0].columns?.map((column) => ({
          id: column.id,
          name: TaskColumnName[column.status],
        })),
      )
      .then((data) => setStatusList(data ?? []))
      .catch(() => {});
  };

  useEffect(() => {
    if (task) {
      filterBoards(task.projectId ?? "");
      filterColumn(task.boardId ?? "");
    }
  }, [task]);

  const onSubmit = async (data: ITask) => {
    if (task?.id)
      await updateTask({
        id: task.id,
        name: data.name,
        priority: Number(data.priority),
        boardColumnId: data.boardColumnId,
        performerId: data.performerId,
        description: data.description,
      });
    useTaskStore.getState().setEditTaskModal(false);

    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.TASKS],
    });
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.BOARDS],
    });
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
              placeholder="Проект"
              options={projectsList ?? []}
              selected={field.value ?? ""}
              onChange={(value) => {
                field.onChange(value);
                filterBoards(value ?? "");
                setStatusList([]);
                setValue("boardId", "");
                setValue("boardColumnId", "");
              }}
            />
          )}
          name={"projectId"}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Combobox
              placeholder="Доска"
              options={boardsList ?? []}
              selected={field.value ?? ""}
              onChange={(value) => {
                field.onChange(value);
                filterColumn(value);
                setValue("boardColumnId", "");
              }}
            />
          )}
          name={"boardId"}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Combobox
              placeholder="Статус"
              options={statusList ?? []}
              selected={field.value ?? ""}
              onChange={(value) => {
                field.onChange(value);
              }}
            />
          )}
          name={"boardColumnId"}
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
