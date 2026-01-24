import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { Controller, useForm } from "react-hook-form";
import type { IAddUserFormData } from "@features/user/edit-user/model/types.ts";
import { addUserScheme } from "@features/user/add-user-dialog/model/scheme.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "@features/user/add-user-dialog/model/use-create-user.tsx";
import { Combobox } from "@shared/ui/components/combobox";
import { useRolesStore } from "@entities/role/model/use-roles-store.tsx";

export const AddUserForm = () => {
  const rolesList = useRolesStore().roles;

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IAddUserFormData>({
    resolver: zodResolver(addUserScheme),
    defaultValues: {
      name: "",
      login: "",
      password: "",
      role: "",
      surname: "",
    },
  });
  const { mutate: createUser } = useCreateUser(setError);

  const onSubmit = (data: IAddUserFormData) => {
    createUser(data);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Логин"
              value={field.value}
              onChange={field.onChange}
              error={errors?.login?.message}
            />
          )}
          name={"login"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Имя"
              value={field.value}
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
              value={field.value}
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
              value={field.value}
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
              placeholder="Пароль"
              value={field.value}
              onChange={field.onChange}
              error={errors?.password?.message}
            />
          )}
          name={"password"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Combobox
              placeholder="Роль"
              options={rolesList}
              selected={field.value}
              onChange={field.onChange}
            />
          )}
          name={"role"}
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
