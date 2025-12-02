import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { PasswordShow } from "@shared/ui/icons/password-show.tsx";
import { useForm, Controller } from "react-hook-form";
import type { SignInFormData } from "@features/sign-in/model/types.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInScheme } from "@features/sign-in/model/resolver.ts";
import { useLogin } from "@features/sign-in/model/use-login.tsx";

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInScheme),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const { mutate: login } = useLogin({
    onErrorHandler: (error) => {
      if (error.error.includes("login"))
        setError("login", { message: error.error });

      if (error.error.includes("password"))
        setError("password", { message: error.error });
    },
  });

  const onSubmit = (data: SignInFormData) => {
    login(data);
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <Controller
        name="login"
        control={control}
        render={({ field }) => (
          <Input
            label="Login"
            required
            placeholder="Логин"
            value={field.value}
            onChange={field.onChange}
            error={errors.login?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            label="Password"
            required
            placeholder="Пароль"
            rightSlot={<PasswordShow />}
            value={field.value}
            onChange={field.onChange}
            error={errors.password?.message}
          />
        )}
      />
      <Button
        className="w-full bg-blue-100"
        size="large"
        onClick={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
    </div>
  );
};
