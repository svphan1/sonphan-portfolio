export const siteConfig = {
  name: "Son Phan",
  role: "Software Engineer",
  email: "hello@example.com",
  location: "United States",
  availability: "Available for select projects",
  description:
    "Software engineer building accessible, performant web experiences with practical product thinking.",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Portfolio",
    headline: "Software engineer building reliable web products.",
    summary:
      "I focus on fast, accessible interfaces, maintainable systems, and the engineering details that make products easier to use and easier to evolve.",
    primaryCta: { label: "View work", href: "#projects" },
    secondaryCta: { label: "Contact", href: "mailto:hello@example.com" },
  },
  metrics: [
    { value: "5+", label: "Years building web apps" },
    { value: "A11y", label: "Accessibility-first UI" },
    { value: "CWV", label: "Performance-minded delivery" },
  ],
  skills: {
    eyebrow: "Skills",
    title: "Practical tools for building and shipping web products.",
    summary:
      "Grouped by how the tools contribute to delivery: interface quality, application architecture, backend systems, and engineering workflow.",
    categories: [
      {
        title: "Frontend",
        description:
          "Accessible interfaces, component systems, and responsive UI.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "CSS",
        ],
      },
      {
        title: "Backend",
        description:
          "APIs, data modeling, authentication, and server-side features.",
        skills: ["Node.js", "Express", "SQL", "REST APIs", "Firebase"],
      },
      {
        title: "Quality",
        description:
          "Maintainable code, verification, and production readiness.",
        skills: [
          "ESLint",
          "Prettier",
          "Jest",
          "Git",
          "Accessibility",
          "Core Web Vitals",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience shaped around ownership, delivery, and maintainability.",
    summary:
      "These are placeholder entries until your real roles are added. The section is structured to emphasize scope, outcomes, and the technologies used.",
    roles: [
      {
        title: "Software Engineer",
        company: "Product Team",
        period: "2024 - Present",
        location: "Remote",
        summary:
          "Build and maintain user-facing features with attention to accessibility, performance, and long-term code health.",
        highlights: [
          "Implemented reusable React patterns for production interfaces.",
          "Improved page structure with semantic HTML and accessible interaction states.",
          "Collaborated across design and engineering to ship practical product improvements.",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Frontend Developer",
        company: "Web Platform",
        period: "2022 - 2024",
        location: "Hybrid",
        summary:
          "Delivered responsive web experiences and improved developer workflows for a growing application surface.",
        highlights: [
          "Created maintainable UI components backed by shared content models.",
          "Added linting, formatting, and review practices to reduce implementation drift.",
          "Partnered with stakeholders to translate requirements into scoped releases.",
        ],
        technologies: ["React", "Node.js", "ESLint", "Prettier"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work with room for deeper case studies.",
    summary:
      "Placeholder project data for now. The structure supports live links, source links, outcomes, and future case study pages.",
    items: [
      {
        title: "Portfolio Platform",
        type: "Personal site",
        description:
          "A production-oriented portfolio built with Next.js, semantic HTML, accessible sections, and a maintainable content model.",
        outcome:
          "Creates a scalable base for case studies, writing, analytics, and future integrations.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ESLint"],
        links: [
          { label: "Source", href: "#" },
          { label: "Case study", href: "#" },
        ],
      },
      {
        title: "Project Case Study Template",
        type: "Content system",
        description:
          "A planned template for documenting product context, technical decisions, tradeoffs, and measurable outcomes.",
        outcome:
          "Keeps future project pages consistent and easier to scan for hiring managers.",
        technologies: ["App Router", "MDX-ready", "SEO", "Structured data"],
        links: [{ label: "Planned", href: "#" }],
      },
      {
        title: "Frontend Quality System",
        type: "Engineering workflow",
        description:
          "A quality baseline around formatting, linting, accessibility, and build verification for every portfolio change.",
        outcome:
          "Reduces regressions and makes each commit reviewable before more complex features are added.",
        technologies: ["Prettier", "ESLint", "npm scripts", "Git"],
        links: [{ label: "Review setup", href: "#" }],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a project or role that fits this kind of work?",
    summary:
      "Reach out with context, timeline, and what you are trying to build. Placeholder links are included until your preferred profiles are finalized.",
    primaryAction: { label: "Email me", href: "mailto:hello@example.com" },
    details: [
      {
        label: "Email",
        value: "hello@example.com",
        href: "mailto:hello@example.com",
      },
      { label: "Location", value: "United States" },
      { label: "Availability", value: "Available for select projects" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/svphan1" },
      { label: "LinkedIn", href: "#" },
      { label: "Resume", href: "#" },
    ],
  },
};
