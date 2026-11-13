import { useState } from "react";
import { projects } from "../data/projects";
import styles from "./WorkPage.module.css";

function WorkPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const selectedProject = projects[selectedIndex];

  const imageCount = selectedProject.images.length;
  const currentImage = selectedProject.images[imageIndex];

  function selectProject(index: number) {
    if (index === selectedIndex) return;

    setSelectedIndex(index);
    setImageIndex(0);
  }

  function previousImage() {
    if (imageCount <= 1) return;

    setImageIndex((previous) =>
      (previous - 1 + imageCount) % imageCount
    );
  }

  function nextImage() {
    if (imageCount <= 1) return;

    setImageIndex((previous) =>
      (previous + 1) % imageCount
    );
  }

  return (
    <main className={styles.work}>
      <div className={styles.container}>

        {/* Introduction */}

        <header className={styles.header}>
          <span className={styles.label}>PROJECTS</span>

          <h1 className={styles.title}>
            What I've built<span className={styles.accent}>.</span>
          </h1>

          <p className={styles.subtitle}>
            From web applications to IoT dashboards, a selection
            of projects that reflect the different areas I've explored.
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
              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>

            <ul className={styles.projects}>
              {projects.map((project, index) => (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => selectProject(index)}
                    aria-pressed={selectedIndex === index}
                    className={`
                      ${styles.projectButton}
                      ${selectedIndex === index
                        ? styles.projectActive
                        : ""
                      }
                    `}
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
            className={styles.details}
            aria-label={`${selectedProject.name} details`}
          >

            {/* Carousel */}

            <div className={styles.carousel}>
              {currentImage ? (
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={`${selectedProject.name} screenshot ${imageIndex + 1
                    }`}
                  className={styles.carouselImage}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span>PROJECT PREVIEW</span>
                  <strong>{selectedProject.name}</strong>
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

              <h2 className={styles.detailsTitle}>
                {selectedProject.name}
              </h2>

              <p className={styles.detailsDescription}>
                {selectedProject.description}
              </p>

              <div className={styles.technologies}>
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default WorkPage;