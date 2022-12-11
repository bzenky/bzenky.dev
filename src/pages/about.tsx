import Image from "next/image"
import { AboutContainer, BioWrapper, CareerItemWrapper, Main, PhotoBioWrapper } from "../../styles/pages/about"
import profilePhoto from '../assets/zenky.png'

export default function About() {
    return (
        <AboutContainer>
            <h1>Sobre</h1>
            <Main>
                <PhotoBioWrapper>
                    <Image src={profilePhoto} alt="Zenky's Profile Photo" />

                    <BioWrapper>
                        <p>Olá, eu sou Bruno Zenky, um entusiasta de finanças, exatas e tecnologia. </p>
                        <p>Sou desenvolvedor front-end com maior foco em <em>JavaScript - React/React Native/Next</em>. Atualmente trabalho como <strong>desenvolvedor front-end</strong> na <strong>Magazord</strong>, onde tenho contato com as tecnologias: <em>Twig / PHP / SASS / JavaScript / TypeScript / React</em>.</p>
                        <p>Geralmente estou codando algum projeto pessoal, para acompanhar, de uma olhada no github ou me mande uma mensagem.</p>
                    </BioWrapper>
                </PhotoBioWrapper>

                <h2>Experiências</h2>
                <CareerItemWrapper>
                    <h3>Desenvolvedor Front-end</h3>
                    <div>
                        <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                        <span> · Rio do Sul - SC</span>
                    </div>
                    <span>nov 2021 - momento</span>
                </CareerItemWrapper>

                <CareerItemWrapper>
                    <h3>Desenvolvedor Front-end</h3>
                    <div>
                        <a href="https://www.rotaseguros.com.br" target="_blank" rel="noreferrer">Rota Seguros</a>
                        <span> · Belo Horizonte - MG</span>
                    </div>
                    <span>ago 2021 - out 2021</span>
                </CareerItemWrapper>
            </Main>
        </AboutContainer>
    )
}