import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from 'typings/User';

export interface HomeContextProps {
  loading: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;

  users: User[];

  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  nextPage: () => void;
  previousPage: () => void;
  changeItemsPerPage: (count: number) => void;

  deleteUser: (id: string) => Promise<void>;
}

export const HomeContext = createContext({} as HomeContextProps);
