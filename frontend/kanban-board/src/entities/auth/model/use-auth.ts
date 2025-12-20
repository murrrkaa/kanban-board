import { removeAccessToken } from "@shared/lib/auth.ts";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
import { getAuthUser } from "@entities/auth/model/get-auth-user.ts";
import { useRolesStore } from "@entities/role/model/use-roles-store.tsx";

export const useAuth = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    const user = await getAuthUser();
    useAuthStore.getState().setUser(user);
    useRolesStore.getState().getRoles();
    if (!user) logout();
  };

  const logout = () => {
    useAuthStore.getState().setUser(null);
    removeAccessToken();
    navigate(RoutesEnum.LOGIN);
  };

  return {
    checkAuth,
    logout,
  };
};
