import { Metadata } from "next";
import { Header } from "../../components/header";
import { Education } from "./_components/education";
import { Experiences } from "./_components/experiences";

export const metadata: Metadata = {
  title: "About | Bruno Asano",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

export default function About() {
  return (
    <div className="px-6 pb-6">
      <div className="flex flex-col items-center justify-items-center p-6">
        <Header />
      </div>

      <div className="leading-8 font-medium">
        <h1 className="text-4xl text-violet-500 font-bold mt-4 font-[family-name:var(--font-spectral)]">About</h1>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300 font-[family-name:var(--font-spectral)]">Hello there !</h2>
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

      <Experiences />
      <Education />
    </div>
  );
}
