interface Project {
  title: string;
  subtitle: string | null;
  startedAt: Date | null;
  endedAt: Date | null;
  description: string;
  details: ProjectDetail[];
  appIcon: string | null;
  images: string[];
  appleAppStoreUrl: string | null;
  googlePlayStoreUrl: string | null;
  gitHubUrl: string | null;
}

type ProjectDetail = {
  title: string;
  bullets: string[];
};
