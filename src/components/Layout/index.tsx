import { ReactNode } from 'react';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Background src='/icons/trees.svg' />

      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
