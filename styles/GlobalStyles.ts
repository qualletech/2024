import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    position: relative;
    color: ${({ theme }) => theme.colors.primaryLight};
   -webkit-tap-highlight-color: transparent;
  }

  h1 {
    font-family: 'Comfortaa', sans-serif;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5;
    margin: 0;
    font-size: 3rem;
    @media screen and (max-width: 769px) and (orientation: portrait) {
      font-size: 2.5rem;
      width: 80%;
    }
  }

  h2 {
  font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    font-size: 2.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryLight};
    font-weight: 400;
    @media screen and (max-width: 769px) and (orientation: portrait) {
      font-size: 2rem;
    }
  }

  h3 {
  font-family: 'Josefin Sans', sans-serif;
  color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 2rem;
    margin: 0;
    line-height: 1.5;
    font-weight: 400;
    @media screen and (max-width: 769px) and (orientation: portrait) {
      font-size: 1.8rem;
    }
  }

    ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    display: grid;
    grid-gap: 0.2rem;
  }


  ::-webkit-scrollbar {
    box-sizing: content-box;
    width: 1rem;
    padding: 1rem;
  }



  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `${theme.colors.secondaryDark}`};
    opacity: 0.5;
    border-radius: 1rem;
  }
`

export default GlobalStyles
