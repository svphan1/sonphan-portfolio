import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border bg-surface px-6 py-16 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {siteConfig.contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl"
          >
            {siteConfig.contact.title}
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            {siteConfig.contact.summary}
          </p>
          <a
            href={siteConfig.contact.primaryAction.href}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 hover:no-underline"
          >
            {siteConfig.contact.primaryAction.label}
          </a>
        </div>

        <aside
          aria-label="Contact details"
          className="rounded-lg border border-border bg-background p-6"
        >
          <dl className="grid gap-5">
            {siteConfig.contact.details.map((detail) => (
              <div
                key={detail.label}
                className="border-b border-border pb-5 last:border-b-0 last:pb-0"
              >
                <dt className="text-sm text-muted-foreground">
                  {detail.label}
                </dt>
                <dd className="mt-1 font-medium">
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6 text-sm font-medium">
            {siteConfig.contact.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
