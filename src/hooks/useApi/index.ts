import { useCallback } from 'react';
import api from 'services/api';
import { getUsers } from './endpoints';

const useApi = () => {
  const apiGetUsers = useCallback(() => getUsers(api), []);

  return { apiGetUsers };
};

export default useApi;
