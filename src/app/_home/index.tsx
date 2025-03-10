import { Footer } from "@/components/footer";
import { Header } from "../../components/header";
import { TypewriterText } from "./TypewriterText";

const roles = [
  "Software Developer",
  "Frontend Developer",
  "Fullstack Developer",
  "Web Developer",
  "Javascript Developer",
]

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col px-6">
      <div className="py-6">
        <Header />
      </div>

      <div className="flex flex-col flex-1 h-full justify-center px-22">
        <h1 className="text-4xl text-violet-500 font-bold font-[family-name:var(--font-spectral-sc)]">Bruno Zenky Guimarães Asano</h1>
        <TypewriterText text={roles} />
        <p className="text-lg font-medium">Coding ideas and sharing knowledge</p>
      </div>

      <div className="flex flex-col items-center justify-items-center p-6">
        <Footer />
      </div>
    </div>
  );
}
