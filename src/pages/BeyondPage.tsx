import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

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
    followUp?: boolean;
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

    /* Conversation scroll */

    useEffect(() => {
        const conversation = conversationRef.current;

        if (!conversation) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        conversation.scrollTo({
            top: conversation.scrollHeight,
            behavior: reducedMotion ? "auto" : "smooth",
        });
    }, [messages, isTyping]);

    /* Cleanup */

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    /* Ask question */

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
                    id: `answer-${question.id}-1`,
                    sender: "gabi",
                    text: question.answers[0],
                },
            ]);

            timeoutRef.current = window.setTimeout(() => {
                setMessages((previous) => [
                    ...previous,
                    {
                        id: `answer-${question.id}-2`,
                        sender: "gabi",
                        text: question.answers[1],
                        followUp: true,
                    },
                ]);

                setIsTyping(false);
                timeoutRef.current = null;
            }, 1200);
        }, 700);
    }

    /* Restart conversation */

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
                            There's more to a person than what they do.
                            Pick a question and get to know me a little better.
                        </p>

                        <div className={styles.introDetail}>
                            <span className={styles.detailLine} />

                            <span>
                                A LITTLE CONVERSATION WITH GABI
                            </span>
                        </div>
                    </header>

                    {/* Conversation */}

                    <section
                        className={styles.chat}
                        aria-label="Get to know me"
                    >
                        <div className={styles.chatHeader}>
                            <span>THE CONVERSATION</span>

                            <span className={styles.chatNumber}>
                                01 — 04
                            </span>
                        </div>

                        <div
                            ref={conversationRef}
                            className={styles.conversation}
                            role="log"
                            aria-live="polite"
                            aria-relevant="additions"
                            aria-label="Conversation"
                        >

                            {/* Opening message */}

                            <div
                                className={`${styles.message} ${styles.gabiMessage}`}
                            >
                                <span className={styles.sender}>
                                    GABI
                                </span>

                                <p className={styles.messageText}>
                                    {openingMessage}
                                </p>
                            </div>

                            {/* Messages */}

                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`${styles.message} ${message.sender === "gabi"
                                            ? styles.gabiMessage
                                            : styles.visitorMessage
                                        } ${message.followUp ? styles.followUp : ""}`}
                                >
                                    <span className={styles.sender}>
                                        {message.sender === "gabi" ? "GABI" : "YOU"}
                                    </span>

                                    <p className={styles.messageText}>
                                        {message.text}
                                    </p>
                                </div>
                            ))}

                            {/* Typing */}

                            {isTyping && (
                                <div
                                    className={`${styles.message} ${styles.gabiMessage}`}
                                >
                                    <span className={styles.sender}>
                                        GABI
                                    </span>

                                    <div
                                        className={styles.typing}
                                        role="status"
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
                                <span>
                                    WHAT WOULD YOU LIKE TO KNOW?
                                </span>

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
                                    {remainingQuestions.map((question, index) => (
                                        <button
                                            key={question.id}
                                            type="button"
                                            className={styles.questionButton}
                                            onClick={() => askQuestion(question)}
                                            disabled={isTyping}
                                        >
                                            <span className={styles.questionNumber}>
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className={styles.questionText}>
                                                {question.question}
                                            </span>

                                            <span
                                                className={styles.questionArrow}
                                                aria-hidden="true"
                                            >
                                                ↗
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                !isTyping && (
                                    <div className={styles.conversationEnd}>
                                        <p>
                                            Well, now you know a little more about me!
                                            Maybe we'll get to chat for real someday.
                                        </p>

                                        <Link
                                            to="/contact"
                                            className={styles.contactLink}
                                        >
                                            Say hello
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                    </div>
                                )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default BeyondPage;