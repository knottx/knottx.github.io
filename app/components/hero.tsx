import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { pageContainer, profile } from "../constants/profile";
import LinkPills from "./link-pills";

export default function Hero() {
  return (
    <header className={`${pageContainer} pt-14 pb-14 sm:pt-24 sm:pb-20`}>
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-blue-700 dark:text-blue-400">
            {profile.role}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.summary}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex h-11 items-center gap-2.5 rounded-full bg-zinc-900 dark:bg-white px-5 text-[15px] font-medium text-white transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200 dark:text-zinc-900"
          >
            <FontAwesomeIcon icon={faEnvelope} aria-hidden />
            {profile.email}
          </a>
          <div className="mt-3">
            <LinkPills links={profile.links} />
          </div>
        </div>

        {/* The photo has a white studio background; multiply-blending it over a
            soft tint turns that white into a subtle backdrop so the circle reads
            clearly on the white page. */}
        <div className="size-28 shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-zinc-100 to-zinc-200 ring-1 ring-zinc-900/10 dark:ring-white/10 sm:size-52">
          <Image
            src="/profile.avif"
            alt={`Portrait of ${profile.name}`}
            width={625}
            height={625}
            preload
            sizes="(min-width: 640px) 208px, 112px"
            className="size-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </header>
  );
}
