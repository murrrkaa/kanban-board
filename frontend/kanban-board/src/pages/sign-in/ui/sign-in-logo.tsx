import { Logo } from "@shared/ui/icons/logo.tsx";
import { Title } from "@shared/ui/components/title";
import { signIn } from "@shared/ui/image/sign-in/sign-in.ts";

export const SignInLogo = () => {
  return (
    <div className="relative flex-1 w-full h-full overflow-hidden rounded-bl-[120px]">
      <div className="border border-white rounded-[24px] p-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[32px] items-center justify-center">
        <Logo />
        <Title className="text-white">Kanban Board</Title>
      </div>
      <img src={signIn.background} alt={""} className="w-full h-full" />
    </div>
  );
};
