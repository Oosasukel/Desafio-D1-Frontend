import { AxiosInstance } from 'axios';
import { User } from 'typings/User';

export const getUsers = (api: AxiosInstance, page: number, limit: number) => {
  return api.get<{ items: User[]; total: number }>('/api/users', {
    params: {
      page,
      limit,
    },
  });
};
