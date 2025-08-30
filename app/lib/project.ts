import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faApple,
  faDartLang,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function isCurrent(project: Project): boolean {
  return project.startedAt != null && project.endedAt == null;
}

export function formatPeriod(project: Project): string | null {
  if (project.startedAt == null) return null;
  const end =
    project.endedAt != null ? monthYear.format(project.endedAt) : "Present";
  return `${monthYear.format(project.startedAt)} – ${end}`;
}

export type ProjectLink = { label: string; href: string; icon: IconDefinition };

export function projectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.pubDevUrl) {
    links.push({ label: "pub.dev", href: project.pubDevUrl, icon: faDartLang });
  }
  if (project.appleAppStoreUrl) {
    links.push({ label: "App Store", href: project.appleAppStoreUrl, icon: faApple });
  }
  if (project.googlePlayStoreUrl) {
    links.push({ label: "Google Play", href: project.googlePlayStoreUrl, icon: faGooglePlay });
  }
  const repos = project.gitHubUrls ?? [];
  for (const repo of repos) {
    links.push({
      label: repos.length > 1 ? `GitHub · ${repo.title}` : "GitHub",
      href: repo.url,
      icon: faGithub,
    });
  }
  if (project.websiteUrl) {
    links.push({ label: "Live demo", href: project.websiteUrl, icon: faArrowUpRightFromSquare });
  }
  return links;
}

/** Newest first, by start date. */
export function byStartDateDesc(a: Project, b: Project): number {
  return (b.startedAt?.getTime() ?? 0) - (a.startedAt?.getTime() ?? 0);
}
