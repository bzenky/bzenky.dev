import { Metadata } from "next";
import { Header } from "../../components/header";

export const metadata: Metadata = {
  title: "Projects | Bruno Asano",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

export default function Projects() {
  return (
    <div className="px-6">
      <div className="items-center justify-items-center min-h-screen p-6 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <h1>wip</h1>
      </div>
    </div>
  );
}
