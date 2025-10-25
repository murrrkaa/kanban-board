import { z } from "zod";
import {
  loginMessage,
  passwordMessage,
} from "@features/sign-in/model/constants.ts";

const loginScheme = z
  .string()
  .min(1, loginMessage)
  .max(150, loginMessage)
  .regex(/^[a-zA-Z0-9@/+\-_]+$/, loginMessage);

const passwordScheme = z
  .string()
  .min(12, passwordMessage)
  .regex(
    /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*[@/+\-_!*#$%&()]).{12,}$/,
    passwordMessage,
  );

export const signInScheme = z.object({
  login: loginScheme,
  password: passwordScheme,
});
