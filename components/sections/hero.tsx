import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {siteConfig.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
          >
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {siteConfig.hero.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.hero.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 hover:no-underline"
            >
              {siteConfig.hero.primaryCta.label}
            </a>
            <a
              href={siteConfig.hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-surface hover:no-underline"
            >
              {siteConfig.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside
          aria-label="Portfolio summary"
          className="rounded-lg border border-border bg-surface p-6 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="text-sm text-muted-foreground">Current focus</p>
              <p className="mt-1 font-medium">{siteConfig.availability}</p>
            </div>
            <span
              className="h-3 w-3 rounded-full bg-accent"
              aria-hidden="true"
            />
          </div>
          <dl className="mt-6 grid gap-5">
            {siteConfig.metrics.map((metric) => (
              <div
                key={metric.label}
                className="grid grid-cols-[5rem_1fr] items-baseline gap-4"
              >
                <dt className="text-2xl font-semibold text-foreground">
                  {metric.value}
                </dt>
                <dd className="text-sm leading-6 text-muted-foreground">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
