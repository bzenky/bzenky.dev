import styled from "styled-components"

export const AboutContainer = styled.div`
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 160px);

    h1 {
        font-size: 2.875rem;
        color: #8117c7;
    }
`

export const Main = styled.main`
    > h2 {
        margin-top: 24px;
        color: #FFF;
        font-size: 1.75rem;
    }
`

export const BioWrapper = styled.div`
    line-height: 1.8;

    h2 {
        color: #C1B9C6;
    }

    p {
        color: #B2A7B8;

        & + p {
            margin-top: 8px;
        }
    }    

    @media only screen and (max-width: 768px) {
        p {
            margin-top: 16px;
        }
    }
`

export const ExperiencesContainer = styled.div`
    max-width: 800px;
    margin: 40px auto 12px;    
`

export const ExperiencesHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        font-size: 1.5rem;
        color: #8117c7;
    }

    > a {
        padding: 10px 12px;
        text-decoration: none;
        background: white;
        border-radius: 4px;
        color: #FFF;
        background: #8117c7;
        font-size: 0.875rem;
        transition: background 0.2s ease-in-out;

        &:hover {
            background: #6117c7;
        }

        &:active {
            background: #4f12a3;
        }
    }
`

export const CareerItemWrapper = styled.div`
    margin-top: 32px;
    line-height: 1.5;
    color: #B2A7B8;
    font-size: 1rem;

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: #FFF;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #3FFCE8;
        }
    }

    &:last-child {
        padding-bottom: 32px;
    }

    > h3 {
        color: #FFF;
        font-size: 1.125rem;
    }

    > div {
        line-height: 2;
    }

    > ul {
        margin: 12px 0;
        line-height: 1.7;
    }
`