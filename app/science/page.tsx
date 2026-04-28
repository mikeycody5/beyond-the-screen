import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { FiveStar } from "@/components/star-burst";

export const metadata = {
  title: "The Science — Beyond the Screen",
  description:
    "A simple breakdown of the Default Mode Network and why boredom is the waiting room for brilliance.",
};

const dmnFacts = [
  {
    label: "Connects ideas",
    value: "Cross-domain associations form when the brain isn't task-focused.",
    color: "bg-pink text-bone",
  },
  {
    label: "Processes emotion",
    value: "Down-time lets a child file the day's experiences into long-term memory.",
    color: "bg-orange text-ink",
  },
  {
    label: "Builds self-awareness",
    value: "The DMN is where a sense of self is rehearsed and sharpened.",
    color: "bg-green text-ink",
  },
  {
    label: "Generates creativity",
    value: "Mind-wandering is the engine of original thought, not its enemy.",
    color: "bg-blue text-bone",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-blue py-20 text-bone md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-15 confetti" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Sticker color="orange" rotate={-6}>
              The Science
            </Sticker>
            <Sticker color="green" rotate={4}>
              ★ For curious parents
            </Sticker>
          </div>
          <h1 className="mt-10 font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85]">
            Boredom is
            <br />
            the <em className="text-orange">waiting room</em>
            <br />
            for <span className="text-pink">brilliance.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-bone/90 md:text-2xl">
            A short explainer for parents on the brain state that powers
            imagination — and why we&apos;re building an entire brand around
            protecting it.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b-[3px] border-ink bg-orange py-4">
        <Marquee speed="slow">
          {["DEFAULT MODE NETWORK", "DAYDREAM = DEVELOPMENT", "BOREDOM = BUILDING", "PLAY = THE POINT"].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-3xl uppercase text-ink md:text-5xl"
            >
              {w}
              <FiveStar className="h-7 w-7 text-pink" fill="currentColor" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* TWO MODES */}
      <section className="border-b-[3px] border-ink bg-green">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker color="pink" rotate={-6}>
                The Setup
              </Sticker>
              <Reveal>
                <h2 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
                  Two modes,
                  <br />
                  <em className="text-blue">one brain.</em>
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-lg text-ink md:col-span-7 md:pt-10">
              <Reveal delay={0.15}>
                <p className="text-xl md:text-2xl">
                  The{" "}
                  <span className="bg-orange px-1.5 font-bold text-ink">
                    Default Mode Network (DMN)
                  </span>{" "}
                  is a system in the brain that becomes active when we&apos;re
                  not focused on a task — when we&apos;re daydreaming,
                  reflecting, or staring out the window. Despite how passive
                  it sounds, this state is incredibly active behind the
                  scenes.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  For children, this state is even more important. Kids
                  aren&apos;t just learning facts — they&apos;re learning how
                  to <span className="squiggle font-bold text-pink">think.</span>{" "}
                  Boredom is the moment right before creativity begins. If we
                  remove that space, we unintentionally remove the
                  opportunity for those moments to happen.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DMN FACTS BENTO */}
      <section className="border-b-[3px] border-ink bg-orange">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Sticker color="blue" rotate={-4}>
            The Anatomy of Boredom
          </Sticker>
          <Reveal>
            <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              What happens when
              <br />
              a child does <em className="text-pink">nothing.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {dmnFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[40px] border-[3px] border-ink ${fact.color} chunky p-10`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-7xl leading-none">
                      0{i + 1}
                    </span>
                    <span className="rounded-full border-2 border-current px-3 py-1 text-xs font-bold uppercase">
                      Active
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl md:text-4xl">
                    {fact.label}
                  </h3>
                  <p className="mt-3 text-base opacity-90">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Passive vs Active */}
          <div className="mt-12 grid gap-0 overflow-hidden rounded-[40px] border-[3px] border-ink chunky md:grid-cols-2">
            <div className="border-b-[3px] border-ink bg-ink p-10 text-bone md:border-b-0 md:border-r-[3px]">
              <p className="text-xs font-bold uppercase tracking-widest text-orange">
                Passive Brain Activity
              </p>
              <h3 className="mt-3 font-display text-4xl">
                iPad / TV / scrolling
              </h3>
              <p className="mt-4 text-bone/80">
                Algorithms drive attention. The brain consumes input but does
                not generate. The DMN goes quiet.
              </p>
            </div>
            <div className="bg-pink p-10 text-bone">
              <p className="text-xs font-bold uppercase tracking-widest text-orange">
                Active Brain Activity
              </p>
              <h3 className="mt-3 font-display text-4xl">
                Blocks / clay / cardboard
              </h3>
              <p className="mt-4 text-bone/95">
                The child generates input. The DMN lights up. Creativity,
                memory, and identity quietly assemble themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-b-[3px] border-ink bg-pink text-bone">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Sticker color="green" rotate={-4}>
            Brand Film · 60 sec
          </Sticker>
          <Reveal>
            <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              From a bored child
              <br />
              <em className="text-blue">to a built world.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] border-[3px] border-ink bg-ink chunky">
              <iframe
                src="https://www.youtube.com/embed/YV3QuF-2wdw"
                title="Toys R Us — Beyond the Screen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOG FEATURE */}
      <section className="border-b-[3px] border-ink bg-orange">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="relative aspect-square overflow-hidden rounded-[40px] border-[3px] border-ink bg-bone chunky">
                <Image
                  src="https://www.toysrus.com/cdn/shop/files/building-blocks.png?v=1747249302&width=1200"
                  alt="Building blocks"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-7">
              <Sticker color="pink" rotate={-4}>
                Blog · Long Read
              </Sticker>
              <h3 className="mt-6 font-display text-4xl text-ink md:text-6xl">
                The Anatomy of an Imagination Engine Toy.
              </h3>
              <p className="mt-6 text-lg text-ink md:text-xl">
                What makes a toy a true imagination engine? It&apos;s not
                batteries, screens, or sound effects. It&apos;s the absence
                of instructions. Four characteristics every parent should
                look for — and why your kid&apos;s favorite gift might
                already be in your recycling bin.
              </p>
              <div className="mt-8">
                <MagneticButton
                  href="/science/blog/imagination-engine-toy"
                  color="ink"
                  size="md"
                >
                  Read the post →
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Sticker color="blue" rotate={-4}>
            Go Deeper
          </Sticker>
          <h2 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
            The lecture goes
            <br />
            <em className="text-pink">deeper than this page.</em>
          </h2>
          <p className="mt-6 text-lg text-ink-soft md:text-xl">
            Our hybrid event includes a 30-minute, jargon-free DMN lecture
            for parents while their kids play. Tickets are free, but
            limited.
          </p>
          <div className="mt-10">
            <MagneticButton href="/register" color="pink">
              Reserve your spot
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
