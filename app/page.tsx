import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b border-foreground/10">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5"
        >
          <Link href="/" className="font-semibold">
            Son Phan
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section
          aria-labelledby="intro-heading"
          className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-6 py-20"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
            Portfolio foundation
          </p>
          <h1
            id="intro-heading"
            className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Software engineer building accessible, performant web experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            This first step establishes the production-ready Next.js foundation.
            Portfolio sections, case studies, and visual polish will be added in
            focused commits.
          </p>
        </section>
        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-t border-foreground/10 px-6 py-16"
        >
          <div className="mx-auto w-full max-w-6xl">
            <h2 id="work-heading" className="text-2xl font-semibold">
              Selected work
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/70">
              Project cards will be introduced after the design system and page
              structure are reviewed.
            </p>
          </div>
        </section>
      </main>
      <footer id="contact" className="border-t border-foreground/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Son Phan. All rights reserved.</p>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </div>
      </footer>
    </>
  );
}
