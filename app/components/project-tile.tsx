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
    <div>
      {project.images.length > 0 ? (
        <div className="container mx-auto grid h-full grid-cols-3">
          {project.images.slice(0, 3).map((props, index) => (
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
                index % 2 === 0 ? "pb-8" : "pt-8",
                project.images.length === 1 ? "col-start-2" : "",
                "drop-shadow-2xl",
              ].join(" ")}
            />
          ))}
        </div>
      ) : project.tabletImage ? (
        <div>
          <Image
            width={800}
            height={600}
            alt={project.tabletImage}
            src={"/" + project.tabletImage}
            className="h-auto max-w-full rounded-xl drop-shadow-2xl"
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">No images available</p>
      )}
    </div>
  );
}

export function ProjectDetail(project: Project) {
  const appIcon = project.appIcon;

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });
  const startedAt = project.startedAt;
  const endedAt = project.endedAt;
  const period =
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
      {project.descriptions.map((description, descriptionIndex) => (
        <p key={descriptionIndex} className="text-xs text-gray-500">
          {description}
        </p>
      ))}
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
              alt="app-store-badge"
              src="/app-store-badge.webp"
              className="w-auto h-10 drop-shadow-lg"
            />
          </a>
        ) : null}
        {project.googlePlayStoreUrl != null ? (
          <a href={project.googlePlayStoreUrl}>
            <Image
              width={64}
              height={64}
              alt="google-play-badge"
              src="/google-play-badge.webp"
              className="w-auto h-10 drop-shadow-lg"
            />
          </a>
        ) : null}
        {project.gitHubUrls != null
          ? project.gitHubUrls.map((gitHubUrl, index) => (
              <div className="flex flex-col gap-1" key={index}>
                {(project.gitHubUrls?.length ?? 0) > 1 ? (
                  <span className="text-xs text-gray-500">
                    {gitHubUrl.title}
                  </span>
                ) : null}
                <a href={gitHubUrl.url}>
                  <Image
                    width={128}
                    height={64}
                    alt={gitHubUrl.title}
                    src="/github-badge.webp"
                    className="w-auto h-10 drop-shadow-lg"
                  />
                </a>
              </div>
            ))
          : null}
        {project.websiteUrl != null ? (
          <a
            href={project.websiteUrl}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline"
          >
            Go to Website
          </a>
        ) : null}
      </div>
    </div>
  );
}
