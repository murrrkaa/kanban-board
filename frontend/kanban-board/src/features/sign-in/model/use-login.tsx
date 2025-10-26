import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { postLogin } from "@features/sign-in/model/post-login.ts";
import { setAccessToken } from "@shared/lib/auth.ts";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [RoutesEnum.LOGIN],
    mutationFn: postLogin,
    onError: (error) => console.log(error),
    onSuccess: (data) => {
      const { token } = data;
      setAccessToken(token);

      navigate(RoutesEnum.PROFILE);
    },
  });
};
