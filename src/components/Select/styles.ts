import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  width: 9rem;
  margin-right: 1rem;

  .react-select__control {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.title};
    border-width: 2px;
  }
  .react-select__control--is-focused {
    box-shadow: initial;
    border-color: ${({ theme }) => theme.colors.title};
  }

  .react-select__value-container {
    .react-select__single-value {
      color: ${({ theme }) => theme.colors.title};
    }
  }

  .react-select__menu {
    top: initial;
    width: initial;

    .react-select__menu-list {
      .react-select__option--is-selected {
        background: ${({ theme }) => theme.colors.secondary};
      }
      .react-select__option--is-focused {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
