import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: center;
`

export const Nav = styled.nav`
    display: flex;
    gap: 24px;

    a {
        padding: 12px 16px;
        color: #FEF7FF;
        text-decoration: none;
        border-radius: 8px;
        /* text-underline-offset: 8px; */

        transition: all 0.3s ease-in-out;

        &:hover {
            background: #3B2A45;
            /* text-decoration: underline; */
        }
    }
`