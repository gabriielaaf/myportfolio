import { Link } from "react-router";

import { navigationLinks } from "../../data/navigation";
import styles from "./HomeNavigation.module.css";

function HomeNavigation() {
  return (
    <nav
      className={styles.navigation}
      aria-label="Main navigation"
    >
      <ul className={styles.list}>
        {navigationLinks.map((link, index) => (
          <li
            key={link.href}
            className={styles.item}
            style={{
              animationDelay: `${400 + index * 120}ms`,
            }}
          >
            <Link
              to={link.href}
              className={styles.link}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomeNavigation;