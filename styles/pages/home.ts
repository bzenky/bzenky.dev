import styled from "styled-components"

export const HomeContainer = styled.div`
    max-width: 800px;
    height: calc(100vh - 160px);
    margin: 0 auto;

    h1 {
        font-size: 2.875rem;
        color: #8117c7;
    }

    p {
        color: #FFFFFF;
        font-size: 1.125rem;
        margin: 16px 0;
        line-height: 1.7;

        span {
            display: block;
            margin-top: 16px;
            color: #B2A7B8;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
    height: 100%;
`