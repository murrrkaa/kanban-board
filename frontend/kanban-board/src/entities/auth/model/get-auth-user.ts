import type { IPayload, IUser } from "@entities/auth/model/types.ts";
import { getAccessToken } from "@shared/lib/auth.ts";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "@entities/auth/model/get-user-by-id.ts";
import { convertUserDto } from "@entities/auth/model/convert-user-dto.ts";

export const getAuthUser = async (): Promise<IUser | null> => {
  try {
    const token = getAccessToken();
    const payload: IPayload = jwtDecode(token ?? "");

    const userDto = await getUserById(payload.id);

    return convertUserDto(userDto);
  } catch (error) {
    console.error(error);
    return null;
  }
};
