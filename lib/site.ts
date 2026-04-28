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
  upcomingSections: [
    {
      id: "skills",
      title: "Technical skills",
      description:
        "A concise skills system will group tools by how they support product delivery, not just by category names.",
    },
    {
      id: "experience",
      title: "Professional experience",
      description:
        "Experience entries will focus on outcomes, scope, and engineering decisions instead of generic job summaries.",
    },
    {
      id: "projects",
      title: "Selected projects",
      description:
        "Case study cards will lead to deeper project pages as the portfolio grows.",
    },
  ],
};
