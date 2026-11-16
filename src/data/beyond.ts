export type ConversationSpeaker = "gabi" | "visitor";

export interface ConversationMessage {
  id: string;
  speaker: ConversationSpeaker;
  text: string;
  followUp?: boolean;
}

export const conversation: ConversationMessage[] = [
  {
    id: "intro-1",
    speaker: "gabi",
    text: "Hey there! I'm Gabi.",
  },
  {
    id: "intro-2",
    speaker: "gabi",
    text: "You've already seen a little of what I do. But there's more to me than code!",
    followUp: true,
  },

  {
    id: "series-question",
    speaker: "visitor",
    text: "So, what do you usually do when you're not coding?",
  },
  {
    id: "series-answer-1",
    speaker: "gabi",
    text: "I'm a huge fan of TV series! Especially crime, drama and romance.",
  },
  {
    id: "series-answer-2",
    speaker: "gabi",
    text: "Castle and The Mentalist are my absolute favourites. Give me a good mystery and I'm hooked!",
    followUp: true,
  },

  {
    id: "projects-question",
    speaker: "visitor",
    text: "Do you ever code just for fun?",
  },
  {
    id: "projects-answer-1",
    speaker: "gabi",
    text: "Oh, absolutely! I love coming up with little ideas and turning them into personal projects.",
  },
  {
    id: "projects-answer-2",
    speaker: "gabi",
    text: "It's where I get to experiment, try new things and put everything I've learned into practice.",
    followUp: true,
  },

  {
    id: "hackathons-question",
    speaker: "visitor",
    text: "I've noticed you really like hackathons. What's so special about them?",
  },
  {
    id: "hackathons-answer-1",
    speaker: "gabi",
    text: "Oh, don't even get me started! I love the atmosphere, the challenge and the excitement of building something under pressure.",
  },
  {
    id: "hackathons-answer-2",
    speaker: "gabi",
    text: "And the teamwork makes it even better. Sharing that experience with the right people is honestly my favourite part.",
    followUp: true,
  },

  {
    id: "challenges-question",
    speaker: "visitor",
    text: "You seem like someone who's always looking for a challenge.",
  },
  {
    id: "challenges-answer-1",
    speaker: "gabi",
    text: "That's pretty accurate! I'm really dedicated to what I do, and I love trying things I've never done before.",
  },
  {
    id: "challenges-answer-2",
    speaker: "gabi",
    text: "Stepping outside my comfort zone isn't always easy, but I think that's when I grow the most.",
    followUp: true,
  },

  {
    id: "outro-1",
    speaker: "gabi",
    text: "Well, that's a little more about me!",
  },
  {
    id: "outro-2",
    speaker: "gabi",
    text: "Now I'd love to hear from you. Maybe we can continue this conversation sometime?",
    followUp: true,
  },
];