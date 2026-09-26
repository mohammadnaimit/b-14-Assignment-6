import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
        Page not found
      </p>
      <h1 className="mt-3 text-8xl font-black leading-none text-white sm:text-9xl">
        404
      </h1>
      <p className="mt-5 max-w-md text-gray-400">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-lime-300"
      >
        Browse Workouts
      </Link>
    </section>
  );
}