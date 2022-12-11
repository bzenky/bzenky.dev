import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 8px;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 12px 8px;
        color: #B2A7B8;
        text-decoration: none;
        font-size: 1rem;
        
        transition: color 0.3s ease-in-out;

        & svg {
            opacity: 0;

            transition: opacity 0.2s ease-in-out;
        }

        &:hover {
            color: #FFFFFF;

            svg {
                opacity: 1;
            }
        }

        @media only screen and (max-width: 425px) {
            & span {
                display: none;
            }

            & svg {
                opacity: 1;
                width: 32px;
                height: 32px;
            }
        }
    }
`