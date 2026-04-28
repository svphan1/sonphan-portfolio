import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-6 px-6"
      >
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          {siteConfig.name}
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
