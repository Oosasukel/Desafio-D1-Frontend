import styled from "styled-components";


export const AnimationWrapper = styled.div`
> * {
  width: 40vw !important;
  height: auto !important;

  path {
    fill: ${({theme}) => theme.colors.secondary};
  }
}
`