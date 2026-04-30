import Image from "next/image";
import { Sticker } from "@/components/sticker";
import { Reveal } from "@/components/reveal";
import { Marquee, MARQUEE_WORDS } from "@/components/marquee";
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
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <Sticker color="pink" rotate={-6}>
                  ★ Beyond the Screen
                </Sticker>
                <Sticker color="blue" rotate={4}>
                  The Podcast
                </Sticker>
              </div>
              <h1 className="mt-10 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] text-ink">
                For the
                <br />
                <em className="text-pink">overstimulated</em>
                <br />
                <span className="text-blue">parent.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-xl text-ink md:text-2xl">
                We know the modern parent&apos;s struggle because we live it
                too. There is an immense amount of{" "}
                <span className="rounded-md bg-orange px-2 py-0.5 font-bold">
                  &quot;digital guilt&quot;
                </span>{" "}
                associated with parenting in 2026.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px] border-[3px] border-ink bg-blue chunky">
                <Image
                  src="/Toysrusstore.png"
                  alt="Geoffrey the Giraffe greeting visitors at the Toys R Us flagship"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
                <div className="absolute left-4 top-4">
                  <Sticker color="orange" rotate={-6}>
                    ★ Geoffrey is back
                  </Sticker>
                </div>
              </div>
            </div>
          </div>
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
          {MARQUEE_WORDS.map((w, i) => (
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
                  Whether it&apos;s the long car ride or the need to finish a
                  work email, the tablet often feels like the only solution.
                  Our new podcast,{" "}
                  <em className="font-bold text-orange">
                    The Imagination Toys &amp; Tools
                  </em>
                  , is designed specifically for you. It&apos;s a resource to
                  help you navigate the noise and understand that your
                  child&apos;s boredom isn&apos;t a problem to be solved,
                  it&apos;s an{" "}
                  <span className="squiggle font-bold text-ink">
                    opportunity to be celebrated.
                  </span>
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Each episode of the podcast is designed to be a{" "}
                  <span className="rounded-md bg-orange px-2 py-0.5 font-bold text-ink">
                    &quot;nervous system reset.&quot;
                  </span>{" "}
                  We utilize sounds and rhythms to help you regulate your own
                  stress while we discuss evidence based strategies for a
                  life of digital minimalism.
                </p>
              </Reveal>
            </div>
          </div>
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

          <Reveal delay={0.15} className="mt-8">
            <p className="max-w-3xl text-lg text-ink md:text-xl">
              From boredom challenges, you can do at home to interviews with
              the child psychologist, the series is your guide to reclaiming
              the quiet in your house and building your child&apos;s brain.
            </p>
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
            send each one straight to your inbox, no live taping required.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base italic text-bone/90 md:text-lg">
            Turn the volume down, take a breath, and let&apos;s explore how
            we can help our children and ourselves to find the beauty in the{" "}
            <span className="rounded-md bg-orange px-2 py-0.5 not-italic font-bold text-ink">
              &quot;void.&quot;
            </span>
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
