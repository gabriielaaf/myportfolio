import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";

import { Link } from "react-router";
import { conversation } from "../data/beyond";

import styles from "./BeyondPage.module.css";
import layoutStyles from "../styles/layout.module.css";
import typographyStyles from "../styles/typography.module.css";
import linkStyles from "../styles/links.module.css";

type WheelMode = "idle" | "history" | "revealed";

interface WheelGesture {
  mode: WheelMode;
  amount: number;
  timer: number | null;
}

interface TouchGesture {
  startY: number;
  wasAtBottom: boolean;
}

function isAtBottom(element: HTMLElement) {
  return (
    element.scrollHeight -
    element.scrollTop -
    element.clientHeight <=
    4
  );
}

function BeyondPage() {
  const [visibleCount, setVisibleCount] = useState(1);

  const chatRef = useRef<HTMLElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  const countRef = useRef(1);

  const wheelRef = useRef<WheelGesture>({
    mode: "idle",
    amount: 0,
    timer: null,
  });

  const touchRef = useRef<TouchGesture | null>(null);

  const isFinished = visibleCount === conversation.length;

  /* Reveal next message */

  const revealNext = useCallback(() => {
    if (countRef.current >= conversation.length) return;

    countRef.current += 1;
    setVisibleCount(countRef.current);
  }, []);

  /* Wheel navigation */

  useEffect(() => {
    const chat = chatRef.current;
    const container = conversationRef.current;

    if (!chat || !container) return;

    const gesture = wheelRef.current;

    function handleWheel(event: WheelEvent) {
      if (!container || event.ctrlKey || event.metaKey) {
        return;
      }

      const delta =
        event.deltaMode === 1
          ? event.deltaY * 16
          : event.deltaMode === 2
            ? event.deltaY * container.clientHeight
            : event.deltaY;

      if (delta === 0) return;

      const atBottom = isAtBottom(container);

      // Allow page scrolling when the conversation ends.

      if (
        delta > 0 &&
        atBottom &&
        countRef.current >= conversation.length
      ) {
        return;
      }

      event.preventDefault();

      if (gesture.timer !== null) {
        window.clearTimeout(gesture.timer);
      }

      gesture.timer = window.setTimeout(() => {
        gesture.mode = "idle";
        gesture.amount = 0;
        gesture.timer = null;
      }, 300);

      // Scroll through previous messages.

      if (delta < 0) {
        gesture.mode = "history";
        gesture.amount = 0;

        container.scrollTop += delta;
        return;
      }

      if (gesture.mode === "history") {
        container.scrollTop += delta;
        return;
      }

      // Reveal only one message per gesture.

      if (gesture.mode === "revealed") {
        return;
      }

      if (!atBottom) {
        gesture.mode = "history";
        container.scrollTop += delta;
        return;
      }

      gesture.amount += delta;

      if (gesture.amount >= 24) {
        gesture.mode = "revealed";
        gesture.amount = 0;

        revealNext();
      }
    }

    chat.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      chat.removeEventListener("wheel", handleWheel);

      if (gesture.timer !== null) {
        window.clearTimeout(gesture.timer);
      }

      gesture.mode = "idle";
      gesture.amount = 0;
      gesture.timer = null;
    };
  }, [revealNext]);

  /* Mobile gestures */

  function handleTouchStart(
    event: TouchEvent<HTMLDivElement>
  ) {
    const container = conversationRef.current;
    const touch = event.touches[0];

    if (!container || !touch) return;

    touchRef.current = {
      startY: touch.clientY,
      wasAtBottom: isAtBottom(container),
    };
  }

  function handleTouchEnd(
    event: TouchEvent<HTMLDivElement>
  ) {
    const gesture = touchRef.current;
    const touch = event.changedTouches[0];

    touchRef.current = null;

    if (!gesture || !touch) return;

    const distance = gesture.startY - touch.clientY;

    if (gesture.wasAtBottom && distance > 45) {
      revealNext();
    }
  }

  /* Keyboard navigation */

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>
  ) {
    if (
      event.key !== "ArrowDown" &&
      event.key !== "PageDown" &&
      event.key !== " "
    ) {
      return;
    }

    if (
      isAtBottom(event.currentTarget) &&
      countRef.current < conversation.length
    ) {
      event.preventDefault();
      revealNext();
    }
  }

  /* Scroll to newest message */

  useEffect(() => {
    const container = conversationRef.current;

    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const frame = window.requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [visibleCount]);

  return (
    <main className={styles.beyond}>
      <div className={layoutStyles.container}>
        <div className={styles.layout}>

          {/* Introduction */}

          <header className={styles.intro}>
            <span className={styles.label}>
              BEYOND THE CODE
            </span>

            <h1 className={styles.title}>
              Let's chat
              <span className={typographyStyles.accent}>.</span>
            </h1>

            <p className={styles.subtitle}>
              A little less about what I do,
              and a little more about who I am.
            </p>

            <span
              className={`${styles.introNote} ${typographyStyles.metaLabel}`}
            >
              GET TO KNOW ME, ONE MESSAGE AT A TIME.
            </span>
          </header>

          {/* Chat */}

          <section
            ref={chatRef}
            className={styles.chat}
            aria-label="A conversation with Gabi"
          >

            {/* Chat header */}

            <div className={styles.chatHeader}>
              <div className={styles.profileAvatar}>
                g.
              </div>

              <div className={styles.profileInfo}>
                <span className={styles.profileName}>
                  Gabriela Felgueiras
                </span>

                <span className={styles.profileDescription}>
                  A little conversation beyond the code
                </span>
              </div>
            </div>

            {/* Messages */}

            <div
              ref={conversationRef}
              className={styles.conversation}
              role="log"
              aria-label="Conversation messages"
              aria-live="polite"
              aria-relevant="additions"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <ol className={styles.messages}>
                {conversation
                  .slice(0, visibleCount)
                  .map((message) => {
                    const isGabi = message.speaker === "gabi";

                    return (
                      <li
                        key={message.id}
                        className={[
                          styles.message,
                          isGabi
                            ? styles.gabiMessage
                            : styles.visitorMessage,
                          message.followUp
                            ? styles.followUp
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        aria-label={`${
                          isGabi ? "Gabi" : "You"
                        }: ${message.text}`}
                      >
                        {isGabi && (
                          <span
                            className={`${styles.messageAvatar} ${
                              message.followUp
                                ? styles.hiddenAvatar
                                : ""
                            }`}
                            aria-hidden="true"
                          >
                            g.
                          </span>
                        )}

                        <p className={styles.bubble}>
                          {message.text}
                        </p>
                      </li>
                    );
                  })}

                {/* Final message */}

                {isFinished && (
                  <li className={styles.ending}>
                    <Link
                      to="/contact"
                      className={`${linkStyles.accentLink} ${styles.contactLink}`}
                    >
                      Continue the conversation
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                )}
              </ol>
            </div>

            {/* Chat footer */}

            <div className={styles.chatFooter}>
              {isFinished ? (
                <span
                  className={`${styles.finishedText} ${typographyStyles.metaLabel}`}
                >
                  THAT'S ALL FOR NOW
                </span>
              ) : (
                <button
                  type="button"
                  className={styles.nextButton}
                  onClick={revealNext}
                >
                  <span>SCROLL TO CONTINUE</span>
                  <span aria-hidden="true">↓</span>
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default BeyondPage;