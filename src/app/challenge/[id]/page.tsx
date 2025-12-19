'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { challenges, recentSubmissions } from '@/lib/mockData';
import PromptInput from '@/components/PromptInput';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface SubmissionResult {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  response: string;
}

export default function ChallengePage() {
  const params = useParams();
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const challenge = challenges.find((c) => c.id === params.id);

  if (!challenge) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-white mb-4">Challenge not found</h1>
        <Link href="/" className="text-slate-400 hover:text-white text-sm">
          Back to challenges
        </Link>
      </div>
    );
  }

  const handleSubmit = (submissionResult: SubmissionResult) => {
    setResult(submissionResult);
  };

  const challengeSubmissions = recentSubmissions.filter(
    (s) => s.challengeId === challenge.id
  );

  const baselineTotal = challenge.baselineInput + challenge.baselineOutput;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-sm mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      {/* Challenge Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-white">{challenge.title}</h1>
          <span className={`text-xs font-medium ${
            challenge.difficulty === 'easy' ? 'text-green-400' :
            challenge.difficulty === 'medium' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {challenge.difficulty}
          </span>
        </div>
        <p className="text-slate-400">{challenge.description}</p>
      </div>

      {/* Challenge Info */}
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 mb-6">
        <div className="mb-4">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Task</div>
          <p className="text-sm text-white">{challenge.targetTask}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-slate-700/50">
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">Input</div>
            <div className="font-mono text-white">{challenge.baselineInput}</div>
          </div>
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">Output</div>
            <div className="font-mono text-white">{challenge.baselineOutput}</div>
          </div>
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">Total</div>
            <div className="font-mono text-white font-semibold">{baselineTotal}</div>
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Example</div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-slate-500">Input:</span>{' '}
              <span className="text-slate-300">{challenge.exampleInput}</span>
            </div>
            <div>
              <span className="text-slate-500">Output:</span>{' '}
              <span className="text-slate-300">{challenge.exampleOutput}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className="bg-slate-800/50 rounded-xl border border-green-500/30 p-5 mb-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white mb-1">Result</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">Input</div>
              <div className="text-2xl font-bold text-white font-mono">{result.inputTokens}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">Output</div>
              <div className="text-2xl font-bold text-white font-mono">{result.outputTokens}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">Total</div>
              <div className={`text-2xl font-bold font-mono ${
                result.totalTokens < baselineTotal ? 'text-green-400' : 'text-white'
              }`}>
                {result.totalTokens}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-4 mb-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Response</div>
            <p className="text-sm text-slate-300">{result.response}</p>
          </div>

          <button
            onClick={() => setResult(null)}
            className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      )}

      {/* Prompt Input */}
      {!result && (
        <div className="mb-6">
          <PromptInput challenge={challenge} onSubmit={handleSubmit} />
        </div>
      )}

      {/* Recent Submissions */}
      {challengeSubmissions.length > 0 && (
        <div>
          <h2 className="text-xs text-slate-500 uppercase tracking-wider mb-3">
            Recent Submissions
          </h2>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-4 py-2 border-b border-slate-700/50 text-xs text-slate-500">
              <div>User</div>
              <div className="text-right">Input</div>
              <div className="text-right">Output</div>
              <div className="text-right">Total</div>
            </div>
            {challengeSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="grid grid-cols-4 gap-4 px-4 py-3 border-b border-slate-700/50 last:border-0"
              >
                <div className="text-sm text-white">{sub.username}</div>
                <div className="text-sm text-slate-400 font-mono text-right">{sub.inputTokens}</div>
                <div className="text-sm text-slate-400 font-mono text-right">{sub.outputTokens}</div>
                <div className="text-sm text-white font-mono text-right font-semibold">{sub.totalTokens}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
