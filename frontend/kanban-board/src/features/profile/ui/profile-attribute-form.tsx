import { EditAttribute } from "@shared/ui/components/edit-attribute/ui";
import type { IUser } from "@entities/auth/model/types.ts";
import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import type { IFormData } from "@features/profile/model/types.ts";
import { useUpdateUser } from "@features/profile/model/use-update-user.tsx";

interface IProps {
  userInfo: IUser | null;
}

export const ProfileAttributeForm: FC<IProps> = ({ userInfo }) => {
  const { mutate: updateUser } = useUpdateUser();
  const { control } = useForm<IFormData>({
    defaultValues: {
      name: userInfo?.name,
      surname: userInfo?.surname,
      patronymic: userInfo?.patronymic,
      login: userInfo?.login,
    },
  });

  const onChangeHandler = (field: keyof IFormData, value: string) => {
    if (userInfo?.[field] === value) return;
    updateUser({ field, value });
  };
  return (
    <div className="w-full p-[30px] mt-[20px] flex flex-col">
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Имя"
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              onChangeHandler(field.name, value);
            }}
          />
        )}
        name="name"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Фамилия"
            value={field.value ?? ""}
            onChange={(value) => {
              field.onChange(value);
              onChangeHandler(field.name, value);
            }}
          />
        )}
        name="surname"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Отчество"
            value={field.value ?? ""}
            onChange={(value) => {
              field.onChange(value);
              onChangeHandler(field.name, value);
            }}
          />
        )}
        name="patronymic"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Логин"
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              onChangeHandler(field.name, value);
            }}
          />
        )}
        name="login"
        control={control}
      />
    </div>
  );
};
