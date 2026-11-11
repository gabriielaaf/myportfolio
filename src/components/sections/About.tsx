import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import portrait from "../../assets/gabrielaportfolio.jpeg";

function About() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isCvVisible, setIsCvVisible] = useState(false);

  useEffect(() => {
    const section = cvRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsCvVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCvVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.label}>ABOUT ME</span>

          <h2 className={styles.title}>
            A little more
            <br />
            about me<span className={styles.accent}>.</span>
          </h2>

          <div className={styles.portrait}>
            <img
              src={portrait}
              alt="Gabriela Felgueiras"
            />
          </div>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <h3 className={styles.introduction}>
            I'm a third-year Informatics and Computing
            Engineering student at{" "}
            <strong>
              FEUP<span className={styles.accent}>.</span>
            </strong>
          </h3>

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
          <span>CURRICULUM VITAE</span>
        </div>

        <div className={styles.cvRow}>
          <div className={styles.cvContent}>
            <h3 className={styles.cvTitle}>
              Curriculum Vitae
            </h3>

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
            <span className={styles.cvArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;