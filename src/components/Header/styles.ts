import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 10px 0;
`

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
    overflow: auto;

    a {
        padding: 12px 16px;
        color: #B2A7B8;
        text-decoration: none;
        border-radius: 8px;
        font-size: 0.875rem;
        /* text-underline-offset: 8px; */

        transition: all 0.3s ease-in-out;

        &:hover {
            background: #3B2A45;
            color: #FFFFFF;
            /* text-decoration: underline; */
        }
    }
`