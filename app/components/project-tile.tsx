import Image from "next/image";

export default function ProjectTile(props: ProjectProps) {
  return (
    <div className="flex-col">
      <div
        className={[
          "flex",
          "flex-col",
          "sm:grid",
          "sm:grid-cols-2",
          "h-full",
          "gap-8",
          "py-16",
        ].join(" ")}
      >
        <div
          className={[
            "order-1",
            props.index % 2 == 0 ? "sm:order-1" : "sm:order-2",
          ].join(" ")}
        >
          <ProjectImages {...props.project} />
        </div>
        <div
          className={[
            "order-2",
            props.index % 2 == 0 ? "sm:order-2" : "sm:order-1",
          ].join(" ")}
        >
          <ProjectDetail {...props.project} />
        </div>
      </div>
      <div className="px-16">
        <hr />
      </div>
    </div>
  );
}

export function ProjectImages(project: Project) {
  return (
    <div className="container mx-auto grid h-full grid-cols-3">
      {project.images.slice(0, 4).map((props, index) => (
        <Image
          key={index}
          width={480}
          height={480}
          alt={props}
          src={"/" + props}
          className={[
            "h-auto",
            "max-w-full",
            "rounded-xl",
            index % 2 == 0 ? "pb-8" : "pt-8",
            "drop-shadow-2xl",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export function ProjectDetail(project: Project) {
  let appIcon = project.appIcon;

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });
  let startedAt = project.startedAt;
  let endedAt = project.endedAt;
  let period =
    startedAt != null
      ? `${dateTimeFormat.format(startedAt)} - ${
          endedAt != null ? `${dateTimeFormat.format(endedAt)}` : "Now"
        }`
      : null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        {appIcon != null ? (
          <Image
            key={appIcon}
            width={80}
            height={80}
            alt={appIcon}
            src={"/" + appIcon}
            className="rounded-lg drop-shadow-lg"
          />
        ) : null}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="text-xs text-gray-600">{project.subtitle}</p>
          {period != null ? (
            <p
              className={[
                "text-xs",
                "font-bold",
                endedAt != null ? "text-gray-400" : "text-sky-600",
              ].join(" ")}
            >
              {period}
            </p>
          ) : null}
        </div>
      </div>
      <p className="text-xs text-gray-500">{project.description}</p>
      {project.details.map((detail, detailIndex) => (
        <div key={detailIndex} className="flex flex-col">
          <p className="text-xs text-gray-700 font-semibold">{detail.title}</p>
          <ul className="list-disc list-inside">
            {detail.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="text-xs text-gray-500">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-row gap-4">
        {project.appleAppStoreUrl != null ? (
          <a href={project.appleAppStoreUrl}>
            <Image
              width={64}
              height={64}
              alt="app-store-badge.png"
              src="/app-store-badge.png"
              className="w-auto h-10 drop-shadow-lg"
            />
          </a>
        ) : null}
        {project.googlePlayStoreUrl != null ? (
          <a href={project.googlePlayStoreUrl}>
            <Image
              width={64}
              height={64}
              alt="google-play-badge.png"
              src="/google-play-badge.png"
              className="w-auto h-10 drop-shadow-lg"
            />
          </a>
        ) : null}
        {project.gitHubUrl != null ? (
          <a href={project.gitHubUrl}>
            <Image
              width={128}
              height={64}
              alt="github-badge.png"
              src="/github-badge.png"
              className="w-auto h-10 drop-shadow-lg"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
}
