'use client';

import { useState, useEffect } from 'react';
import { Challenge } from '@/types';
import { countTokens, mockAIResponse } from '@/lib/mockData';
import { Loader2 } from 'lucide-react';

interface PromptInputProps {
  challenge: Challenge;
  onSubmit: (result: { inputTokens: number; outputTokens: number; totalTokens: number; response: string }) => void;
}

export default function PromptInput({ challenge, onSubmit }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [inputTokens, setInputTokens] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setInputTokens(countTokens(prompt));
  }, [prompt]);

  const handleSubmit = async () => {
    if (!prompt.trim() || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const result = mockAIResponse(prompt, challenge);
    onSubmit(result);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your optimized prompt..."
        className="w-full h-32 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 resize-none font-mono text-sm"
      />

      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-slate-500">Input: </span>
          <span className="font-mono text-white">{inputTokens}</span>
          <span className="text-slate-600"> tokens</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!prompt.trim() || isSubmitting}
        className={`w-full py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
          !prompt.trim() || isSubmitting
            ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
            : 'bg-white text-slate-900 hover:bg-slate-100'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Running...
          </>
        ) : (
          'Submit'
        )}
      </button>
    </div>
  );
}
