import { Header } from "../../components/header";
import { dateDifferenceStartEndJob } from "../../utils/date-calc";

export default function About() {
  return (
    <div className="px-6 pb-6">
      <div className="flex flex-col items-center justify-items-center p-6 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </div>

      <div className="leading-8">
        <h1 className="text-4xl text-violet-500 font-bold mt-4">About</h1>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300">Hello there !</h2>
        <div className="flex flex-col gap-2">
          <p>
            I am a software developer based in Brazil with over three years of experience building dynamic,
            user-friendly interfaces using modern technologies such as React, HTML, and CSS,
            complemented by some back-end programming skills, such as Node and Ruby on Rails.
          </p>
          <p>
            I thrive in agile environments, following Scrum methodologies, and enjoy collaborating with
            multidisciplinary teams. Currently, I’m contributing to an international project focused
            on delivering innovative solutions for quantitative and qualitative research.
          </p>
          <p>
            With experience in both consulting firms and product-based companies,
            I bring strong problem-solving skills, teamwork, and a passion for innovation,
            shaped by diverse projects and team collaborations.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <h2 className="text-violet-500 font-bold text-xl">Professional Background</h2>

        <a
          href="/bzenky.pdf"
          target="_blank"
          download="Resume - Bruno Zenky G Asano"
          title="Download Resume"
          className="w-42 h-42 flex items-center justify-center bg-violet-500 text-white rounded-md shadow-md hover:bg-violet-600 active:bg-violet-700 p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
      </div>

      <div className="leading-8">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">Front-end Developer</h3>
        <div>
          <a
            href="https://www.smtcode.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            SMT Code
          </a>
          <span> · São Paulo - SP</span>
        </div>
        <span>
          oct 2023 - moment •{" "}
          {dateDifferenceStartEndJob("2023, 10, 02", "moment")}
        </span>
        <ul className="list-disc">
          <li>
            Active involvement in the{" "}
            <a
              href="https://www.playbookux.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
            >
              PlaybookUX
            </a>{" "}
            project.
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
        <span className="mt-1">
          Stacks: React · TypeScript · JavaScript · Ruby on Rails · Styled
          Components · GraphQL · Redux · Cypress · Node · Nest · AWS · Sentry
        </span>
      </div>

      <div className="leading-8">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">Front-end Developer</h3>
        <div>
          <a
            href="https://www.magazord.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            Magazord Digital Commerce
          </a>
          <span> · Rio do Sul - SC</span>
        </div>
        <span>
          nov 2021 - sep 2023 •{" "}
          {dateDifferenceStartEndJob("2021, 11, 03", "2023, 09, 22")}
        </span>
        <ul className="list-disc">
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
        <span className="mt-1">
          Stacks: React · TypeScript · JavaScript · JQuery · SASS · Twig ·
          PHP
        </span>
      </div>

      <div className="leading-8">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">Front-end Developer</h3>
        <div>
          <a
            href="https://www.rotaseguros.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            Rota Seguros
          </a>
          <span> · Belo Horizonte - MG</span>
        </div>
        <span>
          ago 2021 - oct 2021 •{" "}
          {dateDifferenceStartEndJob("2021, 08, 10", "2021, 10, 29")}
        </span>
        <ul className="list-disc">
          <li>Developed websites and landing pages.;</li>
          <li>
            Maintained and optimized websites for improved performance;
          </li>
          <li>
            Ensured enhanced usability and user experience across mobile
            and desktop platforms..
          </li>
        </ul>
        <span className="mt-1">
          Stacks: HTML · CSS · JavaScript
        </span>
      </div>
    </div>
  );
}
