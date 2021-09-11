import { AxiosInstance } from "axios";
import { User } from "typings/User";

export const getUser = (api: AxiosInstance, id: string) => {
  return api.get<User>(`/api/users/${id}`);
};
