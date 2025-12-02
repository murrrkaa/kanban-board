import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { postLogin } from "@features/sign-in/model/post-login.ts";
import { setAccessToken } from "@shared/lib/auth.ts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@entities/auth/model/use-auth.ts";

interface IError {
  error: string;
}

export const useLogin = ({
  onErrorHandler,
}: {
  onErrorHandler: (error: IError) => void;
}) => {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  return useMutation({
    mutationKey: [RoutesEnum.LOGIN],
    mutationFn: postLogin,
    onError: onErrorHandler,
    onSuccess: async (data) => {
      if (data) {
        const { token } = data;
        setAccessToken(token);

        await checkAuth();

        navigate(RoutesEnum.PROFILE);
      }
    },
  });
};
