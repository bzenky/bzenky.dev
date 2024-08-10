import Head from "next/head";
import {
  AboutContainer,
  BioWrapper,
  CareerItemWrapper,
  ExperiencesHeader,
  ExperiencesContainer,
  Main,
} from "../../styles/pages/about";
import { dateDifferenceStartEndJob } from "../utils/dateDifferenceStartEndJob";
import { DownloadSimple, Link } from "phosphor-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Zenky</title>
        <meta
          content="Zenky is a front-end developer, passionate about learning and sharing that knowledge along the way."
          name="description"
        />
        <meta
          content="Zenky is a front-end developer, passionate about learning and sharing that knowledge along the way."
          property="og:description"
        />
      </Head>

      <AboutContainer>
        <h1>About</h1>
        <Main>
          <BioWrapper>
            <h2>Hello there !</h2>
            <p>
              I am a mid-level front-end developer and I develop applications by
              creating engaging and functional interfaces, powered by the latest
              technologies such as JavaScript frameworks: React and Next, as
              well as HTML, CSS, and some back-end programming languages.
            </p>
            <p>
              I have been working in agile environments, using the Scrum
              methodology, collaborating with multidisciplinary teams and also
              working together with other teams. Currently, I am developing
              solutions for an international project that offers a product
              related to quantitative and qualitative research.
            </p>
            <p>
              With experience in consulting firms as well as product-based
              companies, I have skills in problem-solving, teamwork, and
              innovation, acquired through working with different teams and
              projects.
            </p>
          </BioWrapper>

          <ExperiencesContainer>
            <ExperiencesHeader>
              <h2>Professional Background</h2>

              <div>
                <a
                  href="https://www.resume.bzenky.dev"
                  target="_blank"
                  title="Online Resume"
                  rel="noreferrer"
                >
                  <Link width={18} height={18} weight="bold" />
                </a>

                <a
                  href="/bzenky.pdf"
                  target="_blank"
                  download="Resume - Bruno Zenky G Asano"
                  title="Download Resume"
                >
                  <DownloadSimple width={18} height={18} weight="bold" />
                </a>
              </div>
            </ExperiencesHeader>

            <CareerItemWrapper>
              <h3>Front-end Developer</h3>
              <div>
                <a
                  href="https://www.smtcode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SMT Code
                </a>
                <span> · São Paulo - SP</span>
              </div>
              <span>
                oct 2023 - moment •{" "}
                {dateDifferenceStartEndJob("2023, 10, 02", "moment")}
              </span>
              <ul>
                <li>
                  Active involvement in the{" "}
                  <a
                    href="https://www.playbookux.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PlaybookUX
                  </a>{" "}
                  project;
                </li>
                <li>
                  Development of new website features and functionalities,
                  focusing on improving user experience and meeting
                  project-specific requirements through effective implementation
                  of solutions.
                </li>
                <li>
                  Ongoing maintenance of existing websites, including applying
                  updates, implementing fixes, and making improvements to ensure
                  optimal functionality and performance.
                </li>
              </ul>
              <span>
                Stacks: React · TypeScript · JavaScript · Ruby on Rails · Styled
                Components · GraphQL · Redux · Cypress · Node · AWS · Sentry
              </span>
            </CareerItemWrapper>

            <CareerItemWrapper>
              <h3>Front-end Developer</h3>
              <div>
                <a
                  href="https://www.magazord.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Magazord Digital Commerce
                </a>
                <span> · Rio do Sul - SC</span>
              </div>
              <span>
                nov 2021 - sep 2023 •{" "}
                {dateDifferenceStartEndJob("2021, 11, 03", "2023, 09, 22")}
              </span>
              <ul>
                <li>Recreated and maintained existing features in React.</li>
                <li>
                  Actively participated in the development, redesign, and
                  creation of pages based on Figma prototypes.
                </li>
                <li>
                  Developed new functionalities and features for websites,
                  collaborating with design and development teams to implement
                  solutions that improve user experience and meet
                  project-specific requirements.
                </li>
                <li>
                  Conducted ongoing maintenance of existing websites, including
                  applying updates, fixes, and enhancements to ensure optimal
                  functionality and performance.
                </li>
                <li>
                  Handled support tickets, comprehended and promptly resolved
                  user requests accurately.
                </li>
              </ul>
              <span>
                Stacks: React · TypeScript · JavaScript · JQuery · SASS · Twig ·
                PHP
              </span>
            </CareerItemWrapper>

            <CareerItemWrapper>
              <h3>Front-end Developer</h3>
              <div>
                <a
                  href="https://www.rotaseguros.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rota Seguros
                </a>
                <span> · Belo Horizonte - MG</span>
              </div>
              <span>
                ago 2021 - oct 2021 •{" "}
                {dateDifferenceStartEndJob("2021, 08, 10", "2021, 10, 29")}
              </span>
              <ul>
                <li>Developed websites and landing pages.;</li>
                <li>
                  Maintained and optimized websites for improved performance;
                </li>
                <li>
                  Ensured enhanced usability and user experience across mobile
                  and desktop platforms..
                </li>
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
                <a
                  href="https://www.unopar.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  UNOPAR
                </a>
                <span> · Online degree</span>
              </div>
              <span>2021 - 2022</span>
            </CareerItemWrapper>

            <CareerItemWrapper>
              <h3>MBA in Controlling and Finance</h3>
              <div>
                <a
                  href="https://baraodemaua.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centro Universitário Barão de Mauá
                </a>
                <span> · Online degree</span>
              </div>
              <span>2018 - 2019</span>
            </CareerItemWrapper>

            <CareerItemWrapper>
              <h3>Bachelor in Accounting</h3>
              <div>
                <a href="https://uenp.edu.br/" target="_blank" rel="noreferrer">
                  UENP
                </a>
                <span> · Cornélio Procópio - PR</span>
              </div>
              <span>2014 - 2017</span>
            </CareerItemWrapper>
          </ExperiencesContainer>
        </Main>
      </AboutContainer>
    </>
  );
}
