import { Props } from 'react-select';
import { CustomSelect } from './styles';

export const Select = (props: Props) => (
  <CustomSelect classNamePrefix='react-select' {...(props as any)} />
);
