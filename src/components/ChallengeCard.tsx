'use client';

import { Challenge } from '@/types';
import Link from 'next/link';
import { Gift, Package, Cookie, Music, Calendar, Map, ChevronRight } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
}

const difficultyColors = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400'
};

const iconMap: Record<string, React.ReactNode> = {
  gift: <Gift className="w-5 h-5" />,
  package: <Package className="w-5 h-5" />,
  cookie: <Cookie className="w-5 h-5" />,
  music: <Music className="w-5 h-5" />,
  calendar: <Calendar className="w-5 h-5" />,
  map: <Map className="w-5 h-5" />
};

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const baselineTotal = challenge.baselineInput + challenge.baselineOutput;

  return (
    <Link href={`/challenge/${challenge.id}`}>
      <div className="group bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800 transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 group-hover:text-white transition-colors">
            {iconMap[challenge.icon] || <Gift className="w-5 h-5" />}
          </div>
          <span className={`text-xs font-medium ${difficultyColors[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
        </div>

        <h3 className="font-semibold text-white mb-2 group-hover:text-white transition-colors">
          {challenge.title}
        </h3>

        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {challenge.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600 font-mono">
            {baselineTotal} tokens
          </span>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
