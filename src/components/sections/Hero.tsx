import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Gabriela
          <br />
          Felgueiras
        </h1>

        <p className={styles.description}>
          Informatics and Computing Engineering Student @ FEUP
        </p>

        <p className={styles.location}>
          Porto, Portugal
        </p>
      </div>
    </section>
  );
}

export default Hero;