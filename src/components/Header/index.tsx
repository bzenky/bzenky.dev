import Link from "next/link"
import { HeaderContainer, Nav } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <Link href='/'>
                    HOME
                </Link>
                <Link href='/sobre'>
                    SOBRE
                </Link>
                <Link href='/experiencias'>
                    EXPERIÊNCIAS
                </Link>
                <Link href='/projetos'>
                    PROJETOS
                </Link>
            </Nav>
        </HeaderContainer>
    )
}