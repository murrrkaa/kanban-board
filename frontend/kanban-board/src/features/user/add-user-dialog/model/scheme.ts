import {
  loginScheme,
  nameScheme,
  patronymicScheme,
  surnameScheme,
} from "@features/profile/model/scheme.ts";
import { z } from "zod";
import { passwordScheme } from "@features/sign-in/model/resolver.ts";

export const addUserScheme = z.object({
  login: loginScheme,
  name: nameScheme,
  surname: surnameScheme,
  patronymic: patronymicScheme,
  roleId: z.string(),
  password: passwordScheme,
});
