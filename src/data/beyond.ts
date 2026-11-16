export interface BeyondQuestion {
  id: string;
  question: string;
  answer: string;
}

export const openingMessage =
  "Hey! I'm Gabi. You've seen a little of my work, but there's more to me than code. What would you like to know?";

export const beyondQuestions: BeyondQuestion[] = [
  {
    id: "outside-code",
    question: "What do you enjoy outside of coding?",
    answer:
      "I love finding little ways to be creative, trying new things and spending time with the people who matter to me. Sometimes the best ideas come when I'm away from my laptop.",
  },
  {
    id: "curiosity",
    question: "What keeps you curious?",
    answer:
      "I enjoy stepping outside my comfort zone. There's something exciting about starting with something unfamiliar and discovering what I can learn along the way.",
  },
  {
    id: "values",
    question: "What's important to you?",
    answer:
      "Definitely the people I share experiences with. I value genuine connections, good conversations and being surrounded by people who inspire me.",
  },
  {
    id: "future",
    question: "What's next for you?",
    answer:
      "Hopefully lots of new experiences, interesting people and unexpected opportunities. I want to keep exploring, learning and collecting good stories along the way.",
  },
];