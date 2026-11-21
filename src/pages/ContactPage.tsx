import { contacts } from "../data/contacts";

import styles from "./ContactPage.module.css";
import layoutStyles from "../styles/layout.module.css";
import typographyStyles from "../styles/typography.module.css";

function ContactPage() {
  return (
    <main className={styles.contact}>
      <div className={layoutStyles.container}>
        <div className={styles.layout}>

          {/* Introduction */}

          <header className={styles.intro}>
            <span className={styles.label}>
              CONTACT
            </span>

            <h1 className={styles.title}>
              Let's talk
              <span className={typographyStyles.accent}>.</span>
            </h1>

            <p className={styles.subtitle}>
              Whether you have a question, an idea or simply
              want to say hello, I'd love to hear from you.
            </p>
          </header>

          {/* Contact links */}

          <section
            className={styles.contactSection}
            aria-label="Contact information"
          >
            <span className={styles.sectionLabel}>
              FIND ME HERE
            </span>

            <ul className={styles.contactList}>
              {contacts.map((contact, index) => (
                <li
                  key={contact.id}
                  className={styles.contactItem}
                  style={{
                    animationDelay: `${550 + index * 130}ms`,
                  }}
                >
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={styles.contactLink}
                  >
                    {/* Number */}

                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Contact information */}

                    <div className={styles.contactInfo}>
                      <span className={typographyStyles.categoryLabel}>
                        {contact.label}
                      </span>

                      <span className={styles.contactValue}>
                        {contact.value}
                      </span>
                    </div>

                    {/* Arrow */}

                    <span
                      className={styles.arrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;