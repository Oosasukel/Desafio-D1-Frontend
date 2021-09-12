import Button from 'components/Button';
import Modal from 'components/Modal';
import { useRouter } from 'next/dist/client/router';
import { HomeContext } from 'pagesComponents/Home/Provider/Context';
import { useCallback, useContext, useMemo, useState } from 'react';
import { User } from 'typings/User';
import { ageByBirthDate } from 'utils/ageByBirthDate';
import * as S from './styles';
import { getSocialMediaInfo } from './utils/getSocialMediaInfo';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const router = useRouter();
  const { deleteUser, setError } = useContext(HomeContext);
  const [deletingUser, setDeletingUser] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const age = useMemo(() => {
    const years = ageByBirthDate(new Date(user.birthDate));

    return years === 1 ? `${years} ano` : `${years} anos`;
  }, [user]);

  const socialMedias = useMemo(
    () => getSocialMediaInfo(user.socialMedias),
    [user.socialMedias]
  );

  const handleDeleteUser = useCallback(() => {
    setDeletingUser(true);

    deleteUser(user.id)
      .catch(() => {
        setError('Erro ao excluir o usuário. x_x');
      })
      .finally(() => {
        setDeletingUser(false);
      });
  }, [deleteUser, setError, user.id]);

  const handleEditUser = useCallback(() => {
    router.push(`/${user.id}`);
  }, [router, user.id]);

  return (
    <S.Container>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <S.ModalContent>
          <S.ModalQuestion>Tem certeza que deseja excluir este usuário?</S.ModalQuestion>

          <S.ModalButtons>
            <Button onClick={handleDeleteUser}>Excluir</Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button>
          </S.ModalButtons>
        </S.ModalContent>
      </Modal>

      <S.Id>{user.id}</S.Id>
      <S.Title title={user.name}>{user.name}</S.Title>
      {user.addresses.length > 0 && (
        <S.Location>
          {user.addresses[0].city} - {user.addresses[0].state}
        </S.Location>
      )}
      <S.Age>{age}</S.Age>

      <S.ActionsContainer>
        <S.ActionIcon
          src='/icons/edit.svg'
          disabled={deletingUser}
          onClick={!deletingUser ? handleEditUser : undefined}
        />
        <S.ActionIcon
          src='/icons/trash.svg'
          disabled={deletingUser}
          onClick={!deletingUser ? () => setModalOpen(true) : undefined}
        />
      </S.ActionsContainer>

      <S.SocialMediaContainer>
        {socialMedias.map((socialMedia) => (
          <a href={socialMedia.url} key={socialMedia.key}>
            <S.SocialMedia
              src={`/icons/${socialMedia.key}.svg`}
              activecolor={socialMedia.color}
            />
          </a>
        ))}
      </S.SocialMediaContainer>
    </S.Container>
  );
};
