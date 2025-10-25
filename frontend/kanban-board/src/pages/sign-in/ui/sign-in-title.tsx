import { Title } from "@shared/ui/components/title";
import { Description } from "@shared/ui/components/description";

export const SignInTitle = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <Title>Sign In</Title>
      <Description>Enter your email and password to sign in!</Description>
    </div>
  );
};
