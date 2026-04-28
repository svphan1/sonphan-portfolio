import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Son Phan | Senior Software Engineer",
    template: "%s | Son Phan",
  },
  description:
    "Portfolio for Son Phan, a software engineer focused on accessible, performant web experiences.",
  openGraph: {
    title: "Son Phan | Senior Software Engineer",
    description:
      "Accessible, performant portfolio for a software engineer focused on practical product experiences.",
    type: "website",
    url: "/",
    siteName: "Son Phan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Phan | Senior Software Engineer",
    description:
      "Accessible, performant portfolio for a software engineer focused on practical product experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
