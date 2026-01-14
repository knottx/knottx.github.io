import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faDartLang,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function HeroTile() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 items-center py-24">
      <div className="order-2 sm:order-1 flex flex-col gap-4 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">Visarut Tippun</h1>
        <h2 className="text-lg text-sky-800 font-semibold">
          Software Engineer - iOS, Flutter
        </h2>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#2F2F2F", fontSize: 20, width: 20 }}
              />
              <p className="text-xs">knotto.vt@gmail.com</p>
            </div>
            <a
              href="https://github.com/knottx"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#2F2F2F", fontSize: 20, width: 20 }}
              />
              <p className="text-xs text-sky-600">github.com/knottx</p>
            </a>
            <a
              href="https://www.linkedin.com/in/visarut-tippun"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#2F2F2F", fontSize: 20, width: 20 }}
              />
              <p className="text-xs text-sky-600">
                linkedin.com/in/visarut-tippun
              </p>
            </a>
            <a
              href="https://pub.dev/publishers/knottx.dev"
              target="_blank"
              className="flex items-center gap-2 text-sky-600"
            >
              <FontAwesomeIcon
                icon={faDartLang}
                style={{ color: "#2F2F2F", fontSize: 20, width: 20 }}
              />
              <p className="text-xs text-sky-600">pub.dev</p>
            </a>
            <a
              href="/linktree"
              target="_blank"
              className="flex items-center gap-2 text-sky-600"
            >
              <FontAwesomeIcon
                icon={faLink}
                style={{ color: "#2F2F2F", fontSize: 20, width: 20 }}
              />
              <p className="text-xs text-sky-600">Linktree</p>
            </a>
          </div>
        </div>
      </div>
      <Image
        width={180}
        height={180}
        alt="profile"
        src="/profile.webp"
        className="order-1 sm:order-2 w-auto h-48 sm:h-64 rounded-full drop-shadow-lg"
      />
    </div>
  );
}
