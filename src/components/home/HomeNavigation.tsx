import { Link } from "react-router";
import { navigationLinks } from "../../data/navigation";
import styles from "./HomeNavigation.module.css";

function HomeNavigation() {
  return (
    <nav
      className={styles.navigation}
      aria-label="Homepage navigation"
    >
      <ul className={styles.links}>
        {navigationLinks.map((link, index) => (
          <li
            key={link.label}
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            <Link to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomeNavigation;