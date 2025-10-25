import { SignInForm } from "@features/sign-in/ui";
import { SignInLogo } from "@/pages/sign-in/ui/sign-in-logo.tsx";
import { SignInTitle } from "@/pages/sign-in/ui/sign-in-title.tsx";

export const SignInPage = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div
        className="flex-1 h-full flex items-center justify-center
"
      >
        <div className="flex flex-col gap-[20px] max-w-[390px] w-full m-[20px]">
          <SignInTitle />
          <SignInForm />
        </div>
      </div>
      <SignInLogo />
    </div>
  );
};
