import {
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    YoutubeLogo
} from "phosphor-react"
import { FooterContainer, Nav } from "./styles"

export function Footer() {
    return (
        <FooterContainer>
            <Nav>
                <a href="https://www.linkedin.com/in/bzenky/" target="_blank" rel="noreferrer">
                    <span>linkedin</span>
                    <LinkedinLogo size={24} color="#FFF" />
                </a>
                <a href="https://www.github.com/bzenky" target="_blank" rel="noreferrer">
                    <span>github</span>
                    <GithubLogo size={24} color="#FFF" />
                </a>
                <a href="https://www.youtube.com/@_zenky" target="_blank" rel="noreferrer">
                    <span>youtube</span>
                    <YoutubeLogo size={24} color="#FFF" />
                </a>
                <a href="https://www.instagram.com/bzenky" target="_blank" rel="noreferrer">
                    <span>instagram</span>
                    <InstagramLogo size={24} color="#FFF" />
                </a>
            </Nav>
        </FooterContainer>
    )
}