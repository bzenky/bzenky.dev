import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 12px 0;
`

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
    overflow: auto;

    a {
        position: relative;
        padding: 12px 16px;
        color: #B2A7B8;
        text-decoration: none;
        border-radius: 8px;
        font-size: 0.875rem;

        &::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            left: 50%;
            bottom: 4px;
            opacity: 0;
            transform: translateX(-50%);
            background-color: #FFF;
        }

        &[data-state='active'] {
            color: #FFF;
        }

        transition: all 0.3s ease-in-out;

        @media only screen and (min-width: 768px) {
            &:hover {
                background: #3B2A45;
                color: #FFFFFF;
            }

            &[data-state='active']::after {
                opacity: 1;

                transition: all 0.3s ease-in-out;
            }
        }
    }
`