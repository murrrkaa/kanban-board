import type { SignInFormData } from "@features/sign-in/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const postLogin = (data: SignInFormData) =>
  baseApi.post(RoutesEnum.LOGIN, data);
