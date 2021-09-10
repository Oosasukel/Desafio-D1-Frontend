import { AxiosInstance } from 'axios';
import { User } from './types';

export const getUsers = (api: AxiosInstance) => {
  return api.get<User[]>('/api/users');
};
