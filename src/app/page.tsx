import ChallengeCard from '@/components/ChallengeCard';
import Leaderboard from '@/components/Leaderboard';
import { challenges, leaderboard } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Playground Dev
        </h1>
        <p className="text-xl text-slate-500 mb-6">
          Christmas Prompt Challenge
        </p>
        <p className="text-slate-400 max-w-lg mx-auto">
          Write efficient prompts, save tokens, and compete for the top spot.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Challenges Grid */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              Leaderboard
            </h2>
            <Leaderboard entries={leaderboard} compact />
          </div>

          {/* How It Works */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              How It Works
            </h3>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-slate-600">1.</span>
                <span>Pick a challenge</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-600">2.</span>
                <span>Write an optimized prompt</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-600">3.</span>
                <span>See how many tokens you saved</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-600">4.</span>
                <span>Climb the leaderboard</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
