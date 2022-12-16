import Link from "next/link"
import { useRouter } from "next/router"
import { HeaderContainer, Nav } from "./styles"

export function Header() {
    const router = useRouter()
    const pages = [
        {
            'url': '/',
            'name': 'home',
        },
        {
            'url': '/sobre',
            'name': 'sobre',
        },
        {
            'url': '/experiencias',
            'name': 'experiências',
        },
        {
            'url': '/projetos',
            'name': 'projetos',
        },
    ]

    return (
        <HeaderContainer>
            <Nav>
                {pages.map(page => {
                    return (
                        <Link
                            key={page.name}
                            href={page.url}
                            data-state={router.pathname === page.url ? 'active' : ''}
                        >
                            {page.name.toUpperCase()}
                        </Link>
                    )
                })}
            </Nav>
        </HeaderContainer>
    )
}