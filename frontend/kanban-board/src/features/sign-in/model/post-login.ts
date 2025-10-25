import type {
  IResponseLogin,
  SignInFormData,
} from "@features/sign-in/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const postLogin = async (
  data: SignInFormData,
): Promise<IResponseLogin> => await baseApi.post(RoutesEnum.LOGIN, data);
