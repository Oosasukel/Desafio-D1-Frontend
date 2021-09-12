import { FormHandles } from '@unform/core';
import { Input } from 'components/Input';
import { SelectUnform } from 'components/SelectUnform';
import { useRouter } from 'next/dist/client/router';
import {
  Fragment,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import { UserWithoutId } from 'typings/User';
import * as S from './styles';

interface UserFormProps {
  initialUser: UserWithoutId;
  loadingSubmit?: boolean;
  handleSubmit: (data: UserWithoutId) => void;
  formRef: MutableRefObject<FormHandles>;
}

export const UserForm = ({
  initialUser,
  loadingSubmit,
  handleSubmit,
  formRef,
}: UserFormProps) => {
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const countRef = useRef(user.phones.length + 1);

  const handleDeletePhone = useCallback((id: number) => {
    setUser((previous) => {
      const newUser = { ...previous, phones: [...previous.phones] };
      newUser.phones = newUser.phones.filter((phone) => phone.id !== id);

      return newUser;
    });
  }, []);

  const handleAddNewPhone = useCallback(() => {
    setUser((previous) => {
      const newUser = { ...previous, phones: [...previous.phones] };
      newUser.phones.push({
        number: '',
        type: 'RESIDENTIAL',
        id: countRef.current++,
      });

      return newUser;
    });
  }, []);

  const handleDeleteAddress = useCallback((id: number) => {
    setUser((previous) => {
      const newUser = { ...previous, addresses: [...previous.addresses] };
      newUser.addresses = newUser.addresses.filter(
        (address) => address.id !== id
      );

      return newUser;
    });
  }, []);

  const handleAddNewAddress = useCallback(() => {
    setUser((previous) => {
      const newUser = { ...previous, addresses: [...previous.addresses] };
      newUser.addresses.push({
        city: '',
        district: '',
        number: '',
        state: '',
        complement: '',
        id: countRef.current++,
      });

      return newUser;
    });
  }, []);

  return (
    <S.Container>
      <S.HomeIcon src='/icons/home.svg' onClick={() => router.push('/')} />

      <S.Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
        <S.FormContent>
          <S.FormGroup>
            <S.SectionTitle>Dados pessoais</S.SectionTitle>
            <Input label='Nome *' name='name' placeholder='Nome' />
            <Input
              label='Data de Nascimento *'
              name='birthDate'
              type='date'
              placeholder='Birthdate'
            />
            <Input label='Cpf *' name='cpf' placeholder='Cpf' />
            <Input label='Rg *' name='rg' placeholder='Rg' />
          </S.FormGroup>

          <S.FormGroup>
            <S.SectionTitle>Contato</S.SectionTitle>
            {user.phones.map((phone, index) => (
              <Fragment key={phone.id}>
                <Input
                  label='Telefone *'
                  name={`phones[${index}].number`}
                  placeholder='Telefone'
                />
                <S.SelectContainer>
                  <SelectUnform
                    styles={{
                      container: () => ({
                        marginTop: '0.2rem',
                      }),
                    }}
                    defaultOptionValue={phone.type}
                    name={`phones[${index}].type`}
                    options={[
                      { label: 'Residencial ', value: 'RESIDENTIAL' },
                      { label: 'Comercial', value: 'COMMERCIAL' },
                    ]}
                  />
                  {user.phones.length > 1 && (
                    <S.TrashIcon
                      src='/icons/trash.svg'
                      onClick={() => handleDeletePhone(phone.id)}
                    />
                  )}
                </S.SelectContainer>
              </Fragment>
            ))}
            <S.AddContainer>
              <S.AddIcon src='/icons/plus.svg' onClick={handleAddNewPhone} />
            </S.AddContainer>
          </S.FormGroup>

          <S.FormGroup>
            <S.SectionTitle>Endereço</S.SectionTitle>

            {user.addresses.map((address, index) => (
              <S.AddressContainer key={address.id}>
                <Input
                  label='Estado *'
                  name={`addresses[${index}].state`}
                  placeholder='Estado'
                />
                <Input
                  label='Cidade *'
                  name={`addresses[${index}].city`}
                  placeholder='Cidade'
                />
                <Input
                  label='Bairro *'
                  name={`addresses[${index}].district`}
                  placeholder='Bairro'
                />
                <Input
                  label='Rua *'
                  name={`addresses[${index}].street`}
                  placeholder='Rua'
                />
                <Input
                  label='Número *'
                  name={`addresses[${index}].number`}
                  placeholder='Número'
                />
                <S.ComplementContainer>
                  <Input
                    label='Complemento'
                    name={`addresses[${index}].complement`}
                    placeholder='Complemento'
                  />
                  {user.addresses.length > 1 && (
                    <S.TrashIcon
                      src='/icons/trash.svg'
                      onClick={() => handleDeleteAddress(address.id)}
                    />
                  )}
                </S.ComplementContainer>
              </S.AddressContainer>
            ))}
            <S.AddContainer>
              <S.AddIcon src='/icons/plus.svg' onClick={handleAddNewAddress} />
            </S.AddContainer>
          </S.FormGroup>

          <S.FormGroup>
            <S.SectionTitle>Redes Sociais</S.SectionTitle>
            <Input
              label='Facebook'
              name='socialMedias.facebook'
              placeholder='Facebook'
            />
            <Input
              label='Linkedin'
              name='socialMedias.linkedin'
              placeholder='Linkedin'
            />
            <Input
              label='Twitter'
              name='socialMedias.twitter'
              placeholder='Twitter'
            />
            <Input
              label='Instagram'
              name='socialMedias.instagram'
              placeholder='Instagram'
            />
          </S.FormGroup>

          <S.Button loading={loadingSubmit} disabled={loadingSubmit}>
            Salvar
          </S.Button>
        </S.FormContent>
      </S.Form>
    </S.Container>
  );
};
