import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-blue text-white">
      <div className="mb-4 text-3xl font-serif tracking-widest animate-pulse">
        g.f.t.s. Members
      </div>
      <Loader2 className="w-8 h-8 animate-spin text-white/80" />
      <p className="mt-4 text-sm font-light tracking-wide text-white/70">
        Loading Experience...
      </p>
    </div>
  );
};