import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type PillLink = { label: string; href: string; icon: IconDefinition };

/** Row of rounded link buttons (store, GitHub, social). */
export default function LinkPills({ links }: { links: PillLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            <FontAwesomeIcon icon={link.icon} aria-hidden />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
