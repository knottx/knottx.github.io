import Hero from "./components/hero";
import LinkPills from "./components/link-pills";
import ProjectRow from "./components/project-row";
import { allProjects } from "./constants/master-data";
import { pageContainer, profile } from "./constants/profile";
import { byStartDateDesc } from "./lib/project";

const workProjects = allProjects
  .filter((p) => p.kind === "work")
  .sort(byStartDateDesc);
const sideProjects = allProjects.filter((p) => p.kind === "side");

function ProjectList({
  id,
  title,
  projects,
}: {
  id: string;
  title: string;
  projects: Project[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={pageContainer}>
      <h2
        id={`${id}-title`}
        className="border-b border-zinc-200 dark:border-zinc-800 pb-4 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400 uppercase"
      >
        {title}
      </h2>
      <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <main className="space-y-10">
        <ProjectList id="work" title="Work" projects={workProjects} />
        <ProjectList
          id="open-source"
          title="Open source & teaching"
          projects={sideProjects}
        />
      </main>

      <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className={`${pageContainer} py-14 sm:py-16`}>
          <h2 className="text-2xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Email me at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-blue-700 dark:text-blue-400 underline underline-offset-4"
            >
              {profile.email}
            </a>
          </p>
          <div className="mt-6">
            <LinkPills links={profile.links} />
          </div>
          <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}
