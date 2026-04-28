import { siteConfig } from "@/lib/site";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-border px-6 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {siteConfig.projects.eyebrow}
            </p>
            <h2
              id="projects-heading"
              className="text-3xl font-semibold leading-tight sm:text-4xl"
            >
              {siteConfig.projects.title}
            </h2>
          </div>
          <p className="max-w-md leading-7 text-muted-foreground">
            {siteConfig.projects.summary}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteConfig.projects.items.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-lg border border-border bg-surface p-6"
            >
              <p className="text-sm text-accent">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 rounded-md border border-border bg-background p-4">
                <p className="text-sm font-medium">Outcome</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
              <ul
                aria-label={`${project.title} technologies`}
                className="mt-5 flex flex-wrap gap-2"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-medium">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
