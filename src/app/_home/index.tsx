import { Header } from "../_components/header";

export function HomePage() {
  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex flex-col items-center justify-items-center sm:p-6 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </div>
      
      <div className="flex flex-col flex-1 h-full justify-center px-30">
        <h1 className="text-4xl text-violet-500">Bruno Zenky Guimarães Asano</h1>
        <p className="text-lg mt-8 mb-4">Software Developer</p>
        <p className="text-lg text-slate-300">Coding ideas and sharing knowledge</p>
      </div>
    </div>

  );
}
