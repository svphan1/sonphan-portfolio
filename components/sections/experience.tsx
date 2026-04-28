import { siteConfig } from "@/lib/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-border bg-surface px-6 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {siteConfig.experience.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="text-3xl font-semibold leading-tight sm:text-4xl"
          >
            {siteConfig.experience.title}
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            {siteConfig.experience.summary}
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {siteConfig.experience.roles.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {role.period} / {role.location}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{role.title}</h3>
                  <p className="mt-1 text-accent">{role.company}</p>
                  <ul
                    aria-label={`${role.title} technologies`}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {role.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md border border-border bg-surface px-3 py-2 text-sm"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="leading-7 text-muted-foreground">
                    {role.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
