import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const AnimationWrapper = styled.div`
  > * {
    min-width: 16rem;
    width: 32vw !important;
    height: auto !important;
  }
`;
