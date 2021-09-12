import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const Input = ({ name, label, style, ...rest }: InputProps) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField<HTMLInputElement>({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container style={style} error={!!error}>
      {label && <S.Label>{label}</S.Label>}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};
