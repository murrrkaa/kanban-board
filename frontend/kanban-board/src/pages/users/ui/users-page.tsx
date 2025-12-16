import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { UserTable } from "@widgets/users/user-table/ui";
import { EditUserDialog } from "@features/user/edit-user/ui";

export const UsersPage = () => {
  return (
    <>
      <PageWrapper title="Users">
        <UserTable />
      </PageWrapper>
      <EditUserDialog />
    </>
  );
};
