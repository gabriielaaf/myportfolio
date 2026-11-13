import { useEffect, useRef } from "react";

import { experiences } from "../data/experiences";
import styles from "./ExperiencePage.module.css";

function ExperiencePage() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll<HTMLElement>(
      `.${styles.experienceItem}`
    );

    if (!items?.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => {
        item.classList.add(styles.visible);
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.experience}>
      <div className={styles.container}>

        {/* Introduction */}

        <header className={styles.header}>
          <span className={styles.label}>EXPERIENCE</span>

          <h1 className={styles.title}>
            My journey
            <span className={styles.accent}>.</span>
          </h1>

          <p className={styles.subtitle}>
            From hackathons to product management,
            experiences that have shaped the way I learn,
            build and collaborate.
          </p>
        </header>

        {/* Timeline */}

        <ol className={styles.timeline} ref={timelineRef}>
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className={styles.experienceItem}
            >

              {/* Date */}

              <div className={styles.date}>
                {experience.period}
              </div>

              {/* Content */}

              <article className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceHeading}>
                    <span className={styles.category}>
                      {experience.category}
                    </span>

                    <h2 className={styles.experienceTitle}>
                      {experience.title}
                    </h2>

                    <p className={styles.organization}>
                      {experience.organization}
                    </p>
                  </div>

                  {experience.achievement && (
                    <span className={styles.achievement}>
                      {experience.achievement}
                    </span>
                  )}
                </div>

                <p className={styles.description}>
                  {experience.description}
                </p>

                {/* Technologies */}

                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div className={styles.technologies}>
                      {experience.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

export default ExperiencePage;