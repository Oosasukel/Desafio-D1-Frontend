import { AxiosInstance } from "axios";
import { User, UserWithoutId } from "typings/User";

export const createUser = (api: AxiosInstance, user: UserWithoutId) => {
  return api.post<User>("/api/users", user);
};
