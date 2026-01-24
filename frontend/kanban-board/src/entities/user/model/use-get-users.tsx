import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getUsers } from "@entities/user/model/get-users.ts";

export const useGetUsers = (searchName?: string) => {
  return useQuery({
    queryKey: [RoutesEnum.USERS, searchName],
    queryFn: () => getUsers(searchName),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
