export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  baselineInput: number;
  baselineOutput: number;
  targetTask: string;
  exampleInput: string;
  exampleOutput: string;
}

export interface Submission {
  id: string;
  challengeId: string;
  userId: string;
  username: string;
  prompt: string;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  timestamp: Date;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar: string;
  challengesCompleted: number;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  totalScore: number;
}
