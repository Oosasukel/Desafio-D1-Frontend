import useApi from 'hooks/useApi';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { User } from 'typings/User';
import { HomeContext } from './Context';

interface HomeProviderProps {
  children: ReactNode;
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const { apiGetUsers, apiDeleteUser } = useApi();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalItems: 0,
    itemsPerPage: 6,
  });

  const fetchUsers = useCallback(() => {
    apiGetUsers(pagination.page, pagination.itemsPerPage)
      .then((response) => {
        const {
          data: { items, total },
        } = response;

        setUsers(items);
        setPagination((previous) => ({ ...previous, totalItems: total }));
      })
      .catch(() => {
        setError('Algo deu errado. Tente mais tarde. x_x');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiGetUsers, pagination.itemsPerPage, pagination.page]);

  useEffect(() => {
    fetchUsers();
  }, [apiGetUsers, fetchUsers, pagination.itemsPerPage, pagination.page]);

  const nextPage = useCallback(() => {
    setPagination((previous) => ({ ...previous, page: previous.page + 1 }));
  }, []);

  const previousPage = useCallback(() => {
    setPagination((previous) => ({ ...previous, page: previous.page - 1 }));
  }, []);

  const changeItemsPerPage = useCallback((count: number) => {
    setPagination((previous) => ({
      ...previous,
      itemsPerPage: count,
      page: 1,
    }));
  }, []);

  const deleteUser = useCallback(
    async (id: string) => {
      await apiDeleteUser(id);
      setPagination((previous) => ({ ...previous, page: 1 }));
    },
    [apiDeleteUser]
  );

  return (
    <HomeContext.Provider
      value={{
        loading,
        error,
        setError,

        users,

        currentPage: pagination.page,
        totalItems: pagination.totalItems,
        itemsPerPage: pagination.itemsPerPage,
        nextPage,
        previousPage,
        changeItemsPerPage,

        deleteUser,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
