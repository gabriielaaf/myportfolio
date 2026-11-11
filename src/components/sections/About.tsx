import styles from "./About.module.css";
import portrait from "../../assets/hero.png";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.label}>ABOUT ME</span>

          <h2 className={styles.title}>
            Software,
            <br />
            problem-solving
            <br />
            and a bit of
            <br />
            creativity<span className={styles.accent}>.</span>
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
            <strong>FEUP<span className={styles.accent}>.</span></strong>
          </h3>

          <div className={styles.description}>
            <p>
              What draws me to frontend development is
              the opportunity to turn complex problems
              into simple, meaningful experiences.
            </p>

            <p>
              My interests also extend to databases,
              data analysis and software development.
              I enjoy exploring these areas through
              academic projects, hackathons and
              collaborative challenges.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;