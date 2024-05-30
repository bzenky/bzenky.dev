import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 160px);

    h1 {
      font-size: 5rem;
      color: #8117c7;
    }

    h2 {
      margin: 16px 0;
      font-size: 1.5rem;
      color: #8117c7;
    }

    span {
      display: block;
      font-size: 1.125rem;
      color: #B2A7B8;

      a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: #FFF;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #3FFCE8;
        }
      }
    }
`