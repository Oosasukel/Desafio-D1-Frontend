import { AxiosInstance } from 'axios';

export const deleteUser = (api: AxiosInstance, id: string) => {
  return api.delete(`/api/Users/${id}`);
};
