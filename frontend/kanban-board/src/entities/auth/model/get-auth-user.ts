import type { IPayload, IUser } from "@entities/auth/model/types.ts";
import { getAccessToken } from "@shared/lib/auth.ts";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "@entities/auth/model/get-user-by-id.ts";

export const getAuthUser = async (): Promise<IUser | null> => {
  try {
    const token = getAccessToken();
    const payload: IPayload = jwtDecode(token ?? "");

    return await getUserById(payload.id);
  } catch (error) {
    console.error(error);
    return null;
  }
};
