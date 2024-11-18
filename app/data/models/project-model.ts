interface Project {
  title: string;
  subtitle: string | null;
  startedAt: Date | null;
  endedAt: Date | null;
  descriptions: string[];
  details: ProjectDetail[];
  appIcon: string | null;
  images: string[];
  tabletImage: string | null;
  appleAppStoreUrl: string | null;
  googlePlayStoreUrl: string | null;
  gitHubUrl: string | null;
}

type ProjectDetail = {
  title: string;
  bullets: string[];
};
