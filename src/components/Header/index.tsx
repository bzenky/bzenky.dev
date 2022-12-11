import Link from "next/link"
import { HeaderContainer, Nav } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <Link href='/'>
                    HOME
                </Link>
                <Link href='/about'>
                    SOBRE
                </Link>
                <Link href='/projects'>
                    PROJETOS
                </Link>
            </Nav>
        </HeaderContainer>
    )
}