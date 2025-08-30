import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { allProjects } from "./constants/master-data";
import { profile, siteUrl } from "./constants/profile";
import Analytics from "./components/analytics";
import ThemeToggle, { themeInitScript } from "./components/theme-toggle";

config.autoAddCss = false;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const title = `${profile.name} — Software Engineer, iOS & Flutter`;
const description = `Portfolio of ${profile.name} (${profile.alias}), a software engineer with ${profile.yearsOfExperience}+ years of mobile development experience, building native iOS apps in Swift and cross-platform apps in Flutter.`;

/** Unique technologies across all projects, used for keywords and structured data. */
const skills = [...new Set(allProjects.flatMap((p) => p.tech))];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: profile.alias,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    profile.alias,
    "Software Engineer",
    "iOS Developer",
    "Flutter Developer",
    "Mobile Developer",
    "Portfolio",
    ...skills,
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
    firstName: profile.firstName,
    lastName: profile.lastName,
    username: profile.alias,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  name: title,
  description,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alias,
    jobTitle: "Software Engineer",
    description: profile.summary,
    url: siteUrl,
    image: `${siteUrl}/profile.avif`,
    email: `mailto:${profile.email}`,
    sameAs: profile.links
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
    knowsAbout: skills,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The init script sets data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geistSans.variable} font-sans`}>
        <script
          type="application/ld+json"
          // Escape "<" so project text can never close the script tag early.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeToggle />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
