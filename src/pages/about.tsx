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
                        <Image src={profilePhoto} alt="Zenky's Profile Photo" priority width={326} height={326} />

                        <BioWrapper>
                            <p>Hello there! I am a passionate Front-End Developer with 2+ years of experience in creating engaging and functional interfaces, driven by the latest technologies. Also a finance, exacts and technology enthusiast.</p>
                            <p>In addition to my technical skills, I have a keen eye for detail and a passion for intuitive design. I&apos;m always seeking ways to enhance the user interface and improve how users interact with the products I develop, with a special focus on applying React and Next.js best practices.</p>
                        </BioWrapper>
                    </PhotoBioWrapper>

                    <ExperienciesContainer>
                        <ExperiencesHeader>
                            <h2>Professional Background</h2>

                            <a href="/bzenky.pdf" target="_blank" download="Resume - Bruno Zenky G Asano">
                                Download Resume
                            </a>
                        </ExperiencesHeader>

                        <CareerItemWrapper>
                            <h3>Developer</h3>
                            <div>
                                <a href="https://smtsolucoes.com.br/" target="_blank" rel="noreferrer">SMT</a>
                                <span> · Rio do Sul - SC</span>
                            </div>
                            <span>oct 2023 - moment</span>
                            <ul>
                                <li>Participation in the <a href="https://www.playbookux.com/" target="_blank" rel="noreferrer">PlaybookUX</a> project;</li>
                                <li>Continuous maintenance of existing websites, applying updates, fixes and improvements to ensure optimal functionality and performance;</li>
                            </ul>
                            <span>Stacks: React · JavaScript · Ruby on Rails · SASS</span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                                <span> · Rio do Sul - SC</span>
                            </div>
                            <span>nov 2021 - sep 2023</span>
                            <ul>
                                <li>Recreation and maintenance of existing features for React.</li>
                                <li>Active participation in the development, redesign, and creation of pages based on prototypes (Figma).</li>
                                <li>Development of new functionalities and features for the websites, involving collaboration with design and development teams to implement solutions </li>that enhance the user experience and meet project-specific requirements.
                                <li>Ongoing maintenance of existing websites, applying updates, fixes, and enhancements to ensure optimal functionality and performance.</li>
                                <li>Activities related to support tickets, comprehending and resolving user requests accurately and promptly.</li>
                            </ul>
                            <span>Stacks: React · TypeScript · JavaScript · JQuery ·  SASS · Twig · PHP</span>
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