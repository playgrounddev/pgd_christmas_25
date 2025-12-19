import Leaderboard from '@/components/Leaderboard';
import { leaderboard, challenges } from '@/lib/mockData';

export default function LeaderboardPage() {
  const totalInput = leaderboard.reduce((acc, e) => acc + e.inputTokens, 0);
  const totalOutput = leaderboard.reduce((acc, e) => acc + e.outputTokens, 0);
  const totalTokens = leaderboard.reduce((acc, e) => acc + e.totalTokens, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">
          Leaderboard
        </h1>
        <p className="text-slate-500">
          Top prompt engineers
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{leaderboard.length}</div>
          <div className="text-sm text-slate-500">Players</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-400 font-mono">{totalInput}</div>
          <div className="text-sm text-slate-500">Input</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-400 font-mono">{totalOutput}</div>
          <div className="text-sm text-slate-500">Output</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white font-mono">{totalTokens}</div>
          <div className="text-sm text-slate-500">Total</div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <Leaderboard entries={leaderboard} />
    </div>
  );
}
