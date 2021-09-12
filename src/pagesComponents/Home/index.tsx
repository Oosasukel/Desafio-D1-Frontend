import Button from 'components/Button';
import { useRouter } from 'next/dist/client/router';
import { Pagination } from './components/Pagination';
import { UserList } from './components/UserList';
import { HomeProvider } from './Provider/Provider';
import * as S from './styles';

export const Home = () => {
  const router = useRouter();

  return (
    <HomeProvider>
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Title>Usuários</S.Title>
            <Button onClick={() => router.push('/adicionar-usuario')}>
              + Novo usuário
            </Button>
          </S.Header>
          <UserList />
          <Pagination />
        </S.Content>
      </S.Container>
    </HomeProvider>
  );
};
