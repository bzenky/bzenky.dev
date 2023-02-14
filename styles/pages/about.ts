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

export const PhotoBioWrapper = styled.div`
    display: flex;
    gap: 24px;

    img {
        max-width: 326px;
        border-radius: 8px;
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const BioWrapper = styled.div`
    line-height: 1.8;

    p {
        margin-top: 8px;
        color: #B2A7B8;

        strong,
        span,
        a {
            color: #FFF;
        }

        a:hover {
            color: #3FFCE8;
        }
    }    

    @media only screen and (max-width: 768px) {
        p {
            margin-top: 16px;
        }
    }
`

export const ExperienciesContainer = styled.div`
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
    }
`

export const CareerItemWrapper = styled.div`
    margin-top: 32px;
    line-height: 1.5;
    color: #B2A7B8;
    font-size: 1rem;

    &:last-child {
        padding-bottom: 32px;
    }

    > h3 {
        color: #FFF;
        font-size: 1.125rem;
    }

    > div {
        line-height: 2;

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

    > p {
        margin: 8px 0;
    }
`