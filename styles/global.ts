import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scrollbar-width: auto;
      scrollbar-color: #8117c7 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #211925;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 8px;
  } 
    
  body {
      min-height: 100vh;
      background-color: #211925;
  }

  body {
    font-family: 'Libre Baskerville', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Anek Telugu', sans-serif;
  }

  @media only screen and (max-width: 425px) {
    html {
        font-size: 14px;
    }
  }
`