"use client";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint: applies the saved theme, or the system
 * preference when nothing is saved, so the page never flashes the wrong theme.
 * Keeps following the system setting until the visitor picks a theme.
 */
export const themeInitScript = `(() => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const saved = () => { try { return localStorage.getItem("${THEME_STORAGE_KEY}"); } catch { return null; } };
  const apply = () => { root.dataset.theme = saved() || (media.matches ? "dark" : "light"); };
  apply();
  media.addEventListener("change", () => { if (!saved()) apply(); });
})();`;

/**
 * Plain SVG from Font Awesome icon data. This is a client component, and
 * <FontAwesomeIcon> here would ship Font Awesome's whole runtime to the browser.
 */
function Icon({ icon }: { icon: IconDefinition }) {
  const [width, height, , , path] = icon.icon;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-4 w-auto"
      fill="currentColor"
      aria-hidden
    >
      <path d={Array.isArray(path) ? path.join(" ") : path} />
    </svg>
  );
}

/**
 * Switches between light and dark. Follows the system by default; only a
 * choice that differs from the system is remembered in this browser.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    try {
      // Picking the system theme clears the override, so the page follows
      // the system setting again; picking the other one is remembered.
      if (next === system) localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode): the switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className="fixed top-4 right-4 z-50 inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
    >
      {/* Both icons render; CSS shows the right one, so no hydration mismatch. */}
      <span className="flex dark:hidden">
        <Icon icon={faMoon} />
      </span>
      <span className="hidden dark:flex">
        <Icon icon={faSun} />
      </span>
    </button>
  );
}
