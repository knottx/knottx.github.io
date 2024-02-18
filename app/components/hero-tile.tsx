import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function HeroTile() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 items-center py-24">
      <div className="order-2 sm:order-1 flex flex-col gap-4 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">Visarut Tippun</h1>
        <h2 className="text-md text-sky-500 font-semibold">Mobile Developer</h2>
        <div className="flex flex-row gap-6">
          <a href="https://github.com/knottx">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#2F2F2F", fontSize: 24 }}
            />
          </a>
          <a href="https://www.linkedin.com/in/visarut-tippun/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#2F2F2F", fontSize: 24 }}
            />
          </a>
          <a href="mailto:knotto.vt@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#2F2F2F", fontSize: 24 }}
            />
          </a>
        </div>
      </div>
      <Image
        width={180}
        height={180}
        alt="profile.jpg"
        src="/profile.jpg"
        className="order-1 sm:order-2 w-auto h-48 sm:h-64 rounded-full"
      />
    </div>
  );
}
