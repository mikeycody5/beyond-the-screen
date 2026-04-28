"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export function PodcastPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const fakeBars = Array.from({ length: 64 }, (_, i) => {
    const seed = Math.sin(i * 0.6) * 0.5 + 0.5;
    return 18 + seed * 56;
  });

  return (
    <div className="rounded-[40px] border-[3px] border-ink bg-bone chunky p-8 md:p-10">
      <div className="flex items-start gap-6">
        <div className="relative h-28 w-28 flex-none overflow-hidden rounded-[28px] border-[3px] border-ink bg-pink md:h-36 md:w-36">
          <div className="absolute inset-0 bg-gradient-to-br from-pink to-orange" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-bone md:text-6xl">
            BTS
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-pink">
            Episode 01
          </p>
          <h3 className="mt-1 font-display text-3xl text-ink md:text-4xl">
            Reclaiming the Quiet
          </h3>
          <p className="mt-2 text-sm font-medium text-ink-soft">
            Beyond the Screen · 5 min · Hosted by Shaylyn Kerrigan
          </p>
        </div>
      </div>

      {/* Waveform */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-16 w-16 flex-none items-center justify-center rounded-full border-[3px] border-ink bg-pink text-bone chunky transition-colors hover:bg-pink-deep"
        >
          {playing ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
        </button>
        <div
          className="relative flex h-20 flex-1 cursor-pointer items-center gap-[3px] overflow-hidden rounded-[24px] border-[3px] border-ink bg-cream px-4"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          {fakeBars.map((h, i) => {
            const pct = (i / fakeBars.length) * 100;
            const active = pct < progress;
            return (
              <motion.div
                key={i}
                animate={
                  playing
                    ? { height: [h, h * 1.15, h] }
                    : { height: h }
                }
                transition={{
                  duration: 1.4 + (i % 5) * 0.15,
                  repeat: playing ? Infinity : 0,
                  ease: "easeInOut",
                }}
                style={{ height: h }}
                className={`w-1.5 rounded-full ${active ? "bg-pink" : "bg-ink/25"}`}
              />
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm font-medium italic text-ink-soft">
        Audio file coming soon · this is a visual placeholder
      </p>
    </div>
  );
}
