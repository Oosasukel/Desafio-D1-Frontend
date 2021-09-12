import notFoundAnimation from 'assets/lotties/not-found-ghost.json';
import Button from 'components/Button';
import { useRouter } from 'next/dist/client/router';
import Lottie from 'react-lottie';
import * as S from './styles';

export const PageComponent404 = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.AnimationWrapper>
        <Lottie options={{ animationData: notFoundAnimation }} />
      </S.AnimationWrapper>

      <Button onClick={() => router.push('/')}>Ir para Home</Button>
    </S.Container>
  );
};
