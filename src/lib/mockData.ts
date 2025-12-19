import { Challenge, LeaderboardEntry, Submission } from '@/types';

export const challenges: Challenge[] = [
  {
    id: 'santa-letter',
    title: "Santa's Letter Generator",
    description: "Write a prompt that generates personalized letters from Santa. The catch? Keep it short and sweet - every token counts!",
    icon: "gift",
    difficulty: 'easy',
    baselineInput: 50,
    baselineOutput: 100,
    targetTask: "Generate a warm, personalized letter from Santa to a child",
    exampleInput: "Child's name: Emma, Age: 7, Gift wished: Bicycle",
    exampleOutput: "Dear Emma, Ho ho ho! I've been watching you all year and you've been such a good girl..."
  },
  {
    id: 'gift-wrapper',
    title: "Gift Wrapping Instructions",
    description: "Create an efficient prompt that explains how to wrap oddly-shaped gifts. Precision matters!",
    icon: "package",
    difficulty: 'easy',
    baselineInput: 60,
    baselineOutput: 140,
    targetTask: "Provide step-by-step gift wrapping instructions for unusual shapes",
    exampleInput: "Item: Guitar, Paper available: 2 sheets",
    exampleOutput: "1. Lay guitar diagonally on paper... 2. Fold corners inward..."
  },
  {
    id: 'cookie-recipe',
    title: "Mrs. Claus's Cookie Creator",
    description: "Design a prompt that generates unique Christmas cookie recipes. Fewer tokens = more cookies for Santa!",
    icon: "cookie",
    difficulty: 'medium',
    baselineInput: 70,
    baselineOutput: 180,
    targetTask: "Generate a creative Christmas cookie recipe with ingredients and instructions",
    exampleInput: "Flavor profile: Gingerbread with a twist, Dietary: Gluten-free",
    exampleOutput: "Gluten-Free Gingerbread Snowflakes: Ingredients: 2 cups almond flour..."
  },
  {
    id: 'carol-composer',
    title: "Christmas Carol Composer",
    description: "Craft a prompt that writes new verses for classic carols. Make it jolly but token-efficient!",
    icon: "music",
    difficulty: 'medium',
    baselineInput: 80,
    baselineOutput: 220,
    targetTask: "Write a new verse for a classic Christmas carol",
    exampleInput: "Carol: Jingle Bells, Theme: Space travel",
    exampleOutput: "Dashing through the stars, in a rocket sleigh so bright..."
  },
  {
    id: 'elf-scheduler',
    title: "Elf Workshop Scheduler",
    description: "Build a prompt that creates efficient toy production schedules. Santa needs those toys on time!",
    icon: "calendar",
    difficulty: 'hard',
    baselineInput: 100,
    baselineOutput: 300,
    targetTask: "Create an optimized production schedule for Santa's workshop",
    exampleInput: "Toys needed: 1000 dolls, 500 trains, 750 robots. Elves available: 50. Days until Christmas: 10",
    exampleOutput: "Day 1-3: Team A (25 elves) - Dolls production, Team B (25 elves) - Robot assembly..."
  },
  {
    id: 'reindeer-router',
    title: "Reindeer Route Optimizer",
    description: "Create a prompt that plans Santa's delivery route. Every token saved means faster deliveries!",
    icon: "map",
    difficulty: 'hard',
    baselineInput: 120,
    baselineOutput: 380,
    targetTask: "Optimize Santa's delivery route across multiple locations",
    exampleInput: "Locations: New York, London, Tokyo, Sydney, Paris. Constraints: Start at North Pole, return by dawn",
    exampleOutput: "Optimal route considering time zones: North Pole -> Sydney (first sunset) -> Tokyo -> ..."
  }
];

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: 'user-1',
    username: 'PromptElf2024',
    avatar: 'user',
    challengesCompleted: 6,
    inputTokens: 185,
    outputTokens: 420,
    totalTokens: 605
  },
  {
    rank: 2,
    userId: 'user-2',
    username: 'TokenSanta',
    avatar: 'user',
    challengesCompleted: 5,
    inputTokens: 210,
    outputTokens: 480,
    totalTokens: 690
  },
  {
    rank: 3,
    userId: 'user-3',
    username: 'FrostyOptimizer',
    avatar: 'user',
    challengesCompleted: 6,
    inputTokens: 245,
    outputTokens: 510,
    totalTokens: 755
  },
  {
    rank: 4,
    userId: 'user-4',
    username: 'JingleHacker',
    avatar: 'user',
    challengesCompleted: 4,
    inputTokens: 198,
    outputTokens: 580,
    totalTokens: 778
  },
  {
    rank: 5,
    userId: 'user-5',
    username: 'NorthPoleAI',
    avatar: 'user',
    challengesCompleted: 5,
    inputTokens: 275,
    outputTokens: 540,
    totalTokens: 815
  },
  {
    rank: 6,
    userId: 'user-6',
    username: 'MistletoeML',
    avatar: 'user',
    challengesCompleted: 4,
    inputTokens: 290,
    outputTokens: 620,
    totalTokens: 910
  },
  {
    rank: 7,
    userId: 'user-7',
    username: 'SleighRider',
    avatar: 'user',
    challengesCompleted: 3,
    inputTokens: 180,
    outputTokens: 750,
    totalTokens: 930
  },
  {
    rank: 8,
    userId: 'user-8',
    username: 'CandyCaneCode',
    avatar: 'user',
    challengesCompleted: 4,
    inputTokens: 320,
    outputTokens: 680,
    totalTokens: 1000
  }
];

export const recentSubmissions: Submission[] = [
  {
    id: 'sub-1',
    challengeId: 'santa-letter',
    userId: 'user-1',
    username: 'PromptElf2024',
    prompt: 'Write Santa letter for {name}, {age}yo wanting {gift}. Warm, brief.',
    inputTokens: 18,
    outputTokens: 65,
    totalTokens: 83,
    timestamp: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: 'sub-2',
    challengeId: 'cookie-recipe',
    userId: 'user-2',
    username: 'TokenSanta',
    prompt: 'Xmas cookie: {flavor}, {dietary}. List ingredients, steps.',
    inputTokens: 22,
    outputTokens: 120,
    totalTokens: 142,
    timestamp: new Date(Date.now() - 1000 * 60 * 15)
  },
  {
    id: 'sub-3',
    challengeId: 'reindeer-router',
    userId: 'user-1',
    username: 'PromptElf2024',
    prompt: 'Route: {locations}. Optimize for timezone delivery. Start/end North Pole.',
    inputTokens: 45,
    outputTokens: 180,
    totalTokens: 225,
    timestamp: new Date(Date.now() - 1000 * 60 * 30)
  }
];

// Mock function to simulate token counting
export function countTokens(text: string): number {
  // Simple approximation: ~4 characters per token on average
  return Math.ceil(text.length / 4);
}

// Mock function to simulate AI response and count output tokens
export function mockAIResponse(prompt: string, challenge: Challenge): {
  response: string;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
} {
  const inputTokens = countTokens(prompt);
  // Simulate output tokens based on prompt efficiency
  // Better prompts = more concise outputs
  const efficiency = Math.max(0.5, 1 - (inputTokens / (challenge.baselineInput * 2)));
  const outputTokens = Math.floor(challenge.baselineOutput * (0.6 + Math.random() * 0.4 * efficiency));

  return {
    response: challenge.exampleOutput,
    inputTokens,
    outputTokens,
    totalTokens: inputTokens + outputTokens
  };
}
