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
  upcomingSections: [
    {
      id: "projects",
      title: "Selected projects",
      description:
        "Case study cards will lead to deeper project pages as the portfolio grows.",
    },
  ],
};
