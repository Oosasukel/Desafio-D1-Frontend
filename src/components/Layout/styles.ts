import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: auto;
`;

export const Background = styled(SVG)`
  position: fixed;
  right: 0rem;
  bottom: 0rem;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
