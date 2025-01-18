import { Metadata } from "next";
import { Header } from "../../components/header";

export const metadata: Metadata = {
  title: "Projects | Bruno Asano",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

export default function Projects() {
  return (
    <div className="px-6 pb-6">
      <div className="py-6">
        <Header />
      </div>

      <div className="leading-8 font-medium mt-4">
        <h1 className="text-4xl text-violet-500 font-bold font-[family-name:var(--font-spectral)]">Projects</h1>

        <p className="mt-4">
          Some of my favorite personal projects, from course projects where new features and enhancements were implemented, to projects developed from the scratch.
        </p>
      </div>
      
      <div className="flex flex-col gap-2 mt-4 leading-8 font-medium">
        <a 
          href="https://github.com/bzenky/yotei" 
          target="_blank"
          className="group"
        >
          <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300 font-[family-name:var(--font-spectral)] group-hover:text-violet-500 transition-all">
            Yotei
          </h2>
        </a>
        <div className="flex flex-col gap-2">
          <p>
            Yotei started from a desire to have my own custom theme for my VS Code editor. I wanted a theme with more purple tones, and I decided to create my own. The main inspiration came from just a purple and red sky at dawn, and the name Yotei comes from the Yotei-zan, a volcano in Hokkaido, Japan.
          </p>
          <p>
            It is a dark theme with purple and red tones, and it is available on the Visual Studio Code Marketplace. The theme is available for free and can be used by anyone who wants to have a different theme for their editor.
          </p>
          <p>
            This theme is also available for others applications, such as Google Chrome, Firefox, Slack and more. The theme is available on my GitHub repository, and it is open-source, so anyone can contribute to it.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 leading-8 font-medium">
        <a 
          href="https://www.pomopomodoro.com/" 
          target="_blank"
          className="group"
        >
          <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300 font-[family-name:var(--font-spectral)] group-hover:text-red-500 transition-all">
            Pomo-Pomodoro
          </h2>
        </a>

        <div className="flex flex-col gap-2">
          <p>
            Pomo-Pomodoro is a productivity tool that can help you to focus on your tasks and improve your productivity. The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
          </p>
          <p>
            This app was originally created mixing the Pomodoro with youtube lo-fi live streams, as a way to help me focus on my tasks. Now the app is in v2, it was rewritten with the same purpose as this portfolio, to use a new version of the Next.js(14 at time) framework and to improve the codebase.
          </p>
          <p>
            The app is available for free and can be used by anyone who wants to improve their productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
