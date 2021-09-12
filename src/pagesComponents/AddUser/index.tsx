import { FormHandles } from '@unform/core';
import { UserForm } from 'components/UserForm';
import useApi from 'hooks/useApi';
import { useRouter } from 'next/dist/client/router';
import {
  useCallback, useMemo,
  useRef,
  useState
} from 'react';
import { UserWithoutId } from 'typings/User';
import * as yup from 'yup';

export const AddUser = () => {
  const router = useRouter();
  const { apiCreateUser } = useApi();
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const newUser = useMemo<UserWithoutId>(
    () => ({
      name: '',
      birthDate: new Date().toISOString().substring(0, 10),
      cpf: '',
      rg: '',
      phones: [
        {
          number: '',
          type: 'RESIDENTIAL',
        },
      ],
      addresses: [
        {
          city: '',
          district: '',
          number: '',
          state: '',
          complement: '',
        },
      ],
      socialMedias: {
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
      },
    }),
    []
  );

  const handleCreate = useCallback(
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
        await apiCreateUser(data);

        router.push('/');
      } catch {
        setSaving(false);
        setError('Erro ao salvar o usuário.');
      }
    },
    [apiCreateUser, router]
  );

  if (error) return <h1>{error}</h1>;

  return (
    <UserForm
      handleSubmit={handleCreate}
      initialUser={newUser}
      formRef={formRef}
      loadingSubmit={saving}
    />
  );
};
