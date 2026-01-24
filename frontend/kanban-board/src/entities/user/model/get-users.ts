import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUserDto } from "@entities/auth/model/types.ts";
import { objectToQueryString } from "@shared/model/create-query-string.ts";

export const getUsers = async (searchName?: string): Promise<IUserDto[]> =>
  await baseApi.get(
    `${RoutesEnum.USERS}${objectToQueryString({ searchName })}`,
  );
