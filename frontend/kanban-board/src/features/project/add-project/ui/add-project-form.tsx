import { useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { RoutesEnum } from "@shared/routes";
import { Input } from "@shared/ui/components/input";
import { Combobox } from "@shared/ui/components/combobox";
import { Button } from "@shared/ui/components/button";
import type { IAddProjectForm } from "@features/project/add-project/model/types.ts";
import { useGetUsers } from "@entities/user/model/use-get-users.tsx";
import { useMemo } from "react";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import { useCreateProject } from "@features/project/add-project/model/use-create-project.tsx";

export const AddProjectForm = () => {
  const { data: users } = useGetUsers();

  const { mutateAsync: createProject } = useCreateProject();

  const usersList = useMemo(() => {
    return users?.map((user) => ({
      id: user.id_user ?? "",
      name: `${user.name} ${user.surname} ${user.patronymic ?? ""}`,
    }));
  }, [users]);

  const queryClient = useQueryClient();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IAddProjectForm>({
    defaultValues: {
      name: "",
      description: "",
      createdBy: "",
    },
  });

  const onSubmit = async (data: IAddProjectForm) => {
    await createProject(data);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.PROJECTS],
    });
    useProjectsStore.getState().setAddProjectModal(false);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Наименование проекта"
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
              placeholder="Описание проекта"
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
              placeholder="Исполнитель"
              options={usersList ?? []}
              selected={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"createdBy"}
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
