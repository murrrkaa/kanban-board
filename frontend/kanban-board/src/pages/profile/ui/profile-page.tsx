import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { ProfileCard } from "@/pages/profile/ui/profile-card.tsx";

export const ProfilePage = () => {
  return (
    <PageWrapper title="Profile">
      <ProfileCard />
    </PageWrapper>
  );
};
