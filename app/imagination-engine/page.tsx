import { Sticker } from "@/components/sticker";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { MagneticButton } from "@/components/magnetic-button";
import { PodcastPlayer } from "@/components/podcast-player";
import { FiveStar } from "@/components/star-burst";

export const metadata = {
  title: "Beyond the Screen — The Podcast",
  description:
    "A podcast for the overstimulated parent. Reclaim the quiet. Rebuild the imagination.",
};

const upcoming = [
  { ep: "02", title: "The Cardboard Doctrine", date: "May 2026", color: "bg-pink text-bone" },
  { ep: "03", title: "Why Your Kid's Brain Wants to Be Bored", date: "May 2026", color: "bg-orange text-ink" },
  { ep: "04", title: "What Geoffrey the Giraffe Knows", date: "June 2026", color: "bg-blue text-bone" },
  { ep: "05", title: "An Hour Without a Phone", date: "June 2026", color: "bg-green text-ink" },
];

export default function PodcastPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-green py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-20 confetti" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Sticker color="pink" rotate={-6}>
              ★ Beyond the Screen
            </Sticker>
            <Sticker color="blue" rotate={4}>
              The Podcast
            </Sticker>
          </div>
          <h1 className="mt-10 font-display text-[clamp(3rem,11vw,10rem)] leading-[0.85] text-ink">
            For the
            <br />
            <em className="text-pink">overstimulated</em>
            <br />
            <span className="text-blue">parent.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-ink md:text-2xl">
            A weekly invitation to hit pause. We aren&apos;t competing for
            your attention — we&apos;re helping you reclaim it.
          </p>
        </div>
      </section>

      {/* PLAYER */}
      <section className="border-b-[3px] border-ink bg-orange py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <PodcastPlayer />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b-[3px] border-ink bg-pink py-4 text-bone">
        <Marquee>
          {["RECLAIM THE QUIET", "PUT THE PHONE DOWN", "BREATHE", "NOTHING IS THE POINT"].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-3xl uppercase md:text-5xl"
            >
              {w}
              <FiveStar className="h-7 w-7 text-bone" fill="currentColor" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* PARAGRAPHS */}
      <section className="border-b-[3px] border-ink bg-pink text-bone">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker color="orange" rotate={-6}>
                Why this exists
              </Sticker>
              <Reveal>
                <h2 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
                  Address
                  <br />
                  the <em className="text-orange">guilt.</em>
                  <br />
                  Then dissolve it.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-lg text-bone md:col-span-7 md:pt-10">
              <Reveal delay={0.15}>
                <p className="text-xl md:text-2xl">
                  Every parent we&apos;ve interviewed in the past year has
                  used the phrase{" "}
                  <span className="rounded-md bg-orange px-2 py-0.5 font-bold text-ink">
                    &quot;digital babysitter&quot;
                  </span>{" "}
                  — usually with a short, apologetic laugh. Beyond the Screen
                  is built for that exact laugh.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Episodes feature ambient sounds layered under the dialogue,
                  specifically tuned to help a parent&apos;s nervous system
                  regulate while they listen. The goal is not just
                  information. The goal is a calmer parent — because a calmer
                  parent is the single biggest gift we can give a developing
                  brain.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIQUE NOTE */}
      <section className="border-b-[3px] border-ink bg-blue py-24 text-bone md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Sticker color="orange" rotate={-4}>
            Technique Note
          </Sticker>
          <Reveal>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-6xl">
              We mix ambient grocery-store hum,
              lo-fi piano, and breath cues into every
              episode — so your nervous system{" "}
              <em className="text-orange">regulates while you listen.</em>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* EPISODE LIST BENTO */}
      <section className="border-b-[3px] border-ink bg-orange">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Sticker color="pink" rotate={-4}>
            The Series
          </Sticker>
          <Reveal>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              Upcoming
              <br />
              <em className="text-blue">episodes.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {upcoming.map((e, i) => (
              <Reveal key={e.ep} delay={i * 0.08}>
                <div
                  className={`flex items-center justify-between rounded-[32px] border-[3px] border-ink ${e.color} chunky p-8`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-display text-6xl">{e.ep}</span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">
                        {e.title}
                      </h3>
                      <p className="text-sm font-bold uppercase tracking-wide opacity-80">
                        {e.date} · Coming soon
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border-2 border-current px-3 py-1 text-xs font-bold uppercase">
                    Pre-save
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink text-bone py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Sticker color="green" rotate={-4}>
            Weekly podcast
          </Sticker>
          <h2 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
            Every event…
            <br />
            by the <em className="text-blue">Beyond the Screen</em>
            <br />
            <span className="text-orange">podcast.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/90 md:text-xl">
            New episodes drop every week. Sign up for the feed and we&apos;ll
            send each one straight to your inbox — no live taping required.
          </p>
          <div className="mt-10">
            <MagneticButton href="/register" color="ink">
              Sign up
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
