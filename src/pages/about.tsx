import Head from "next/head"
import Image from "next/image"
import {
    AboutContainer,
    BioWrapper,
    CareerItemWrapper,
    ExperiencesHeader,
    ExperiencesContainer,
    Main,
    PhotoBioWrapper
} from "../../styles/pages/about"
import profilePhoto from '../assets/zenky.png'
import { dateDifferenceStartEndJob } from "../utils/dateDifferenceStartEndJob"

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

                    <ExperiencesContainer>
                        <ExperiencesHeader>
                            <h2>Professional Background</h2>

                            <a href="/bzenky.pdf" target="_blank" download="Resume - Bruno Zenky G Asano">
                                Download Resume
                            </a>
                        </ExperiencesHeader>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://smtsolucoes.com.br/" target="_blank" rel="noreferrer">SMT</a>
                                <span> · São Paulo - SP</span>
                            </div>
                            <span>
                                oct 2023 - moment • {dateDifferenceStartEndJob('2023, 10, 02', 'moment')}
                            </span>
                            <ul>
                                <li>Active involvement in the <a href="https://www.playbookux.com/" target="_blank" rel="noreferrer">PlaybookUX</a> project;</li>
                                <li>Development of new website features and functionalities, focusing on improving user experience and meeting project-specific requirements through effective implementation of solutions.</li>
                                <li>Ongoing maintenance of existing websites, including applying updates, implementing fixes, and making improvements to ensure optimal functionality and performance.</li>
                            </ul>
                            <span>Stacks: React · JavaScript · Ruby on Rails · Styled Components · GraphQL · Redux</span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                                <span> · Rio do Sul - SC</span>
                            </div>
                            <span>
                                nov 2021 - sep 2023 • {dateDifferenceStartEndJob('2021, 11, 03', '2023, 09, 22')}
                            </span>
                            <ul>
                                <li>Recreated and maintained existing features in React.</li>
                                <li>Actively participated in the development, redesign, and creation of pages based on Figma prototypes.</li>
                                <li>Developed new functionalities and features for websites, collaborating with design and development teams to implement solutions that improve user experience and meet project-specific requirements.</li>
                                <li>Conducted ongoing maintenance of existing websites, including applying updates, fixes, and enhancements to ensure optimal functionality and performance.</li>
                                <li>Handled support tickets, comprehended and promptly resolved user requests accurately.</li>
                            </ul>
                            <span>Stacks: React · TypeScript · JavaScript · JQuery ·  SASS · Twig · PHP</span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Front-end Developer</h3>
                            <div>
                                <a href="https://www.rotaseguros.com.br" target="_blank" rel="noreferrer">Rota Seguros</a>
                                <span> · Belo Horizonte - MG</span>
                            </div>
                            <span>
                                ago 2021 - oct 2021 • {dateDifferenceStartEndJob('2021, 08, 10', '2021, 10, 29')}
                            </span>
                            <ul>
                                <li>Developed websites and landing pages.;</li>
                                <li>Maintained and optimized websites for improved performance;</li>
                                <li>Ensured enhanced usability and user experience across mobile and desktop platforms..</li>
                            </ul>
                            <span>Stacks: CSS · JavaScript · HTML</span>
                        </CareerItemWrapper>
                    </ExperiencesContainer>

                    <ExperiencesContainer>
                        <ExperiencesHeader>
                            <h2>Education Background</h2>
                        </ExperiencesHeader>

                        <CareerItemWrapper>
                            <h3>Technologist - System Analysis and Development</h3>
                            <div>
                                <a href="https://www.unopar.com.br/" target="_blank" rel="noreferrer">UNOPAR</a>
                                <span> · Online degree</span>
                            </div>
                            <span>
                                2021 - 2022
                            </span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>MBA in Controlling and Finance</h3>
                            <div>
                                <a href="https://baraodemaua.br/" target="_blank" rel="noreferrer">Centro Universitário Barão de Mauá</a>
                                <span> · Online degree</span>
                            </div>
                            <span>
                                2018 - 2019
                            </span>
                        </CareerItemWrapper>

                        <CareerItemWrapper>
                            <h3>Bachelor in Accounting</h3>
                            <div>
                                <a href="https://uenp.edu.br/" target="_blank" rel="noreferrer">UENP</a>
                                <span> · Cornélio Procópio - PR</span>
                            </div>
                            <span>
                                2014 - 2017
                            </span>
                        </CareerItemWrapper>
                    </ExperiencesContainer>
                </Main>
            </AboutContainer>
        </>
    )
}
