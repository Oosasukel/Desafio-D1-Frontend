import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button,
  textarea {
    font: ${({ theme }) => theme.fontWeights.normal} 16px 'Nunito', sans-serif;
  }

  html,
  body,
  body > div:first-child {
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }
`;
