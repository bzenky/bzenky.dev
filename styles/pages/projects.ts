import styled from "styled-components"

export const ProjectContainer = styled.div`
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 160px);

    h1 {
        font-size: 2.875rem;
        color: #8117c7;
    }

    > p {
        line-height: 1.8;
        color: #B2A7B8;
        font-size: 1rem;
    }
`

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 12px;
    margin-top: 24px;

    @media only screen and (max-width: 768px) {
        gap: 16px;
    }
`