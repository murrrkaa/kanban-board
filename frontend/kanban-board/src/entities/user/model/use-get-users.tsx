import { useQuery } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { getUsers } from "@entities/user/model/get-users.ts";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [RoutesEnum.USERS],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
