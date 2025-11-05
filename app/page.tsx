export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Meeply
          </h1>
          <p className="max-w-lg text-xl text-zinc-600 dark:text-zinc-400">
            Welcome to Meeply. Your simple landing page.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300">
            Get Started
          </button>
          <button className="rounded-lg border border-zinc-300 bg-transparent px-6 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
