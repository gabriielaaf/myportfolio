export interface BeyondQuestion {
  id: string;
  question: string;
  answers: [string, string];
}

export const openingMessage =
  "Hey! I'm Gabi. You've seen a little of my work, but there's more to me than that. Want to find out?";

export const beyondQuestions: BeyondQuestion[] = [
  {
    id: "series",
    question: "So, what do you like doing in your free time?",
    answers: [
      "I absolutely love watching series! Especially crime shows, drama and a little romance.",
      "Castle and The Mentalist are my all-time favourites. I never get tired of a good mystery!",
    ],
  },
  {
    id: "side-projects",
    question: "Do you ever code just for fun?",
    answers: [
      "Absolutely! I love coming up with little ideas and turning them into personal projects.",
      "It's my favourite way to experiment, try new things and put what I've learned into practice.",
    ],
  },
  {
    id: "hackathons",
    question: "What is it about hackathons that you love so much?",
    answers: [
      "Oh, where do I even start? The energy, the teamwork, the pressure of bringing an idea to life... I love all of it!",
      "But what makes it really special is sharing those moments with the right people. That's what makes me want to come back for more.",
    ],
  },
  {
    id: "challenges",
    question: "Are you someone who likes a challenge?",
    answers: [
      "Definitely! I'm really dedicated to the things I do, and I love pushing myself to try something new.",
      "Stepping outside my comfort zone isn't always easy, but I genuinely believe that's when I grow the most.",
    ],
  },
];