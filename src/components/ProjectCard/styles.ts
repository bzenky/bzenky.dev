import Link from "next/link"
import styled from "styled-components"

export const ProjectCardContainer = styled(Link)`
    width: 180px;
    height: 190px;
    padding: 16px;
    border-radius: 8px;
    text-decoration: none;

    transition: background 0.2s ease-in-out;

    h3 {
        color: #fff;
    }

    p {
        color: #B2A7B8;
    }

    &:hover {
        background: #3B2A45;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 120px;
    }
`