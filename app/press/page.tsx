import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { Reveal } from "@/components/reveal";
import { Marquee, MARQUEE_WORDS } from "@/components/marquee";
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
            This act marks a very big shift in the toy and digital world.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b-[3px] border-ink bg-pink py-4 text-bone">
        <Marquee speed="slow">
          {MARQUEE_WORDS.map((w, i) => (
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
              FOR IMMEDIATE RELEASE
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
              Toys &quot;R&quot; Us announces &apos;The Boredom
              Initiative&apos;: A Pivot back to Outside Play
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-ink-soft">
              (Washington, D.C. — April 30th, 2026)
            </p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
              <p>
                Toys &quot;R&quot; Us today announced an exciting release
                about addressing the attention crisis among children and
                adults.{" "}
                <span className="squiggle font-bold text-pink">
                  &quot;The Boredom Initiative,&quot;
                </span>{" "}
                is the brand is overhauling its physical and digital
                footprint to prioritize neurological health over digital
                distraction. To focus on this reboot, Toys &quot;R&quot; Us
                Wants to focus on removing all digital demo screens from
                retail locations and Designing toys with{" "}
                <span className="bg-orange px-1.5 font-bold">
                  psychologists
                </span>{" "}
                that will ultimately create a better future for our children.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border-[3px] border-ink bg-pink p-6 text-bone chunky">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">
                  Analysis
                </p>
                <blockquote className="mt-4 border-l-[3px] border-orange pl-4 text-base italic">
                  &ldquo;Listening to the customer is probably the best thing
                  in the world. Almost all that we have here and now, and how
                  we expanded the business came from the customer saying
                  &lsquo;I need.&rsquo; or &lsquo;I want&rdquo;,
                  <span className="mt-2 block not-italic text-xs font-bold uppercase tracking-widest text-orange">
                    — CEO Charles Lazarus States
                  </span>
                </blockquote>
                <p className="mt-4 text-base">
                  By transitioning into a{" "}
                  <span className="rounded-md bg-orange px-1.5 font-bold text-ink">
                    &quot;community resource for childhood development,&quot;
                  </span>{" "}
                  Toys &quot;R&quot; Us is addressing the competitive
                  pressure of the digital age head-on. This &quot;reboot&quot;
                  is as much about public health as it is about profit,
                  positioning the company as a guardian of the next
                  generation&apos;s creative capacity.
                </p>
              </div>
              <div className="rounded-[28px] border-[3px] border-ink bg-blue p-6 text-bone chunky">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">
                  Strategy
                </p>
                <p className="mt-3 text-base">
                  A key component of this initiative is the launch of a
                  weekly, device-free workshops hosted in-store. These events
                  will feature massive, unstructured building projects where
                  families can interact without the interference of
                  smartphones.
                </p>
                <p className="mt-4 text-base">
                  By curating{" "}
                  <span className="rounded-md bg-orange px-1.5 font-bold text-ink">
                    &quot;Default Mode Network-Approved&quot;
                  </span>{" "}
                  toy sections, Toys &quot;R&quot; Us is simplifying the
                  decision-making process for overstimulated parents,
                  offering a selection of products guaranteed to spark deep,
                  imaginative play.
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

      {/* INFOGRAPHIC — TRU LEGACY */}
      <section className="border-b-[3px] border-ink bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-14">
            {/* LEFT: Infographic */}
            <div className="md:col-span-5">
              <Image
                src="/toysrusinfographic.png"
                alt="Toys R Us history infographic: founded 78 years ago in Washington D.C., 65,000 employees, 1,600 stores worldwide at its peak, filed for bankruptcy in 2017 with 5 billion in debt and 11.1 billion in annual sales, known as the shop for birthdays / holidays / gift shopping, slogan 'You'll never outgrow us'"
                width={1080}
                height={2700}
                unoptimized
                className="w-full h-auto rounded-[40px] border-[3px] border-ink chunky"
              />
            </div>

            {/* RIGHT: Recap pulled from elsewhere on the press page */}
            <div className="md:col-span-7 md:sticky md:top-24">
              <div className="flex flex-wrap items-center gap-3">
                <Sticker color="pink" rotate={-6}>
                  ★ The Story
                </Sticker>
                <Sticker color="blue" rotate={4}>
                  At a glance
                </Sticker>
              </div>

              <Reveal>
                <h2 className="mt-6 font-display text-5xl leading-[0.95] text-ink md:text-6xl">
                  Where we&apos;ve been,
                  <br />
                  <em className="text-pink">and where we&apos;re going.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-6 text-lg text-ink md:text-xl">
                  This act marks a very big shift in the toy and digital
                  world. The brand recognizes that its true value lies not
                  in competing with Amazon&apos;s logistics, but in providing
                  an{" "}
                  <span className="squiggle font-bold text-ink">
                    experiential sanctuary
                  </span>{" "}
                  that cannot be replicated online.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                <Reveal delay={0.25}>
                  <div className="rounded-[24px] border-[3px] border-ink bg-pink p-6 text-bone chunky">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange">
                      Founder · Charles Lazarus
                    </p>
                    <p className="mt-3 italic">
                      &ldquo;Listening to the customer is probably the best
                      thing in the world. Almost all that we have here and
                      now, and how we expanded the business came from the
                      customer saying &lsquo;I need.&rsquo; or &lsquo;I
                      want&rdquo;.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.32}>
                  <div className="rounded-[24px] border-[3px] border-ink bg-blue p-6 text-bone chunky">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange">
                      The Reboot
                    </p>
                    <p className="mt-3">
                      Toys &quot;R&quot; Us is overhauling its physical and
                      digital footprint to prioritize neurological health
                      over digital distraction — removing all digital demo
                      screens from retail locations and designing toys with{" "}
                      <span className="rounded-md bg-orange px-1.5 font-bold text-ink">
                        psychologists.
                      </span>
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="rounded-[24px] border-[3px] border-ink bg-orange p-6 text-ink chunky">
                    <p className="text-xs font-bold uppercase tracking-widest text-pink">
                      Strategy
                    </p>
                    <p className="mt-3">
                      Weekly, device-free workshops in-store. Massive,
                      unstructured building projects.{" "}
                      <span className="rounded-md bg-blue px-1.5 font-bold text-bone">
                        &quot;DMN-Approved&quot;
                      </span>{" "}
                      toy sections curated for overstimulated parents.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC — BY THE NUMBERS */}
      <section className="border-b-[3px] border-ink bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-wrap items-center gap-3">
            <Sticker color="pink" rotate={-6}>
              ★ Infographic
            </Sticker>
            <Sticker color="blue" rotate={4}>
              The Boredom Initiative · by the numbers
            </Sticker>
          </div>

          <Reveal>
            <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              The numbers behind
              <br />
              <em className="text-pink">the reboot.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <p className="max-w-3xl text-lg text-ink md:text-xl">
              The brand recognizes that its true value lies not in competing
              with Amazon&apos;s logistics, but in providing an{" "}
              <span className="squiggle font-bold text-ink">
                experiential sanctuary
              </span>{" "}
              that cannot be replicated online.
            </p>
          </Reveal>

          {/* HEADLINE STATS */}
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              { stat: "0", label: "Screens in flagship stores", color: "bg-ink text-bone", accent: "text-orange" },
              { stat: "100%", label: "DMN-approved toy curation", color: "bg-pink text-bone", accent: "text-orange" },
              { stat: "30 min", label: "Parent lecture per event", color: "bg-blue text-bone", accent: "text-orange" },
              { stat: "52", label: "Analog Saturdays a year", color: "bg-orange text-ink", accent: "text-pink" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border-[3px] border-ink ${s.color} chunky p-8 min-h-[220px]`}>
                  <span className={`font-display text-7xl leading-none md:text-8xl ${s.accent}`}>
                    {s.stat}
                  </span>
                  <p className="mt-6 text-sm font-bold uppercase tracking-wide opacity-90">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* PASSIVE → ACTIVE FLOW */}
          <div className="mt-14 grid gap-0 overflow-hidden rounded-[40px] border-[3px] border-ink chunky md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className="border-b-[3px] border-ink bg-ink p-10 text-bone md:border-b-0 md:border-r-[3px]">
              <p className="text-xs font-bold uppercase tracking-widest text-orange">
                Before
              </p>
              <h3 className="mt-3 font-display text-4xl">Passive screen time</h3>
              <ul className="mt-6 space-y-2 text-sm text-bone/85">
                <li>· Algorithm-driven attention</li>
                <li>· Default Mode Network goes quiet</li>
                <li>· Consumption &gt; creation</li>
              </ul>
            </div>
            <div className="flex items-center justify-center bg-orange px-6 py-8 md:py-0">
              <ArrowRight size={56} className="text-ink" />
            </div>
            <div className="bg-green p-10 text-ink">
              <p className="text-xs font-bold uppercase tracking-widest text-pink">
                After
              </p>
              <h3 className="mt-3 font-display text-4xl">Cognitive play</h3>
              <ul className="mt-6 space-y-2 text-sm text-ink/85">
                <li>· Open-ended materials</li>
                <li>· DMN lights up · imagination assembles</li>
                <li>· Creation &gt; consumption</li>
              </ul>
            </div>
          </div>

          {/* TIMELINE RIBBON */}
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              { date: "APR 2026", label: "Initiative announced", color: "bg-pink text-bone" },
              { date: "MAY 2026", label: "First Analog Saturday", color: "bg-orange text-ink" },
              { date: "JUN 2026", label: "Pilot stores open", color: "bg-blue text-bone" },
              { date: "FALL 2026", label: "National rollout", color: "bg-green text-ink" },
            ].map((t, i) => (
              <Reveal key={t.date} delay={i * 0.06}>
                <div className={`flex h-full flex-col justify-between rounded-[28px] border-[3px] border-ink ${t.color} chunky p-6`}>
                  <p className="font-display text-2xl">{t.date}</p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wide opacity-90">
                    {t.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
