import * as S from './styles';

interface ButtonLoadingProps {
  variant: 'primary' | 'secondary';
}

const ButtonLoading = ({ variant }: ButtonLoadingProps) => {
  return (
    <S.Ring variant={variant}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Ring>
  );
};

export default ButtonLoading;
