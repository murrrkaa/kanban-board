import type { IAddUserFormData } from "@features/user/edit-user/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const postUser = async (data: IAddUserFormData) =>
  await baseApi.post(`${RoutesEnum.USERS}`, data);
