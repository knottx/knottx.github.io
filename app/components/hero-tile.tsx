import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function HeroTile() {
  return (
    <section className="jd-hero-banner">
      <div className="container jd-hero-text d-flex justify-content-center">
        <div className="row align-self-center">
          <div className="col">
            <h1 className="text-3xl font-semibold">Visarut Tippun</h1>
            <h2 className="text-md text-sky-500 font-semibold">
              Mobile Developer
            </h2>

            <div className="flex flex-row gap-6 pt-4">
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
        </div>
      </div>
    </section>
  );
}
