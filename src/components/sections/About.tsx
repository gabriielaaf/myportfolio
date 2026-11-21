import { useEffect, useRef, useState } from "react";

import portrait from "../../assets/gabrielaportfolio.jpeg";

import styles from "./About.module.css";
import typographyStyles from "../../styles/typography.module.css";
import animationStyles from "../../styles/animations.module.css";

function About() {
  const cvRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isCvVisible, setIsCvVisible] = useState(false);

  /* CV scroll animation */

  useEffect(() => {
    const cvSection = cvRef.current;
    const portrait = portraitRef.current;

    if (!cvSection || !portrait) return;

    function reveal(element: Element) {
      if (element === cvSection) {
        setIsCvVisible(true);
      }

      if (element === portrait) {
        portrait?.classList.add(animationStyles.visible);
      }
    }

    if (!("IntersectionObserver" in window)) {
      reveal(cvSection);
      reveal(portrait);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(cvSection);
    observer.observe(portrait);

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.about}>
      <div className={styles.container}>

        {/* Left column */}

        <div className={styles.left}>
          <span className={styles.label}>
            ABOUT ME
          </span>

          <h1 className={styles.title}>
            A little more
            <br />
            about me
            <span className={typographyStyles.accent}>.</span>
          </h1>

          <div
            ref={portraitRef}
            className={`${styles.portrait} ${animationStyles.imageReveal}`}
          >
            <img
              src={portrait}
              alt="Gabriela Felgueiras"
            />
          </div>
        </div>

        {/* Right column */}

        <div className={styles.right}>
          <h2 className={styles.introduction}>
            I'm a third-year Informatics and Computing
            Engineering student at{" "}
            <strong>
              FEUP
              <span className={typographyStyles.accent}>.</span>
            </strong>
          </h2>

          <div className={styles.description}>
            <p>
              Frontend development is where I get to explore
              my creative side, combining technology and
              design to turn ideas into intuitive, meaningful
              digital experiences.
            </p>

            <p>
              Beyond academics, I enjoy stepping outside
              my comfort zone through hackathons and
              collaborative projects, where I can explore
              new ideas, tackle challenges and learn
              from others.
            </p>
          </div>
        </div>
      </div>

      {/* CV section */}

      <div
        ref={cvRef}
        className={`${styles.cvSection} ${
          isCvVisible ? styles.cvVisible : ""
        }`}
      >
        <div className={styles.cvHeader}>
          <span className={typographyStyles.metaLabel}>
            CURRICULUM VITAE
          </span>
        </div>

        <div className={styles.cvRow}>
          <div className={styles.cvContent}>
            <h2 className={styles.cvTitle}>
              Curriculum Vitae
            </h2>

            <p className={styles.cvDescription}>
              A closer look at my education, experience
              and projects.
            </p>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}Gabriela_Felgueiras_CV.pdf`}
            download="Gabriela_Felgueiras_CV.pdf"
            className={styles.cvLink}
          >
            Download CV

            <span
              className={styles.cvArrow}
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;