import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {siteConfig.upcomingSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-24 rounded-lg border border-border bg-surface p-6"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-xl font-semibold"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {section.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
