'use client';

import { useEffect, useState } from 'react';
import { Snowflake } from 'lucide-react';

interface SnowflakeData {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
  size: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<SnowflakeData[]>([]);

  useEffect(() => {
    const flakes: SnowflakeData[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: Math.random() * 10,
      opacity: 0.05 + Math.random() * 0.1,
      size: 10 + Math.random() * 14
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-slate-400 animate-fall"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            opacity: flake.opacity
          }}
        >
          <Snowflake style={{ width: flake.size, height: flake.size }} />
        </div>
      ))}
    </div>
  );
}
