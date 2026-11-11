import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./NavigationMenu.module.css";

const navigationLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Beyond the Code", href: "#beyond-the-code" },
  { label: "Contact", href: "#contact" },
];

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  function toggleMenu() {
    setIsOpen((previous) => !previous);
  }

  function closeMenu() {
    setIsOpen(false);
    menuButtonRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the first navigation link
    const frame = requestAnimationFrame(() => {
      panelRef.current
        ?.querySelector<HTMLAnchorElement>("a[href]")
        ?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      // Close menu with Escape
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
        return;
      }

      // Keep keyboard focus inside the navigation
      if (event.key !== "Tab") return;

      const links = Array.from(
        panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []
      );

      const focusableElements: HTMLElement[] = [
        ...(menuButtonRef.current ? [menuButtonRef.current] : []),
        ...links,
      ];

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu button */}
      <button
        ref={menuButtonRef}
        type="button"
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="navigation-panel"
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {/* Background overlay */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Navigation */}
      <aside
        ref={panelRef}
        id="navigation-panel"
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""
          }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default NavigationMenu;