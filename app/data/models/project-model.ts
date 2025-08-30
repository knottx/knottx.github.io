interface Project {
  title: string;
  /** "work" = client / product apps, "side" = open source & teaching projects */
  kind: "work" | "side";
  subtitle: string | null;
  /** My role on the project, one short line */
  role: string;
  /** One-sentence description of the app */
  summary: string;
  /** What I built — short, factual bullets. URLs are rendered as links. */
  highlights: string[];
  /** Main technologies, most important first */
  tech: string[];
  startedAt: Date | null;
  endedAt: Date | null;
  appIcon: string | null;
  images: string[];
  tabletImage: string | null;
  appleAppStoreUrl: string | null;
  googlePlayStoreUrl: string | null;
  gitHubUrls: GitHubUrl[] | null;
  pubDevUrl: string | null;
  /** Shown as a "Live demo" link */
  websiteUrl: string | null;
}

type GitHubUrl = {
  title: string;
  url: string;
};
