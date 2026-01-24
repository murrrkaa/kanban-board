import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IEditUserFormData } from "@features/user/edit-user/model/types.ts";
import { transformToBack } from "@entities/user/model/transform-to-back.ts";
import { putUser } from "@entities/user/model/put-user.ts";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";

export const useUpdateUser = (setError: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [RoutesEnum.USERS],
    mutationFn: ({ id, data }: { id: string; data: IEditUserFormData }) => {
      const transformedData = transformToBack({
        id,
        ...{ ...data, roleId: data.role },
      });

      return putUser(transformedData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [RoutesEnum.USERS],
      });
      useUserDialogStore.getState().setOpenEditDialog(false);
    },
    onError: (e: any) => {
      if (e.status === 409)
        setError("login", {
          message: e.error,
        });
    },
  });
};
