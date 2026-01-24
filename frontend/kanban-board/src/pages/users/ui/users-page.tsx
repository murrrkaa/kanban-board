import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { UserTable } from "@widgets/users/user-table/ui";
import { EditUserDialog } from "@features/user/edit-user/ui";
import { Button } from "@shared/ui/components/button";
import { AddUserDialog } from "@features/user/add-user-dialog/ui";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { Input } from "@shared/ui/components/input";
import { useState } from "react";
import { useDebounce } from "@shared/hooks/use-debounce.tsx";

export const UsersPage = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 400);

  const user = useAuthStore.getState().user;

  const handleOpenAddDialog = () => {
    useUserDialogStore.getState().setOpenAddDialog(true);
  };

  return (
    <>
      <PageWrapper
        title="Users"
        leftSlot={
          <div className="flex flex-row gap-3 items-center">
            <Input
              value={value}
              classNames={{
                inputClassName: "w-[250px]",
              }}
              placeholder="Имя пользователя"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              className="h-[40px]"
              onClick={handleOpenAddDialog}
              disabled={user?.roleName === "Пользователь"}
            >
              Добавить пользователя
            </Button>
          </div>
        }
      >
        <UserTable searchName={debounceValue} />
      </PageWrapper>
      <EditUserDialog />
      <AddUserDialog />
    </>
  );
};
