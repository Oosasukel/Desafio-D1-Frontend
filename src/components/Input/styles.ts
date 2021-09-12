import styled, { css } from 'styled-components';

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input {
    padding: 8px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.title};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.title};
    outline: none;
  }

  input[type='date'] {
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  ${({ error }) => {
    if (error) {
      return css`
        input {
          border: 2px solid ${({ theme }) => theme.colors.danger};
        }

        ${Label} {
          color: ${({ theme }) => theme.colors.danger};
        }
      `;
    }
  }}
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Error = styled.span`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
