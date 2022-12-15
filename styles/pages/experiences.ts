import styled from "styled-components";

export const ExperienciesContainer = styled.div`
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 160px);

    h1 {
        font-size: 2.875rem;
        color: #8117c7;
    }
`

export const CareerItemWrapper = styled.div`
    margin-top: 24px;
    line-height: 1.5;
    color: #B2A7B8;
    font-size: 1rem;

    h3 {
        color: #FFF;
        font-size: 1.125rem;
    }

    p {
        margin: 8px 0;
    }

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: #FFF;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #3FFCE8;
        }
    }
`