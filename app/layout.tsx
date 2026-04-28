import type { Metadata } from "next";
import "./globals.css";

import { getSiteUrl, siteConfig } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Senior Software Engineer`,
    template: "%s | Son Phan",
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Senior Software Engineer`,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: "Son Phan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Senior Software Engineer`,
    description: siteConfig.description,
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
