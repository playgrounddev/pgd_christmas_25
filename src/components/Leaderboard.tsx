'use client';

import { LeaderboardEntry } from '@/types';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  compact?: boolean;
}

export default function Leaderboard({ entries, compact = false }: LeaderboardProps) {
  const displayEntries = compact ? entries.slice(0, 5) : entries;

  if (compact) {
    return (
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
        <div className="divide-y divide-slate-700/50">
          {displayEntries.map((entry) => (
            <div
              key={entry.userId}
              className="flex items-center gap-4 px-4 py-3 hover:bg-slate-700/30 transition-colors"
            >
              <span className={`w-6 text-center font-mono text-sm ${
                entry.rank === 1 ? 'text-yellow-400' :
                entry.rank === 2 ? 'text-slate-400' :
                entry.rank === 3 ? 'text-orange-400' :
                'text-slate-600'
              }`}>
                {entry.rank}
              </span>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm truncate">
                  {entry.username}
                </div>
              </div>

              <div className="text-right">
                <div className="font-medium text-white font-mono text-sm">
                  {entry.totalTokens}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/leaderboard" className="block px-4 py-3 border-t border-slate-700/50 text-center hover:bg-slate-700/30 transition-colors">
          <span className="text-sm text-slate-500 hover:text-slate-400 flex items-center justify-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
      <div className="grid grid-cols-5 gap-4 px-4 py-2 border-b border-slate-700/50 text-xs text-slate-500">
        <div>Rank</div>
        <div>User</div>
        <div className="text-right">Input</div>
        <div className="text-right">Output</div>
        <div className="text-right">Total</div>
      </div>
      <div className="divide-y divide-slate-700/50">
        {displayEntries.map((entry) => (
          <div
            key={entry.userId}
            className="grid grid-cols-5 gap-4 px-4 py-3 hover:bg-slate-700/30 transition-colors"
          >
            <span className={`font-mono text-sm ${
              entry.rank === 1 ? 'text-yellow-400' :
              entry.rank === 2 ? 'text-slate-400' :
              entry.rank === 3 ? 'text-orange-400' :
              'text-slate-600'
            }`}>
              {entry.rank}
            </span>

            <div className="font-medium text-white text-sm truncate">
              {entry.username}
            </div>

            <div className="text-right font-mono text-sm text-slate-400">
              {entry.inputTokens}
            </div>

            <div className="text-right font-mono text-sm text-slate-400">
              {entry.outputTokens}
            </div>

            <div className="text-right font-mono text-sm text-white font-semibold">
              {entry.totalTokens}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
