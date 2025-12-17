import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { UserTable } from "@widgets/users/user-table/ui";
import { EditUserDialog } from "@features/user/edit-user/ui";
import { Button } from "@shared/ui/components/button";
import { AddUserDialog } from "@features/user/add-user-dialog/ui";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";

export const UsersPage = () => {
  const handleOpenAddDialog = () => {
    useUserDialogStore.getState().setOpenAddDialog(true);
  };
  return (
    <>
      <PageWrapper
        title="Users"
        leftSlot={
          <Button className="h-[40px]" onClick={handleOpenAddDialog}>
            Добавить пользователя
          </Button>
        }
      >
        <UserTable />
      </PageWrapper>
      <EditUserDialog />
      <AddUserDialog />
    </>
  );
};
