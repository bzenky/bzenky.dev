import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold text-sky-50">404 | Page not found</h1>
      <p className="mt-4 text-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
      >
        Go back to home
      </Link>
    </div>
  );
}
