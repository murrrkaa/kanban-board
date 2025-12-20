import {
  loginScheme,
  nameScheme,
  patronymicScheme,
  surnameScheme,
} from "@features/profile/model/scheme.ts";
import { z } from "zod";

export const editUserScheme = z.object({
  login: loginScheme,
  name: nameScheme,
  surname: surnameScheme,
  patronymic: patronymicScheme,
  role: z.string(),
});
