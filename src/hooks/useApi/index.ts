import { useCallback } from "react";
import api from "services/api";
import { UserWithoutId } from "typings/User";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./endpoints";

const useApi = () => {
  const apiGetUsers = useCallback(() => getUsers(api), []);
  const apiGetUser = useCallback((id: string) => getUser(api, id), []);
  const apiCreateUser = useCallback(
    (user: UserWithoutId) => createUser(api, user),
    []
  );
  const apiUpdateUser = useCallback(
    (id: string, user: UserWithoutId) => updateUser(api, id, user),
    []
  );
  const apiDeleteUser = useCallback((id: string) => deleteUser(api, id), []);

  return {
    apiGetUsers,
    apiGetUser,
    apiCreateUser,
    apiUpdateUser,
    apiDeleteUser,
  };
};

export default useApi;
