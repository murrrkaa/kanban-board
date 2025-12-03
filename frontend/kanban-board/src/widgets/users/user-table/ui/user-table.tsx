import { Table } from "@shared/ui/components/table";
import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { useGetUsers } from "@entities/user/model/use-get-users.tsx";
import { useUsersStore } from "@entities/user/model/use-users-store.tsx";
import { useEffect } from "react";
import { convertUsersDto } from "@entities/user/model/convert-users-dto.ts";

export const UserTable = () => {
  const { data, isSuccess } = useGetUsers();
  const users = useUsersStore((state) => state.users);

  console.log(users, "users");

  useEffect(() => {
    if (data && isSuccess) {
      const users = convertUsersDto(data);
      useUsersStore.getState().setUsers(users);
    }
  }, [data, isSuccess]);
  return (
    <TableWrapper title="Users List Table">
      <Table />
    </TableWrapper>
  );
};
