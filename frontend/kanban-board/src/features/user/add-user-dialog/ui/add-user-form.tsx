import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { Controller, useForm } from "react-hook-form";
import type { IAddUserFormData } from "@features/user/edit-user/model/types.ts";
import { addUserScheme } from "@features/user/add-user-dialog/model/scheme.ts";
import { zodResolver } from "@hookform/resolvers/zod";

export const AddUserForm = () => {
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<IAddUserFormData>({
    resolver: zodResolver(addUserScheme),
    defaultValues: {
      name: "",
      login: "",
      password: "",
      roleId: "",
      surname: "",
    },
  });

  const onSubmit = (data: IAddUserFormData) => {
    console.log(data);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-100px)] flex flex-col gap-4 mt-[30px]">
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
            <Input
              placeholder="Роль"
              value={field.value}
              onChange={field.onChange}
              error={errors?.roleId?.message}
            />
          )}
          name={"roleId"}
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
