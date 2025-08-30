import Image from "next/image";
import { formatPeriod, isCurrent, projectLinks } from "../lib/project";
import LinkPills from "./link-pills";

function Linkified({ text }: { text: string }) {
  return (
    <>
      {text.split(/(https?:\/\/\S+)/).map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-blue-700 dark:text-blue-400 underline underline-offset-2"
          >
            {part.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Screens({ project }: { project: Project }) {
  const phones = project.images.slice(0, 3);

  if (phones.length > 0) {
    return (
      <div className="flex justify-center gap-[4%] rounded-3xl bg-zinc-50 dark:bg-zinc-900 px-[6%] py-8">
        {phones.map((src, i) => (
          <Image
            key={src}
            src={`/${src}`}
            alt={`${project.title} screen ${i + 1}`}
            width={473}
            height={932}
            sizes="(min-width: 768px) 140px, 28vw"
            className="h-auto w-[30%]"
          />
        ))}
      </div>
    );
  }

  if (project.tabletImage) {
    return (
      <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900 px-[6%] py-8">
        <Image
          src={`/${project.tabletImage}`}
          alt={`${project.title} screen`}
          width={1218}
          height={800}
          sizes="(min-width: 768px) 440px, 90vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  return null;
}

export default function ProjectRow({ project }: { project: Project }) {
  const period = formatPeriod(project);
  const current = isCurrent(project);
  const hasScreens = project.images.length > 0 || project.tabletImage != null;

  return (
    <article
      className={
        hasScreens
          ? "grid gap-8 py-14 sm:py-16 md:grid-cols-2 md:items-center md:gap-14"
          : "py-12 sm:py-14"
      }
    >
      {hasScreens ? (
        <div className="md:order-2">
          <Screens project={project} />
        </div>
      ) : null}

      <div className={hasScreens ? "md:order-1" : "max-w-2xl"}>
        <div className="flex items-center gap-4">
          {project.appIcon ? (
            <Image
              src={`/${project.appIcon}`}
              alt=""
              width={112}
              height={112}
              sizes="56px"
              className="size-14 shrink-0 rounded-2xl ring-1 ring-zinc-900/5 dark:ring-white/10"
            />
          ) : null}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            {period ? (
              <p
                className={`text-sm tabular-nums ${current ? "font-medium text-blue-700 dark:text-blue-400" : "text-zinc-500 dark:text-zinc-400"}`}
              >
                {period}
              </p>
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.role}
              </p>
            )}
          </div>
        </div>

        {period ? (
          <p className="mt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {project.role}
          </p>
        ) : null}
        <p
          className={`${period ? "mt-1" : "mt-5"} leading-relaxed text-zinc-600 dark:text-zinc-400`}
        >
          {project.summary}
          {project.subtitle ? ` ${project.subtitle}.` : ""}
        </p>

        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 marker:text-zinc-300 dark:marker:text-zinc-600">
          {project.highlights.map((item) => (
            <li key={item}>
              <Linkified text={item} />
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <LinkPills links={projectLinks(project)} />
        </div>
      </div>
    </article>
  );
}
