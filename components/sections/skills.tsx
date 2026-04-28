import { siteConfig } from "@/lib/site";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-border px-6 py-16 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {siteConfig.skills.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl"
          >
            {siteConfig.skills.title}
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
            {siteConfig.skills.summary}
          </p>
        </div>

        <div className="grid gap-4">
          {siteConfig.skills.categories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <ul
                  aria-label={`${category.title} skills`}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
