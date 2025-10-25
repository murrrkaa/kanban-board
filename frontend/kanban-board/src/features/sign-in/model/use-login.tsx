import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { postLogin } from "@features/sign-in/model/post-login.ts";
import type { SignInFormData } from "@features/sign-in/model/types.ts";

export const useLogin = () => {
  return useMutation({
    mutationKey: [RoutesEnum.LOGIN],
    mutationFn: (data: SignInFormData) => postLogin(data),
    onError: (error) => console.log(error),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
