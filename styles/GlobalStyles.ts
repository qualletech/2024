import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    position: relative;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  h1 {
    font-family: 'Comfortaa', sans-serif;
    text-transform: uppercase;
    margin: 0;
    font-size: 3rem;
  }

  h2 {

    margin: 0;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
    font-weight: 400;
  }

  h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    position: absolute;
    right: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    opacity: 0.2;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.interactionDark};
    opacity: 0.5;
    border-radius: 8px;
  }
`

export default GlobalStyles
