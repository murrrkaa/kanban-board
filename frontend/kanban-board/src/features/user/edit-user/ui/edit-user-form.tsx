import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { Controller, useForm } from "react-hook-form";
import type { IEditUserFormData } from "@features/user/edit-user/model/types.ts";
import { useUpdateUser } from "@features/user/edit-user/model/use-update-user.tsx";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserScheme } from "@features/user/edit-user/ui/scheme.ts";
import { Combobox } from "@shared/ui/components/combobox";
import { useRolesStore } from "@entities/role/model/use-roles-store.tsx";
import type { IOption } from "@shared/ui/components/combobox/combobox.tsx";

export const EditUserForm = () => {
  const rolesList = useRolesStore().roles;
  const user = useUserDialogStore((state) => state.user);

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
    setError,
  } = useForm<IEditUserFormData>({
    resolver: zodResolver(editUserScheme),
    defaultValues: {
      name: user?.name ?? "",
      surname: user?.surname ?? "",
      login: user?.login ?? "",
      patronymic: user?.patronymic ?? "",
      role: user?.roleId ?? "",
    },
  });

  const { mutate: updateUser } = useUpdateUser(setError);

  const onSubmit = (data: IEditUserFormData) => {
    if (user)
      updateUser({
        id: user.id,
        data: {
          ...data,
        },
      });
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
              error={errors?.name?.message}
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
              error={errors?.surname?.message}
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
              error={errors?.patronymic?.message}
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
              error={errors?.login?.message}
            />
          )}
          name={"login"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Combobox
              placeholder="Роль"
              options={rolesList as IOption[]}
              selected={field.value}
              onChange={field.onChange}
            />
          )}
          name={"role"}
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
