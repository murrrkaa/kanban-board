import { type ReactNode } from "react";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { Navigate } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";

export const PageGuard = ({ children }: { children: ReactNode }) => {
  const isAuthUser = useAuthStore((state) => !!state.user);

  if (isAuthUser) {
    return <>{children}</>;
  } else {
    return <Navigate to={RoutesEnum.LOGIN} replace />;
  }
};
