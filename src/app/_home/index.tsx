import { Footer } from "@/components/footer";
import { Header } from "../../components/header";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col px-6">
      <div className="flex flex-col items-center justify-items-center p-6 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </div>

      <div className="flex flex-col flex-1 h-full justify-center px-22">
        <h1 className="text-4xl text-violet-500 font-bold">Bruno Zenky Guimarães Asano</h1>
        <p className="text-lg mt-8 mb-4 text-slate-300">Software Developer</p>
        <p className="text-lg">Coding ideas and sharing knowledge</p>
      </div>

      <div className="flex flex-col items-center justify-items-center p-6 font-[family-name:var(--font-geist-sans)]">
        <Footer />
      </div>
    </div>
  );
}
