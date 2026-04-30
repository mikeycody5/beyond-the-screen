import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Sticker } from "@/components/sticker";

export const metadata = {
  title: "More than entertainment — Beyond the Screen",
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
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[0.9] md:text-7xl">
              More than
              <br />
              <em className="text-pink">entertainment.</em>
            </h1>

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
                At Toys &quot;R&quot; Us, we believe play is more than
                entertainment, it&apos;s the foundation of a child&apos;s
                growth. In a world dominated by screens and constant
                stimulation, we&apos;re committed to helping families
                rediscover the value of hands-on, imaginative experiences. By
                prioritizing open-ended toys and meaningful play, we aim to
                support healthier development and stronger family
                connections.
              </p>
              <p>
                Our mission goes beyond selling products, we&apos;re building
                a community that values creativity, curiosity, and
                well-being. Grounded in insights like the Default Mode
                Network, we advocate for moments of quiet and exploration
                that help children think independently and grow with
                confidence. Together, we&apos;re shaping a future where play
                inspires not just fun, but lifelong learning.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
