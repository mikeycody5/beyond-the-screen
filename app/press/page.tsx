import { ArrowRight, Download } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { MagneticButton } from "@/components/magnetic-button";
import { FiveStar } from "@/components/star-burst";

export const metadata = {
  title: "Press — The 2026 Reboot · Beyond the Screen",
  description:
    "Toys \"R\" Us announces 'The Boredom Initiative': new stores to feature zero screens.",
};

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/toysrus/", handle: "@toysrus", color: "bg-pink text-bone" },
  { name: "X (Twitter)", href: "https://x.com/ToysRUs", handle: "@ToysRUs", color: "bg-blue text-bone" },
  { name: "YouTube", href: "https://www.youtube.com/toysrus", handle: "/toysrus", color: "bg-orange text-ink" },
  { name: "Pinterest", href: "https://www.pinterest.com/toysrus/", handle: "/toysrus", color: "bg-green text-ink" },
];

export default function PressPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-orange py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-15 confetti" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Sticker color="pink" rotate={-6}>
              ★ Media &amp; Press
            </Sticker>
            <Sticker color="blue" rotate={4}>
              April 2026
            </Sticker>
          </div>
          <h1 className="mt-10 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] text-ink">
            The 2026
            <br />
            <em className="text-pink">Reboot.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-ink md:text-2xl">
            How a former big-box retailer became a community resource for
            childhood development.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b-[3px] border-ink bg-pink py-4 text-bone">
        <Marquee speed="slow">
          {["FOR IMMEDIATE RELEASE", "ANALOG SATURDAY", "DMN-APPROVED", "THE BOREDOM INITIATIVE"].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-3xl uppercase md:text-5xl"
            >
              {w}
              <FiveStar className="h-7 w-7 text-orange" fill="currentColor" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* PRESS RELEASE */}
      <section className="border-b-[3px] border-ink bg-blue">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <article className="mx-auto max-w-4xl rounded-[40px] border-[3px] border-ink bg-cream chunky p-10 md:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink">
              For Immediate Release
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
              Toys &quot;R&quot; Us Announces &apos;The Boredom Initiative&apos;:
              A Pivot Back to Outside Play
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-ink-soft">
              Paramus, NJ · April 24, 2026
            </p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
              <p>
                Toys &quot;R&quot; Us today announced &quot;The Boredom
                Initiative,&quot; a multi-year repositioning that recasts the
                brand from a traditional toy retailer into a community
                resource for childhood development. New flagship stores will
                feature zero screens, and the company is partnering with
                child psychologists to curate{" "}
                <span className="bg-orange px-1.5 font-bold">
                  &quot;DMN-Approved&quot;
                </span>{" "}
                product sections — toys clinically reviewed for their ability
                to activate the Default Mode Network.
              </p>
              <p>
                A key component of this initiative is the launch of weekly,
                device-free workshops hosted in-store. These{" "}
                <span className="squiggle font-bold text-pink">
                  Analog Saturday
                </span>{" "}
                events feature massive, unstructured building projects where
                families interact without the interference of smartphones.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border-[3px] border-ink bg-pink p-6 text-bone chunky">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">
                  Analysis
                </p>
                <p className="mt-3 text-base">
                  The pivot reflects a broader retail trend: brands moving
                  from product sellers to mission-led communities. Toys
                  &quot;R&quot; Us is betting that &quot;wellness for
                  kids&quot; is the category of the next decade.
                </p>
              </div>
              <div className="rounded-[28px] border-[3px] border-ink bg-blue p-6 text-bone chunky">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">
                  Strategy
                </p>
                <p className="mt-3 text-base">
                  Hybrid in-store events combine free play for children with
                  a short DMN lecture for parents. Registration is free and
                  limited per location.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-bone px-6 py-3 text-sm font-bold uppercase text-ink chunky"
                type="button"
              >
                <Download size={16} />
                Download media kit
              </button>
              <MagneticButton href="/register" color="pink" size="md">
                Be there opening day <ArrowRight className="ml-1 inline" size={16} />
              </MagneticButton>
            </div>
          </article>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-green py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Sticker color="green" rotate={-4}>
            Follow the rollout
          </Sticker>
          <Reveal>
            <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              Stories from every
              <br />
              <em className="text-pink">Analog Saturday.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {socials.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex h-full flex-col justify-between rounded-[32px] border-[3px] border-ink ${s.color} chunky p-8 min-h-[200px]`}
                >
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {s.name}
                  </p>
                  <p className="mt-6 font-display text-3xl md:text-4xl">
                    {s.handle}
                  </p>
                  <span className="mt-6 text-xs font-bold uppercase">
                    Visit ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
