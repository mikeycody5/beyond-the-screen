import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata = {
  title: "More Than Entertainment — Beyond the Screen",
  description:
    "Play is the foundation of a child's growth. The Toys \"R\" Us mission for hands-on, imaginative experiences that build creativity, curiosity, and well-being.",
};

export default function BlogPost() {
  return (
    <>
      <section className="border-b-[3px] border-ink bg-orange">
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
              <Sticker color="pink" rotate={-4}>
                Blog
              </Sticker>
              <Sticker color="blue" rotate={3}>
                3 min read
              </Sticker>
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
              More than
              <br />
              <em className="text-pink">entertainment.</em>
            </h1>
            <p className="mt-8 text-xl text-ink md:text-2xl">
              At Toys &quot;R&quot; Us, we believe play is{" "}
              <span className="squiggle font-bold text-blue">
                more than entertainment
              </span>{" "}
              — it&apos;s the foundation of a child&apos;s growth.
            </p>

            <div className="relative my-14 aspect-[3/2] overflow-hidden rounded-[40px] border-[3px] border-ink bg-bone chunky">
              <Image
                src="https://www.toysrus.com/cdn/shop/files/games-and-puzzles.png?v=1747249530&width=1200"
                alt="Open-ended games and puzzles for cognitive play"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                In a world dominated by screens and constant stimulation,
                we&apos;re committed to helping families rediscover the value
                of hands-on, imaginative experiences. By prioritizing
                open-ended toys and meaningful play, we aim to support
                healthier development and stronger family connections.
              </p>
              <p>
                Our mission goes beyond selling products — we&apos;re building
                a community that values{" "}
                <span className="bg-pink px-1.5 font-bold text-bone">
                  creativity, curiosity, and well-being.
                </span>{" "}
                Grounded in insights like the Default Mode Network, we
                advocate for moments of quiet and exploration that help
                children think independently and grow with confidence.
                Together, we&apos;re shaping a future where play inspires not
                just fun, but lifelong learning.
              </p>
            </div>

            <div className="mt-16 rounded-[32px] border-[3px] border-ink bg-blue chunky p-8 text-bone">
              <Sticker color="orange" rotate={-3}>
                The takeaway
              </Sticker>
              <p className="mt-6 text-lg md:text-xl">
                Play isn&apos;t a break from learning. For a developing brain,
                it <em>is</em> the learning. Everything we&apos;re building in
                2026 — from the Boredom Initiative to Analog Saturdays — is
                in service of that one idea.
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
