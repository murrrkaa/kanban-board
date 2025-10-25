import { signIn } from "@shared/ui/image/sign-in/sign-in.ts";
import { Title } from "@shared/ui/components/title";
import { Description } from "@shared/ui/components/description";
import { SignInForm } from "@features/sign-in/ui";
import { Logo } from "@shared/ui/icons/logo.tsx";

export const SignIn = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div
        className="flex-1 h-full flex items-center justify-center
"
      >
        <div className="flex flex-col gap-[20px] w-[390px]">
          <div className={"flex flex-col gap-2"}>
            <Title>Sign In</Title>
            <Description>Enter your email and password to sign in!</Description>
          </div>
          <SignInForm />
        </div>
      </div>
      <div className="relative flex-1 w-full h-full overflow-hidden rounded-bl-[120px]">
        <div className="border border-white rounded-[24px] p-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[32px] items-center justify-center">
          <Logo />
          <Title className="text-white">Kanban Board</Title>
        </div>
        <img src={signIn.background} alt={""} className="w-full h-full" />
      </div>
    </div>
  );
};
