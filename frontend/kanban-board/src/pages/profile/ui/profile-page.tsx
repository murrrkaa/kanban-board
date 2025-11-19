import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProfileCard } from "@features/profile/ui";

export const ProfilePage = () => {
  return (
    <PageWrapper title="Profile">
      <ProfileCard />
    </PageWrapper>
  );
};
