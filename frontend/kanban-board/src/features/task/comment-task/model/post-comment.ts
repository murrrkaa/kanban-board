import type { IComment } from "@entities/task/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const postComment = async (form: IComment): Promise<IComment> =>
  await baseApi.post(`${RoutesEnum.COMMENTS}`, form);
