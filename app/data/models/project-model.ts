type Project = {
  title: string;
  subtitle: string | null;
  period: string | null;
  isActive: boolean;
  description: string;
  details: ProjectDetail[];
  appIcon: string;
  images: string[];
  appleAppStoreUrl: string | null;
  googlePlayStoreUrl: string | null;
  gitHubUrl: string | null;
};

type ProjectDetail = {
  title: string;
  bullets: string[];
};
