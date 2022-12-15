import Link from "next/link"
import styled from "styled-components"

export const ProjectCardContainer = styled(Link)`
    width: 180px;
    height: 190px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
    text-decoration: none;

    transition: all 0.2s ease-in-out;

    h3 {
        color: #fff;
    }

    p {
        font-size: 0.875rem;
        color: #B2A7B8;
    }

    &:hover {
        background: #3B2A45;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 120px;
    }
`