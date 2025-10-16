import { signIn } from "@shared/ui/image/sign-in/sign-in.ts";
import { Title } from "@shared/ui/components/title";
import { Description } from "@shared/ui/components/description";

export const SignIn = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div
        className="flex-1 h-full flex items-center justify-center
"
      >
        <div className="">
          <div className={"flex flex-col gap-2"}>
            <Title>Sign In</Title>
            <Description>Enter your email and password to sign in!</Description>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden rounded-bl-[120px]">
        <img src={signIn.background} alt={""} className="w-full h-full" />
      </div>
    </div>
  );
};
