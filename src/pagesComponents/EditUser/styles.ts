import styled from 'styled-components';

export const Message = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-top: 3rem;
`;
