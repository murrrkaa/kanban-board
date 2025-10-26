import { type ReactNode, useLayoutEffect, useState } from "react";
import { useAuth } from "@entities/auth/model/use-auth.ts";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { checkAuth } = useAuth();

  useLayoutEffect(() => {
    checkAuth().finally(() => setIsLoading(false));
  }, []);

  return !isLoading && <>{children}</>;
};
