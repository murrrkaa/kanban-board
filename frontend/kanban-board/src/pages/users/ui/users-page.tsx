import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { UserTable } from "@widgets/users/user-table/ui";
import { EditUserDialog } from "@features/user/edit-user/ui";
import { Button } from "@shared/ui/components/button";

export const UsersPage = () => {
  return (
    <>
      <PageWrapper
        title="Users"
        leftSlot={<Button className="h-[40px]">Добавить пользователя</Button>}
      >
        <UserTable />
      </PageWrapper>
      <EditUserDialog />
    </>
  );
};
