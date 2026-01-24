import { EditAttribute } from "@shared/ui/components/edit-attribute/ui";
import type { IUser } from "@entities/auth/model/types.ts";
import { type FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import type { IFormData } from "@features/profile/model/types.ts";
import { useUpdateUser } from "@features/profile/model/use-update-user.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileScheme } from "@features/profile/model/scheme.ts";
import { useRolesStore } from "@entities/role/model/use-roles-store.tsx";

interface IProps {
  userInfo: IUser | null;
}

export const ProfileAttributeForm: FC<IProps> = ({ userInfo }) => {
  const rolesList = useRolesStore().roles;

  const { mutate: updateUser } = useUpdateUser();
  const {
    control,
    formState: { errors },
    trigger,
    reset,
  } = useForm<IFormData>({
    resolver: zodResolver(profileScheme),
    defaultValues: {
      name: userInfo?.name,
      surname: userInfo?.surname,
      patronymic: userInfo?.patronymic,
      login: userInfo?.login,
      roleId:
        rolesList?.find((role) => role.id === userInfo?.roleId)?.name || "",
    },
  });
  const onSubmitData = async (field: keyof IFormData, value: string) => {
    if (userInfo?.[field] === value) return;
    const isValid = await trigger(field);
    if (isValid) updateUser({ field, value });
  };

  useEffect(() => {
    if (userInfo && rolesList.length > 0) {
      const roleId =
        rolesList?.find((role) => role.id === userInfo?.roleId)?.name || "";

      reset({
        name: userInfo.name,
        login: userInfo.login,
        roleId,
        patronymic: userInfo.patronymic,
        surname: userInfo.surname,
      });
    }
  }, [userInfo, rolesList]);

  return (
    <div className="w-full p-[30px] mt-[20px] flex flex-col">
      <Controller
        render={({ field }) => (
          <EditAttribute
            label="Имя"
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
            }}
            onBlur={(value) => onSubmitData(field.name, value)}
            error={errors?.name?.message}
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
            }}
            onBlur={(value) => onSubmitData(field.name, value)}
            error={errors?.surname?.message}
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
            }}
            onBlur={(value) => onSubmitData(field.name, value)}
            error={errors?.patronymic?.message}
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
            }}
            onBlur={(value) => onSubmitData(field.name, value)}
            error={errors?.login?.message}
          />
        )}
        name="login"
        control={control}
      />
      <div className="mt-[20px]">
        <Controller
          render={({ field }) => (
            <EditAttribute
              isEditable={false}
              label="Роль"
              value={field.value ?? ""}
            />
          )}
          name="roleId"
          control={control}
        />
      </div>
    </div>
  );
};
