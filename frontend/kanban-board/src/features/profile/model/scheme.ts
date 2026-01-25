import { z } from "zod";
import {
  loginMessage,
  patronymicMessage,
  surnameMessage,
} from "@features/profile/model/constants.ts";
import { nameMessage } from "@features/profile/model/constants.ts";

export const loginScheme = z
  .string()
  .trim()
  .min(1, loginMessage)
  .max(150, loginMessage)
  .regex(/^[a-zA-Z0-9@/+\-_]+$/, loginMessage);

export const nameScheme = z
  .string()
  .trim()
  .min(1, nameMessage)
  .max(150, nameMessage)
  .regex(/^[а-яА-яЁё]+$/, nameMessage);

export const surnameScheme = z
  .string()
  .trim()
  .min(1, surnameMessage)
  .max(150, surnameMessage)
  .regex(/^[а-яА-яЁё]+$/, surnameMessage);

export const patronymicScheme = z
  .string()
  .max(150, patronymicMessage)
  .regex(/^[а-яА-ЯЁё]+$/, patronymicMessage)
  .or(z.literal(""))
  .optional();

export const profileScheme = z.object({
  name: nameScheme,
  surname: surnameScheme,
  patronymic: patronymicScheme,
  login: loginScheme,
});
