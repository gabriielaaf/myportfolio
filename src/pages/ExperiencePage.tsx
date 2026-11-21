import { useEffect, useRef } from "react";

import { experiences } from "../data/experiences";
import styles from "./ExperiencePage.module.css";
import linkStyles from "../styles/links.module.css";
import teamPhoto from "../assets/team.jpg";

function ExperiencePage() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const teamRef = useRef<HTMLElement>(null);

  /* Timeline animation */

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

  /* Team animation */

  useEffect(() => {
    const team = teamRef.current;

    if (!team) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      team.classList.add(styles.visible);
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
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(team);

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.experience}>
      <div className={styles.container}>

        {/* Introduction */}

        <header className={styles.header}>
          <span className={styles.label}>
            EXPERIENCE
          </span>

          <h1 className={styles.title}>
            My journey
            <span className={styles.accent}>.</span>
          </h1>

          <p className={styles.subtitle}>
            A collection of meaningful experiences, milestones and
            opportunities that have contributed to my personal and
            professional growth.
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

              {/* Experience content */}

              <article className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceHeading}>
                    <span className={styles.category}>
                      {experience.category}
                    </span>

                    {/* Title and repository link */}

                    <h2 className={styles.experienceTitle}>
                      {experience.repository ? (
                        <a
                          href={experience.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkStyles.repositoryLink}
                          aria-label={`View ${experience.title} repository on GitHub`}
                        >
                          <span>{experience.title}</span>

                          <span
                            className={linkStyles.repositoryArrow}
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        experience.title
                      )}
                    </h2>

                    <p className={styles.organization}>
                      {experience.organization}
                    </p>
                  </div>

                  {/* Achievement */}

                  {experience.achievement && (
                    <div
                      className={styles.achievement}
                      aria-label={experience.achievement}
                    >
                      <span className={styles.achievementPosition}>
                        {experience.achievement.split(" ")[0]}
                      </span>

                      <span className={styles.achievementLabel}>
                        {experience.achievement
                          .split(" ")
                          .slice(1)
                          .join(" ")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}

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

        {/* Team */}

        <section
          ref={teamRef}
          className={styles.teamSection}
        >
          <div className={styles.teamImage}>
            <img
              src={teamPhoto}
              alt="My hackathon team"
              loading="lazy"
            />
          </div>

          <div className={styles.teamContent}>
            <span className={styles.teamLabel}>
              THE PEOPLE BEHIND THE ACHIEVEMENTS
            </span>

            <h2 className={styles.teamTitle}>
              Better together
              <span className={styles.accent}>.</span>
            </h2>

            <p className={styles.teamDescription}>
              Two competitions, two podium finishes, and the same
              amazing team by my side. Proud of what we've achieved
              together, and always looking forward to new challenges,
              experiences and adventures.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ExperiencePage;