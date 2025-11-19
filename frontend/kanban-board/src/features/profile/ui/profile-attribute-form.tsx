import { EditAttribute } from "@shared/ui/components/edit-attribute/ui";
import type { IUser } from "@entities/auth/model/types.ts";
import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";

interface IProps {
  userInfo: IUser | null;
}

interface IFormData {
  name: string;
  surname: string;
  patronymic: string;
  login: string;
}

export const ProfileAttributeForm: FC<IProps> = ({ userInfo }) => {
  console.log(userInfo);
  const { control } = useForm<IFormData>({
    defaultValues: {
      name: userInfo?.name,
      surname: userInfo?.surname,
      patronymic: userInfo?.patronymic,
      login: userInfo?.login,
    },
  });
  return (
    <div className="w-full p-[30px] mt-[20px] flex flex-col">
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Имя"
            value={field.value}
            onChange={field.onChange}
          />
        )}
        name="name"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Фамилия"
            value={field.value}
            onChange={field.onChange}
          />
        )}
        name="surname"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Отчество"
            value={field.value}
            onChange={field.onChange}
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
            onChange={field.onChange}
          />
        )}
        name="login"
        control={control}
      />
    </div>
  );
};
