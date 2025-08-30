import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDartLang,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faWrench } from "@fortawesome/free-solid-svg-icons";

export type ProfileLink = {
  label: string;
  href: string;
  icon: IconDefinition;
};

export const siteUrl = "https://knottx.dev";

/** Years of professional experience, shown as "10+ years". */
const yearsOfExperience = 10;

export const profile = {
  name: "Visarut Tippun",
  firstName: "Visarut",
  lastName: "Tippun",
  alias: "knottx",
  role: "Software Engineer · iOS & Flutter",
  yearsOfExperience,
  summary: `I've been building mobile apps for ${yearsOfExperience}+ years: native iOS apps in Swift and cross-platform apps in Flutter. Most of my projects I've owned end to end, from the first commit to App Store and Google Play release.`,
  email: "knotto.vt@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/knottx", icon: faGithub },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/visarut-tippun",
      icon: faLinkedinIn,
    },
    {
      label: "pub.dev",
      href: "https://pub.dev/publishers/knottx.dev",
      icon: faDartLang,
    },
    { label: "Tools", href: "/tools", icon: faWrench },
  ] satisfies ProfileLink[],
};

/** Shared page container so every block lines up. */
export const pageContainer = "mx-auto w-full max-w-5xl px-5 sm:px-8";
