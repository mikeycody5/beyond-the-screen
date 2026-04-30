"use client";

export function PodcastPlayer() {
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
            Beyond the Screen · Hosted by Shaylyn Kerrigan
          </p>
        </div>
      </div>

      <audio
        controls
        preload="metadata"
        src="/podcast-episode-1.m4a"
        className="mt-8 w-full"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
