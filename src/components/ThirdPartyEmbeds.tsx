import React, { useState } from 'react';
import { GitBranch, Music, Calendar, Play, Pause, Check } from 'lucide-react';

export const ThirdPartyEmbeds: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'github' | 'spotify' | 'calendly'>('all');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  return (
    <section id="embeds" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Third-party integrations & ecosystem</h2>
      <p className="text-stone-300 mb-6 text-sm">
        Verified live commit telemetry, developer focus soundtrack, and consultation scheduling.
      </p>

      <div className="ui grid md:grid-cols-3 gap-5 text-sm">
        {/* GitHub Activity Card */}
        <div className="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-amber-300 font-semibold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4" />
                <span>GitHub Activity</span>
              </span>
              <span className="text-xs text-stone-400 font-mono">2,842 commits</span>
            </div>
            <p className="text-xs text-stone-300">
              Active repository: <code className="text-white bg-stone-950 px-1.5 py-0.5 rounded border border-stone-800 font-mono">nexus-flow-core</code> (v2.4.1)
            </p>
            <p className="text-xs text-stone-400">
              1,490+ open source stars on distributed vector cache engine. Sub-10ms raft consensus heartbeats.
            </p>
          </div>
          <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-500 font-mono">
            Updated today · Verified commit feed
          </div>
        </div>

        {/* Deep Focus Audio Stream */}
        <div className="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-amber-300 font-semibold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Music className="w-4 h-4" />
                <span>Deep Focus Audio</span>
              </span>
              <span className="text-xs text-emerald-400 font-mono">432Hz</span>
            </div>
            <p className="text-xs text-stone-300">
              Synthesized Ambient Frequencies for Systems Architecture.
            </p>
            <p className="text-xs text-stone-400">
              Lossless binaural audio stream designed for zero-distraction programming.
            </p>
          </div>
          <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400">
              {isPlaying ? '● Audio Active' : '○ Paused'}
            </span>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause focus stream' : 'Play focus stream'}
              className="px-3 py-1.5 rounded-md bg-amber-300 hover:bg-amber-200 text-stone-950 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? 'Pause' : 'Play Audio'}</span>
            </button>
          </div>
        </div>

        {/* Calendly Advisory Scheduling */}
        <div className="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-amber-300 font-semibold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Advisory Scheduling</span>
              </span>
              <span className="text-xs text-stone-400 font-mono">Calendly</span>
            </div>
            <p className="text-xs text-stone-300">
              30-Minute Architecture & Systems Feasibility Review.
            </p>
            <p className="text-xs text-stone-400">
              Direct technical discovery session for engineering leads, VPs, and founders.
            </p>
          </div>
          <div className="pt-2 border-t border-stone-800">
            {bookingConfirmed ? (
              <div className="text-xs text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Invite requested · Check email</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setBookingConfirmed(true)}
                className="text-xs text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                Request calendar invitation
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
