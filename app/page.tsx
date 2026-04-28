"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { Sticker } from "@/components/sticker";
import { StarBurst, FiveStar } from "@/components/star-burst";
import { Reveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <>
      {/* ============ HERO — YELLOW/CREAM with TRU LOGO ============ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b-[3px] border-ink bg-orange"
      >
        <div className="confetti pointer-events-none absolute inset-0 opacity-40" />

        {/* Floating shapes */}
        <motion.div
          style={{ y: heroY, rotate: heroRotate }}
          className="pointer-events-none absolute -left-20 top-40 hidden h-72 w-72 md:block"
        >
          <StarBurst className="h-full w-full text-pink" spin />
        </motion.div>
        <motion.div
          style={{ y: heroY }}
          className="pointer-events-none absolute -right-16 -top-10 hidden h-64 w-64 md:block"
        >
          <div className="h-full w-full rounded-full bg-blue chunky" />
        </motion.div>
        <motion.div
          style={{ y: heroY, rotate: heroRotate }}
          className="pointer-events-none absolute right-1/3 top-20 hidden h-32 w-32 md:block"
        >
          <StarBurst className="h-full w-full text-green" spin points={16} />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-12 md:px-8 md:pb-44 md:pt-20">
          {/* TRU logo banner */}
          <Reveal>
            <div className="flex flex-wrap items-end gap-6">
              <div className="relative h-20 w-44 md:h-28 md:w-60">
                <Image
                  src="https://www.toysrus.com/cdn/shop/t/7/assets/tru-logo.png?v=150549919582931083811717694967"
                  alt="Toys R Us"
                  fill
                  unoptimized
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="rounded-full border-[3px] border-ink bg-bone px-5 py-2 chunky">
                <p className="text-xs font-bold uppercase tracking-widest text-ink">
                  ★ Presents
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Sticker color="pink" rotate={-6} wobble>
              The Boredom Initiative
            </Sticker>
            <Sticker color="blue" rotate={4}>
              ★ Spring 2026
            </Sticker>
            <Sticker color="green" rotate={-3}>
              Free family pass
            </Sticker>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tight text-ink"
          >
            <span className="block">Beyond</span>
            <span className="block">
              <span className="text-pink">the</span>{" "}
              <em className="not-italic text-blue">Screen</em>
              <span className="text-bone">.</span>
            </span>
          </motion.h1>

          <Reveal delay={0.4} className="mt-10 max-w-2xl">
            <p className="text-xl text-ink md:text-2xl">
              We don&apos;t just sell toys. We provide{" "}
              <span className="rounded-md bg-green px-2 py-0.5 font-bold text-ink">
                the raw materials
              </span>{" "}
              for a child&apos;s future. A movement to reunite families with
              the science of <em className="text-pink">unstructured play.</em>
            </p>
          </Reveal>

          <Reveal delay={0.6} className="mt-12 flex flex-wrap items-center gap-5">
            <MagneticButton href="/register" color="pink" size="lg">
              Reserve your spot
            </MagneticButton>
            <a
              href="#brand-film"
              className="inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-bone px-7 py-4 text-base font-bold uppercase tracking-wide text-ink chunky"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink">
                <Play size={14} className="ml-0.5 fill-bone text-bone" />
              </span>
              Watch the film
            </a>
          </Reveal>

          {/* Hero image bento */}
          <Reveal delay={0.8} className="mt-20 md:mt-24">
            <div className="relative grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8">
                <div className="relative h-[420px] overflow-hidden rounded-[40px] border-[3px] border-ink bg-blue chunky">
                  <Image
                    src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1600&q=80"
                    alt="A child building with wooden blocks"
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                  <div className="absolute left-6 top-6">
                    <Sticker color="orange" rotate={-8}>
                      ★ LIVE EVENT
                    </Sticker>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-4 md:grid-cols-1">
                <div className="relative h-[200px] overflow-hidden rounded-[32px] border-[3px] border-ink bg-pink">
                  <Image
                    src="https://www.toysrus.com/cdn/shop/files/building-blocks.png?v=1747249302&width=1200"
                    alt="Building blocks"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-[32px] border-[3px] border-ink bg-green flex items-center justify-center p-4">
                  <Image
                    src="https://www.toysrus.com/cdn/shop/t/7/assets/geoffrey-pose.png?v=3614741445468124011717694964"
                    alt="Geoffrey the Giraffe"
                    width={200}
                    height={200}
                    unoptimized
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE BAND PINK ============ */}
      <section className="border-b-[3px] border-ink bg-pink py-5 text-bone">
        <Marquee>
          {[
            "BEYOND THE SCREEN",
            "ANALOG SATURDAY",
            "THE BOREDOM INITIATIVE",
            "0 IPADS",
            "100% IMAGINATION",
            "JOIN THE PLAY COUNCIL",
          ].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-4xl uppercase md:text-6xl"
            >
              {w}
              <FiveStar className="h-8 w-8 text-bone" fill="currentColor" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============ MANIFESTO — GREEN BLOCK ============ */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-green">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-30">
          <StarBurst className="h-full w-full text-bone" spin points={16} />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker color="pink" rotate={-6}>
                The Manifesto
              </Sticker>
              <Reveal>
                <h2 className="mt-8 font-display text-6xl leading-[0.9] text-ink md:text-7xl">
                  Cognitive play.
                  <br />
                  <span className="text-bone">Not passive</span>
                  <br />
                  <em className="text-blue">consumption.</em>
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-lg text-ink md:col-span-7 md:pt-10">
              <Reveal delay={0.15}>
                <p className="text-xl md:text-2xl">
                  In today&apos;s digital-first world, many children&apos;s
                  worlds have a digital screen instead of the comfort of
                  nature and backyard. The{" "}
                  <span className="rounded-md bg-orange px-2 py-0.5 font-bold">
                    &quot;iPad kid&quot;
                  </span>{" "}
                  phenomenon glues eyes to rapid-fire algorithms and
                  blue-light stimulation.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  At Toys &quot;R&quot; Us, we are leading a movement to go
                  beyond the screen. The goal from the beginning was not only
                  to sell toys — it was to provide raw material for a
                  child&apos;s future. We&apos;re shifting our focus to{" "}
                  <span className="squiggle font-bold text-pink">
                    cognitive play
                  </span>
                  : open-ended tools like wooden blocks, clay, or complex
                  puzzles that bring children back into the physical world.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-bone px-5 py-3 chunky">
                  <span className="font-display text-3xl text-ink">2026</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-pink">
                    The Reboot Year
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THREE PILLARS BENTO — BLUE BG ============ */}
      <section className="border-b-[3px] border-ink bg-blue text-bone">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Sticker color="orange" rotate={-4}>
                Three Doors In
              </Sticker>
              <Reveal>
                <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
                  One movement,
                  <br />
                  <em className="text-orange">three doors in.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="md:col-span-5 md:text-right">
              <p className="text-lg text-bone/90 md:text-xl">
                Pick the door that calls you. They all lead to the same
                event.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-12 md:grid-rows-2">
            <Reveal className="md:col-span-7 md:row-span-2">
              <BentoCard
                href="/science"
                bg="bg-pink"
                text="text-bone"
                num="01"
                title="The Science."
                body="A simple breakdown of the Default Mode Network and why boredom is the waiting room for brilliance."
                cta="Read the research"
                imageSrc="https://www.toysrus.com/cdn/shop/files/games-and-puzzles.png?v=1747249530&width=1200"
                imageAlt="Games and puzzles"
                tall
              />
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-5">
              <BentoCard
                href="/imagination-engine"
                bg="bg-green"
                text="text-ink"
                num="02"
                title="The Podcast."
                body="The Imagination Engine — a calm, weekly invitation for parents to reclaim the quiet."
                cta="Listen to Episode 1"
              />
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-5">
              <BentoCard
                href="/press"
                bg="bg-orange"
                text="text-ink"
                num="03"
                title="The Reboot."
                body="Press: zero-screen stores, Analog Saturdays, and the return of Geoffrey the Giraffe."
                cta="Read the announcement"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BRAND FILM — DARK BREAK ============ */}
      <section
        id="brand-film"
        className="relative overflow-hidden border-b-[3px] border-ink bg-ink py-24 text-bone md:py-36"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 confetti" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Sticker color="pink" rotate={-4}>
            ★ Brand Film · 60 sec
          </Sticker>
          <Reveal>
            <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              From a bored child
              <br />
              <span className="text-orange">to a built world.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] border-[3px] border-pink bg-cream chunky">
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

      {/* ============ HYBRID EVENT — SPLIT SCREEN ============ */}
      <section className="border-b-[3px] border-ink">
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden border-b-[3px] border-ink bg-pink p-10 text-bone md:border-b-0 md:border-r-[3px] md:p-16">
            <Sticker color="orange" rotate={-6}>
              For the kids
            </Sticker>
            <h3 className="mt-8 font-display text-6xl leading-[0.9] md:text-7xl">
              Play
              <br />
              like it&apos;s
              <br />
              <em className="text-bone">1996.</em>
            </h3>
            <p className="mt-8 max-w-md text-lg text-bone/95">
              A supervised play zone with hands-on demos, group activities,
              and the new Toys &quot;R&quot; Us &quot;DMN-Approved&quot;
              collection. No screens. All imagination.
            </p>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 opacity-30">
              <StarBurst className="h-full w-full text-bone" spin points={16} />
            </div>
            <div className="pointer-events-none absolute -bottom-8 right-8 h-40 w-40 opacity-90">
              <Image
                src="https://www.toysrus.com/cdn/shop/t/7/assets/geoffrey-pose.png?v=3614741445468124011717694964"
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative overflow-hidden bg-blue p-10 text-bone md:p-16">
            <Sticker color="green" rotate={6}>
              For the parents
            </Sticker>
            <h3 className="mt-8 font-display text-6xl leading-[0.9] md:text-7xl">
              Learn
              <br />
              the
              <br />
              <em className="text-orange">science.</em>
            </h3>
            <p className="mt-8 max-w-md text-lg text-bone/95">
              A 30-minute, jargon-free intro to the Default Mode Network.
              Why boredom builds a better brain — for your kid, and for you.
            </p>
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 opacity-30">
              <div className="h-full w-full rounded-full border-[6px] border-bone" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — BIG YELLOW/PINK FINISH ============ */}
      <section className="relative overflow-hidden bg-pink py-32 text-bone md:py-44">
        <div className="confetti pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 hidden md:block">
          <StarBurst className="h-full w-full text-orange" spin />
        </div>
        <div className="pointer-events-none absolute -right-24 bottom-32 h-64 w-64 hidden md:block">
          <StarBurst className="h-full w-full text-green" spin points={16} />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <Sticker color="orange" rotate={-4} wobble>
            ★ Limited family tickets
          </Sticker>
          <Reveal>
            <h2 className="mt-8 font-display text-6xl leading-[0.85] md:text-[10rem]">
              Reserve
              <br />
              <span className="text-orange">your</span>{" "}
              <em className="text-blue">spot.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <MagneticButton href="/register" color="ink" size="lg">
              Get my ticket <ArrowRight className="ml-1 inline" size={20} />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function BentoCard({
  href,
  bg,
  text,
  num,
  title,
  body,
  cta,
  imageSrc,
  imageAlt,
  tall,
}: {
  href: string;
  bg: string;
  text: string;
  num: string;
  title: string;
  body: string;
  cta: string;
  imageSrc?: string;
  imageAlt?: string;
  tall?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[40px] border-[3px] border-ink ${bg} ${text} chunky p-8 md:p-10 ${tall ? "min-h-[480px]" : "min-h-[260px]"}`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-7xl leading-none md:text-8xl">{num}</span>
        <span className="rounded-full border-2 border-current px-3 py-1 text-xs font-bold uppercase">
          {cta}
        </span>
      </div>
      <h3 className="mt-auto font-display text-4xl md:text-6xl">{title}</h3>
      <p className="mt-3 max-w-md text-base opacity-90">{body}</p>
      {imageSrc && (
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 opacity-90 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110 md:h-96 md:w-96">
          <Image src={imageSrc} alt={imageAlt || ""} fill unoptimized className="object-contain" />
        </div>
      )}
    </a>
  );
}
