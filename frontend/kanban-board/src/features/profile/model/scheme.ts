import { z } from "zod";
import {
  loginMessage,
  patronymicMessage,
  surnameMessage,
} from "@features/profile/model/constants.ts";
import { nameMessage } from "@features/profile/model/constants.ts";

const loginScheme = z
  .string()
  .trim()
  .min(1, loginMessage)
  .max(150, loginMessage)
  .regex(/^[a-zA-Z0-9@/+\-_]+$/, loginMessage);

const nameScheme = z
  .string()
  .trim()
  .min(1, nameMessage)
  .max(150, nameMessage)
  .regex(/^[а-яА-яЁё]+$/, nameMessage);

const surnameScheme = z
  .string()
  .trim()
  .min(1, surnameMessage)
  .max(150, surnameMessage)
  .regex(/^[а-яА-яЁё]+$/, surnameMessage);

const patronymicScheme = z
  .string()
  .max(150, patronymicMessage)
  .regex(/^[а-яА-ЯЁё]+$/, patronymicMessage)
  .optional();

export const profileScheme = z.object({
  name: nameScheme,
  surname: surnameScheme,
  patronymic: patronymicScheme,
  login: loginScheme,
});
