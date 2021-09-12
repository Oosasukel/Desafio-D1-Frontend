import { useField } from '@unform/core';
import { Select } from 'components/Select';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Props } from 'react-select';
import { CustomSelect } from './styles';

interface SelectUnformProps extends Props {
  name: string;
  defaultOptionValue?: string;
}

export const SelectUnform = ({
  name,
  options,
  defaultOptionValue,
  ...rest
}: SelectUnformProps) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const defaultOption = useMemo(
    () =>
      options.find((op) =>
        defaultOptionValue
          ? op.value === defaultOptionValue
          : op.value === defaultValue
      ),
    [defaultOptionValue, defaultValue, options]
  );
  const [selected, setSelected] = useState(defaultOption);
  const selectedRef = useRef(null);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  useEffect(() => {
    registerField<typeof defaultOption>({
      name: fieldName,
      ref: selectedRef,
      getValue: (ref) => {
        return ref.current?.value;
      },
      setValue: (_ref, value) => {
        setSelected(value);
      },
      clearValue: (_ref) => {
        setSelected(undefined);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Select
      onChange={setSelected}
      options={options}
      defaultValue={
        defaultOption as {
          label: string;
          value: string;
        }
      }
      {...rest}
    />
  );
};
