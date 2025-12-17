import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IEditUserFormData } from "@features/user/edit-user/model/types.ts";
import { transformToBack } from "@entities/user/model/transform-to-back.ts";
import { putUser } from "@entities/user/model/put-user.ts";

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.USERS],
    mutationFn: ({ id, data }: { id: string; data: IEditUserFormData }) => {
      const transformedData = transformToBack({
        id,
        ...data,
      });

      return putUser(transformedData);
    },
  });
};
