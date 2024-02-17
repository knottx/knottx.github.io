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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <Image
          key={project.appIcon}
          width={80}
          height={80}
          alt={project.appIcon}
          src={"/" + project.appIcon}
          className="rounded-lg drop-shadow-lg"
        />
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="text-xs text-gray-600">{project.subtitle}</p>
          <p
            className={[
              "text-xs",
              "font-bold",
              project.isActive ? "text-sky-500" : "text-gray-400",
            ].join(" ")}
          >
            {project.period}
          </p>
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
    </div>
  );
}
