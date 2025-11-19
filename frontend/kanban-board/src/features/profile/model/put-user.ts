import type { IFormData } from "@features/profile/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const putUser = async (data: IFormData): Promise<IFormData> =>
  baseApi.put(`${RoutesEnum.USERS}/${data.id_user}`, data);
