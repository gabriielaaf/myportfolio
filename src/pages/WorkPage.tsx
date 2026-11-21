import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

import styles from "./WorkPage.module.css";
import linkStyles from "../styles/links.module.css";
import techStyles from "../styles/technologies.module.css";
import layoutStyles from "../styles/layout.module.css";
import typographyStyles from "../styles/typography.module.css";

function WorkPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [hasChangedProject, setHasChangedProject] = useState(false);

  const githubRef = useRef<HTMLElement>(null);

  const selectedProject = projects[selectedIndex];

  const imageCount = selectedProject.images.length;
  const currentImage = selectedProject.images[imageIndex];

  /* Project selection */

  function selectProject(index: number) {
    if (index === selectedIndex) return;

    setSelectedIndex(index);
    setImageIndex(0);
    setHasChangedProject(true);
  }

  /* Carousel navigation */

  function previousImage() {
    if (imageCount <= 1) return;

    setImageIndex(
      (previous) => (previous - 1 + imageCount) % imageCount
    );
  }

  function nextImage() {
    if (imageCount <= 1) return;

    setImageIndex(
      (previous) => (previous + 1) % imageCount
    );
  }

  /* GitHub section animation */

  useEffect(() => {
    const section = githubRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      section.classList.add(styles.githubVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.githubVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.work}>
      <div className={layoutStyles.container}>

        {/* Introduction */}

        <header className={styles.header}>
          <span className={typographyStyles.pageLabel}>
            PROJECTS
          </span>

          <h1 className={styles.title}>
            What I've built
            <span className={typographyStyles.accent}>.</span>
          </h1>

          <p className={styles.subtitle}>
            From web applications to IoT dashboards and games,
            a selection of projects that reflect the different
            areas I've explored.
          </p>
        </header>

        <div className={styles.content}>

          {/* Project list */}

          <section
            className={styles.projectList}
            aria-label="Projects"
          >
            <div className={styles.listHeader}>
              <span>PROJECTS</span>

              <span>
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <ul className={styles.projects}>
              {projects.map((project, index) => (
                <li
                  key={project.id}
                  style={{
                    animationDelay: `${
                      500 + Math.min(index, 6) * 100
                    }ms`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => selectProject(index)}
                    aria-pressed={selectedIndex === index}
                    className={`${styles.projectButton} ${
                      selectedIndex === index
                        ? styles.projectActive
                        : ""
                    }`}
                  >
                    <span className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.projectName}>
                      {project.name}
                    </span>

                    <span
                      className={styles.projectArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Project details */}

          <section
            key={selectedProject.id}
            className={`${styles.details} ${
              !hasChangedProject
                ? styles.detailsInitial
                : ""
            }`}
            aria-label={`${selectedProject.name} details`}
          >

            {/* Carousel */}

            <div className={styles.carousel}>
              {currentImage ? (
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={`${selectedProject.name} screenshot ${
                    imageIndex + 1
                  }`}
                  className={styles.carouselImage}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span>PROJECT PREVIEW</span>

                  <strong>
                    {selectedProject.name}
                  </strong>

                  <span>Images coming soon</span>
                </div>
              )}
            </div>

            {/* Carousel navigation */}

            <div className={styles.carouselControls}>
              <span className={styles.imageCounter}>
                {imageCount > 0
                  ? `${String(imageIndex + 1).padStart(2, "0")} / ${String(
                      imageCount
                    ).padStart(2, "0")}`
                  : "00 / 00"}
              </span>

              <div className={styles.carouselButtons}>
                <button
                  type="button"
                  onClick={previousImage}
                  disabled={imageCount <= 1}
                  aria-label="Previous image"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  disabled={imageCount <= 1}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </div>

            {/* Project information */}

            <div className={styles.projectInfo}>
              <div className={styles.projectMeta}>
                <span>{selectedProject.category}</span>
                <span>{selectedProject.year}</span>
              </div>

              {/* Project title and repository */}

              <h2 className={styles.detailsTitle}>
                {selectedProject.repository ? (
                  <a
                    href={selectedProject.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles.repositoryLink}
                    aria-label={`View ${selectedProject.name} repository on GitHub`}
                  >
                    <span>{selectedProject.name}</span>

                    <span
                      className={linkStyles.repositoryArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  selectedProject.name
                )}
              </h2>

              <p className={styles.detailsDescription}>
                {selectedProject.description}
              </p>

              {/* Technologies */}

              <div className={techStyles.technologies}>
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* GitHub */}

        <section
          ref={githubRef}
          className={styles.githubSection}
        >
          <div className={styles.githubContent}>
            <h2 className={styles.githubHeading}>
              There's more to explore
              <span className={typographyStyles.accent}>.</span>
            </h2>

            <p className={styles.githubDescription}>
              Beyond the projects featured here, you can
              discover more of my work and ideas on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/gabriielaaf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Explore my GitHub

            <span
              className={styles.githubArrow}
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}

export default WorkPage;