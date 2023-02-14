import Head from "next/head"
import Image from "next/image"
import {
    AboutContainer,
    BioWrapper,
    CareerItemWrapper,
    ExperiencesHeader,
    ExperienciesContainer,
    Main,
    PhotoBioWrapper
} from "../../styles/pages/about"
import profilePhoto from '../assets/zenky.png'

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre | Zenky</title>
                <meta content='Zenky é um desenvolvedor front-end, apaixonado por aprender e compartilhar esse conhecimento durante a jornada.' name="description" />
                <meta content='Zenky é um desenvolvedor front-end, apaixonado por aprender e compartilhar esse conhecimento durante a jornada.' property="og:description" />
            </Head>

            <AboutContainer>
                <h1>Sobre</h1>
                <Main>
                    <PhotoBioWrapper>
                        <Image src={profilePhoto} alt="Zenky's Profile Photo" priority />

                        <BioWrapper>
                            <p>Olá, eu sou Bruno Zenky, um entusiasta de finanças, exatas e tecnologia.</p>
                            <p>Inicialmente com formação em Ciências Contábeis e com experiência na área de Recursos Humanos, no meio da pandemia despertou um desejo antigo de poder trabalhar com e estudar tecnologia.</p>
                            <p>Após muito estudo tive a oportunidade de fazer a transição de carreira como Desenvolvedor Front-end, e desde então os desafios e estudos nunca pararam.</p>
                        </BioWrapper>
                    </PhotoBioWrapper>

                    <BioWrapper>
                        <p>Sou desenvolvedor com foco em <span>JavaScript - React/React Native/Next/Node</span>. Atualmente trabalho como <strong>desenvolvedor front-end</strong> na <strong><a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord Tecnologia</a></strong>.</p>
                        <p>Os estudos continuam além da área de front-end para me tornar um profissional mais completo. Por último mas não menos importante, posso afirmar que todo o foco e vontade do início ainda perdura todos os dias. </p>
                    </BioWrapper>

                    <ExperienciesContainer>
                        <ExperiencesHeader>
                            <h2>Experiências</h2>

                            <a href="/bzenky.pdf" target="_blank" download="CV - Bruno Zenky G Asano.pdf">
                                Baixar CV
                            </a>
                        </ExperiencesHeader>

                        <CareerItemWrapper>
                            <h3>Desenvolvedor Front-end</h3>
                            <div>
                                <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                                <span> · Rio do Sul - SC</span>
                            </div>
                            <span>nov 2021 - momento</span>
                            <p>Atividades de suporte/correção, desenvolvimento de features novas, recriação de features existentes no dashboard para React.</p>
                            <span>Stacks: React · TypeScript · JavaScript · JQuery ·  SASS · Twig</span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Desenvolvedor Front-end</h3>
                            <div>
                                <a href="https://www.rotaseguros.com.br" target="_blank" rel="noreferrer">Rota Seguros</a>
                                <span> · Belo Horizonte - MG</span>
                            </div>
                            <span>ago 2021 - out 2021</span>
                            <p>Atualizações nos sites, criação de novas páginas/landing pages, criação de componentes.</p>
                            <span>Stacks: CSS · JavaScript · HTML</span>
                        </CareerItemWrapper>
                    </ExperienciesContainer>
                </Main>
            </AboutContainer>
        </>
    )
}