import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { Navigate } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";

export const Redirect = () => {
  const isAuthUser = useAuthStore((state) => !!state.user);

  return <Navigate to={isAuthUser ? RoutesEnum.PROFILE : RoutesEnum.LOGIN} />;
};
