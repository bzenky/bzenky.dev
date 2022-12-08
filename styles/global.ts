import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
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