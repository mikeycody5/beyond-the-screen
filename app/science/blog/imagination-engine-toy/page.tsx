import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata = {
  title: "The Anatomy of an Imagination Engine Toy — Beyond the Screen",
  description:
    "Four characteristics every parent should look for in a toy — and why the best one might already be in your recycling bin.",
};

export default function BlogPost() {
  return (
    <>
      <section className="border-b-[3px] border-ink bg-green">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/science"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bone px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink chunky"
          >
            <ArrowLeft size={14} />
            Back to The Science
          </Link>

          <article className="mt-12">
            <div className="flex flex-wrap gap-3">
              <Sticker color="orange" rotate={-4}>
                Blog
              </Sticker>
              <Sticker color="green" rotate={3}>
                6 min read
              </Sticker>
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
              The Anatomy of an
              <br />
              <em className="text-pink">Imagination Engine</em> Toy.
            </h1>
            <p className="mt-8 text-xl text-ink-soft md:text-2xl">
              What makes a toy a true imagination engine? It&apos;s not
              batteries, screens, or sound effects.{" "}
              <span className="squiggle font-bold text-blue">
                It&apos;s the absence of instructions.
              </span>
            </p>

            <div className="relative my-14 aspect-[3/2] overflow-hidden rounded-[40px] border-[3px] border-ink bg-orange chunky">
              <Image
                src="https://www.toysrus.com/cdn/shop/files/building-blocks.png?v=1747249302&width=1200"
                alt="Wooden building blocks"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                We get the question every week from a parent walking through
                one of our pilot stores: &quot;If I only buy one toy this
                year, what should it be?&quot; The honest answer is
                uncomfortable for a retailer to give:{" "}
                <span className="bg-pink px-1.5 font-bold text-bone">
                  it might already be in your recycling bin.
                </span>
              </p>
              <p>
                The toys that activate a child&apos;s Default Mode Network —
                the brain&apos;s creativity and self-awareness engine — share
                four characteristics. They&apos;re open-ended, they&apos;re
                tactile, they don&apos;t make decisions for the child, and
                they get better the longer a child plays with them.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <BlogPoint
                num="01"
                title="Open-ended"
                body="A puzzle has one solution. A box of LEGOs has infinite ones. The math of cognitive development always favors the second box."
                color="bg-pink text-bone"
              />
              <BlogPoint
                num="02"
                title="Tactile"
                body="The weight of a wooden block, the cold of clay, the resistance of cardboard. Screens, by definition, only offer one texture: glass."
                color="bg-blue text-bone"
              />
              <BlogPoint
                num="03"
                title="Doesn't decide"
                body='The moment a toy says "press this button to do this", it has stopped being an imagination engine and started being a vending machine.'
                color="bg-green text-ink"
              />
              <BlogPoint
                num="04"
                title="Gets better"
                body="The best toys are the ones a four-year-old plays with as a castle, and a ten-year-old plays with as a stop-motion film prop."
                color="bg-orange text-ink"
              />
            </div>

            <div className="mt-16 space-y-6 text-lg leading-relaxed text-ink">
              <h2 className="font-display text-4xl text-ink md:text-5xl">
                The recycling bin.
              </h2>
              <p>
                All of which brings us back to the cardboard box. It is
                open-ended, tactile, makes zero decisions for the child, and
                improves with age. The cardboard box is the proof of concept
                for everything Toys &quot;R&quot; Us is building toward in
                2026. We just want to make sure your kid has a few more
                options in the box section.
              </p>
            </div>

            <div className="mt-16 rounded-[32px] border-[3px] border-ink bg-blue chunky p-8 text-bone">
              <Sticker color="orange" rotate={-3}>
                Try this at home
              </Sticker>
              <p className="mt-6 text-lg md:text-xl">
                Pick one toy your child played with last weekend. Ask: how
                many different things could it become? If the answer is three
                or fewer, it&apos;s probably not an imagination engine —
                it&apos;s entertainment.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <MagneticButton href="/register" color="pink">
                Bring your kid to the event
              </MagneticButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function BlogPoint({
  num,
  title,
  body,
  color,
}: {
  num: string;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div className={`rounded-[32px] border-[3px] border-ink ${color} chunky p-8`}>
      <span className="font-display text-6xl">{num}</span>
      <h3 className="mt-4 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-base opacity-90">{body}</p>
    </div>
  );
}
