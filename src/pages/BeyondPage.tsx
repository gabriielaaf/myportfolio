import { useEffect, useRef, useState } from "react";

import {
  beyondQuestions,
  openingMessage,
  type BeyondQuestion,
} from "../data/beyond";

import styles from "./BeyondPage.module.css";

interface Message {
  id: string;
  sender: "visitor" | "gabi";
  text: string;
}

function BeyondPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [askedIds, setAskedIds] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversationRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const remainingQuestions = beyondQuestions.filter(
    (question) => !askedIds.includes(question.id)
  );

  useEffect(() => {
    const conversation = conversationRef.current;

    if (!conversation) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    conversation.scrollTo({
      top: conversation.scrollHeight,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function askQuestion(question: BeyondQuestion) {
    if (isTyping || askedIds.includes(question.id)) return;

    setAskedIds((previous) => [...previous, question.id]);

    setMessages((previous) => [
      ...previous,
      {
        id: `question-${question.id}`,
        sender: "visitor",
        text: question.question,
      },
    ]);

    setIsTyping(true);

    timeoutRef.current = window.setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: `answer-${question.id}`,
          sender: "gabi",
          text: question.answer,
        },
      ]);

      setIsTyping(false);
      timeoutRef.current = null;
    }, 650);
  }

  function restartConversation() {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setMessages([]);
    setAskedIds([]);
    setIsTyping(false);
  }

  return (
    <main className={styles.beyond}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* Introduction */}

          <header className={styles.intro}>
            <span className={styles.label}>
              BEYOND THE CODE
            </span>

            <h1 className={styles.title}>
              Let's chat
              <span className={styles.accent}>.</span>
            </h1>

            <p className={styles.subtitle}>
              A few things you won't find on my CV.
              Pick a question and get to know me a little better.
            </p>
          </header>

          {/* Conversation */}

          <section
            className={styles.chat}
            aria-label="Get to know me"
          >
            <div
              ref={conversationRef}
              className={styles.conversation}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Conversation"
            >
              <div
                className={`${styles.message} ${styles.gabiMessage}`}
              >
                <span className={styles.sender}>GABI</span>

                <p className={styles.messageText}>
                  {openingMessage}
                </p>
              </div>

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender === "gabi"
                      ? styles.gabiMessage
                      : styles.visitorMessage
                  }`}
                >
                  <span className={styles.sender}>
                    {message.sender === "gabi" ? "GABI" : "YOU"}
                  </span>

                  <p className={styles.messageText}>
                    {message.text}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div
                  className={`${styles.message} ${styles.gabiMessage}`}
                >
                  <span className={styles.sender}>GABI</span>

                  <div
                    className={styles.typing}
                    aria-label="Gabi is replying"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>

            {/* Questions */}

            <div className={styles.questions}>
              <div className={styles.questionsHeader}>
                <span>YOUR TURN</span>

                {askedIds.length > 0 && (
                  <button
                    type="button"
                    className={styles.restart}
                    onClick={restartConversation}
                  >
                    Start again ↺
                  </button>
                )}
              </div>

              {remainingQuestions.length > 0 ? (
                <div className={styles.questionList}>
                  {remainingQuestions.map((question) => (
                    <button
                      key={question.id}
                      type="button"
                      className={styles.questionButton}
                      onClick={() => askQuestion(question)}
                      disabled={isTyping}
                    >
                      <span>{question.question}</span>

                      <span
                        className={styles.arrow}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className={styles.endMessage}>
                  That's a little more about me.
                  Thanks for stopping by!
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default BeyondPage;