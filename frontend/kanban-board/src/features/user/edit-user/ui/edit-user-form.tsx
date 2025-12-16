import type { IUser } from "@entities/auth/model/types.ts";
import { type FC } from "react";
import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { Controller, useForm } from "react-hook-form";
import type { IUserFormData } from "@features/user/edit-user/model/types.ts";
import { useUpdateUser } from "@features/user/edit-user/model/use-update-user.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";

interface IEditUserForm {
  user: IUser;
  setOpen: (open: boolean) => void;
}

export const EditUserForm: FC<IEditUserForm> = ({ user, setOpen }) => {
  const { mutateAsync: updateUser } = useUpdateUser();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IUserFormData>({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      login: user.login,
      patronymic: user.patronymic ?? "",
      roleId: "",
    },
  });

  const onSubmit = async (data: IUserFormData) => {
    await updateUser({
      id: user.id,
      data: {
        ...data,
        roleId: user.roleId,
      },
    }); //TODO доделать выбор роли

    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.USERS],
    });

    setOpen(false);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-100px)] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Имя"
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
              placeholder="Фамилия"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"surname"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Отчество"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"patronymic"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Логин"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"login"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Роль"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"roleId"}
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
