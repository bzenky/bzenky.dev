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
    h2 {
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

        strong {
            color: #FFF;
        }
    }    

    @media only screen and (max-width: 768px) {
        p {
            margin-top: 16px;
        }
    }
`