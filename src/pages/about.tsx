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

export default function About() {
    return (
        <>
            <Head>
                <title>About | Zenky</title>
                <meta content='Zenky is a front-end developer, passionate about learning and sharing that knowledge along the way.' name="description" />
                <meta content='Zenky is a front-end developer, passionate about learning and sharing that knowledge along the way.' property="og:description" />
            </Head>

            <AboutContainer>
                <h1>About</h1>
                <Main>
                    <PhotoBioWrapper>
                        <Image src={profilePhoto} alt="Zenky's Profile Photo" priority />

                        <BioWrapper>
                            <p>Hello there, I'm Bruno Zenky, a finance, exact and technology enthusiast.</p>
                            <p>I'm a developer focused on JavaScript - React/React Native/Next/Node. I currently work as a front-end developer at <strong><a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord Tecnologia</a></strong>.</p>
                            <p>I keep studying beyond the front-end area to become a more complete professional. Last but not least, I can say that all the focus and desire from the beginning of the journey still lasts every day.
                            </p>
                        </BioWrapper>
                    </PhotoBioWrapper>

                    <ExperienciesContainer>
                        <ExperiencesHeader>
                            <h2>Professional Background</h2>

                            <a href="/bzenky.pdf" target="_blank" download="CV - Bruno Zenky G Asano">
                                Download Resume
                            </a>
                        </ExperiencesHeader>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                                <span> · Rio do Sul - SC</span>
                            </div>
                            <span>nov 2021 - moment</span>
                            <ul>
                                <li>Website maintenance and optimization;</li>
                                <li>Activities related to support;</li>
                                <li>Development/Redesign of pages according to protype (Figma);</li>
                                <li>New features development;</li>
                                <li>Recreation of existing features in React.</li>
                            </ul>
                            <span>Stacks: React · TypeScript · JavaScript · JQuery ·  SASS · Twig</span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://www.rotaseguros.com.br" target="_blank" rel="noreferrer">Rota Seguros</a>
                                <span> · Belo Horizonte - MG</span>
                            </div>
                            <span>ago 2021 - oct 2021</span>
                            <ul>
                                <li>Website maintenance and optimization;</li>
                                <li>Creation of internal systems;</li>
                                <li>Hosting server management;</li>
                                <li>Guarantee of improved usability and user experience on mobile and desktop devices.</li>
                            </ul>
                            <span>Stacks: CSS · JavaScript · HTML</span>
                        </CareerItemWrapper>
                    </ExperienciesContainer>
                </Main>
            </AboutContainer>
        </>
    )
}