import Lottie from 'lottie-react'
import styled from "styled-components"

export const ProjectCardContainer = styled.a`
    width: 180px;
    height: 220px;
    padding: 16px 12px;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
    text-decoration: none;
    
    transition: all 0.2s ease-in-out;
    
    p {
        line-height: 1.7;
        font-size: 0.875rem;
        color: #B2A7B8;
    }

    &:hover {
        background: #3B2A45;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 140px;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    height: 54px;
    margin-bottom: 12px;

    h3 {
        font-size: 1.125rem;
        color: #fff;
    }
`

export const IconAnimation = styled(Lottie)`
    width: 40px;
    height: 40px;

    & > svg {
        width: 40px;
        height: 40px;
    }
`