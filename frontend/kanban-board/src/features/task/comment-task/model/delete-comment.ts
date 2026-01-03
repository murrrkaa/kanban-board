import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const deleteComment = async (id: string) =>
  await baseApi.delete(`${RoutesEnum.COMMENTS}/${id}`);
