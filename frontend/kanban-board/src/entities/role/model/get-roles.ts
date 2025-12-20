import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const getRoles = async (): Promise<
  {
    name: string;
    id_role: string;
  }[]
> => await baseApi.get(RoutesEnum.ROLES);
