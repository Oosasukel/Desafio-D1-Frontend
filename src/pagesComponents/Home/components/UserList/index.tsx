import { Loading } from 'components/Loading';
import { HomeContext } from 'pagesComponents/Home/Provider/Context';
import { useContext } from 'react';
import * as S from './styles';
import { UserCard } from './UserCard';

export const UserList = () => {
  const { users, loading, error } = useContext(HomeContext);

  if (error) return <S.Message>{error}</S.Message>;
  if (loading) return <Loading />;

  return (
    <S.Container>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </S.Container>
  );
};
