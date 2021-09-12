import { FormHandles } from '@unform/core';
import { Loading } from 'components/Loading';
import { UserForm } from 'components/UserForm';
import useApi from 'hooks/useApi';
import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { User, UserWithoutId } from 'typings/User';
import * as yup from 'yup';
import * as S from './styles';

interface EditUserProps {
  id: string;
}

export const EditUser = ({ id }: EditUserProps) => {
  const router = useRouter();
  const { apiGetUser, apiUpdateUser } = useApi();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState<User>();
  const [saving, setSaving] = useState(false);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    apiGetUser(id)
      .then((response) => {
        const responseUser = response.data;
        responseUser.birthDate = responseUser.birthDate.substring(0, 10);
        responseUser.phones.forEach((phone, index) => {
          phone.id = index + 1;
        });
        responseUser.addresses.forEach((address, index) => {
          address.id = index + 1;
        });

        setUser(responseUser);
      })
      .catch(() => {
        setError('Algo deu errado ao buscar o usuário. Tente mais tarde. x_x');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiGetUser, id]);

  const handleUpdate = useCallback(
    async (data: UserWithoutId) => {
      formRef.current.setErrors({});

      const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório.'),
        phones: yup.array().of(
          yup.object().shape({
            number: yup
              .string()
              .required('O número do telefone é obrigatório.'),
            type: yup.string().required('O tipo do telefone é obrigatório.'),
          })
        ),
        birthDate: yup.string().required('A data de nascimento é obrigatória.'),
        addresses: yup.array().of(
          yup.object().shape({
            state: yup.string().required('O estado é obrigatório.'),
            city: yup.string().required('A cidade é obrigatória.'),
            district: yup.string().required('O bairro é obrigatório.'),
            street: yup.string().required('A rua é obrigatória.'),
            number: yup.string().required('O número é obrigatório.'),
            complement: yup.string().optional(),
          })
        ),
        socialMedias: yup
          .object()
          .shape({
            facebook: yup.string().optional(),
            linkedin: yup.string().optional(),
            twitter: yup.string().optional(),
            instagram: yup.string().optional(),
          })
          .optional(),
        cpf: yup.string().required('O Cpf é obrigatório.'),
        rg: yup.string().required('O Rg é obrigatório.'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (error) {
        const validationErrors = {};

        if (error instanceof yup.ValidationError) {
          error.inner.forEach((currentError) => {
            validationErrors[currentError.path] = currentError.message;
          });
          formRef.current.setErrors(validationErrors);
        }

        return;
      }

      try {
        setSaving(true);
        await apiUpdateUser(id, data);

        router.push('/');
      } catch {
        setSaving(false);
        setError('Erro ao salvar o usuário.');
      }
    },
    [apiUpdateUser, id, router]
  );

  if (error) return <S.Message>{error}</S.Message>;
  if (loading) return <Loading />;

  return (
    <UserForm
      handleSubmit={handleUpdate}
      initialUser={user}
      formRef={formRef}
      loadingSubmit={saving}
    />
  );
};
