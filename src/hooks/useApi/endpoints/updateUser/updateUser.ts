import { AxiosInstance } from "axios";
import { User, UserWithoutId } from "typings/User";

export const updateUser = (
  api: AxiosInstance,
  id: string,
  user: UserWithoutId
) => {
  return api.put<User>(`/api/users/${id}`, user);
};
