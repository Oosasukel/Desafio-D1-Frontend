import { AxiosInstance } from "axios";
import { User } from "typings/User";

export const getUsers = (api: AxiosInstance) => {
  return api.get<User[]>("/api/users");
};
