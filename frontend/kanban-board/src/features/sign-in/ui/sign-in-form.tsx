import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { PasswordShow } from "@shared/ui/icons/password-show.tsx";

export const SignInForm = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <Input label="Login" required placeholder="Логин" />
      <Input
        label="Password"
        required
        placeholder="Пароль"
        rightSlot={<PasswordShow />}
      />
      <Button className="w-full bg-blue-100" size="large">
        Sign In
      </Button>
    </div>
  );
};
