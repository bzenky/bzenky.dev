import Link from "next/link";
import { HeaderContainer, Nav } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <Link href='/'>
                    HOME
                </Link>
                <Link href='/about'>
                    ABOUT
                </Link>
                <Link href='/projects'>
                    PROJECTS
                </Link>
            </Nav>
        </HeaderContainer>
    )
}