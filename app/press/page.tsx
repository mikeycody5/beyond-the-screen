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

const SocialIcon = ({ kind, className }: { kind: "ig" | "x" | "yt" | "pin"; className?: string }) => {
  const paths: Record<string, string> = {
    ig: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
    yt: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    pin: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
};

const socials = [
  { name: "Instagram", icon: "ig" as const, href: "https://www.instagram.com/toysrus/", handle: "@toysrus", color: "bg-pink text-bone" },
  { name: "X (Twitter)", icon: "x" as const, href: "https://x.com/ToysRUs", handle: "@ToysRUs", color: "bg-blue text-bone" },
  { name: "YouTube", icon: "yt" as const, href: "https://www.youtube.com/toysrus", handle: "/toysrus", color: "bg-orange text-ink" },
  { name: "Pinterest", icon: "pin" as const, href: "https://www.pinterest.com/toysrus/", handle: "/toysrus", color: "bg-green text-ink" },
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

      {/* PASSIVE → COGNITIVE FLOW */}
      <section className="border-b-[3px] border-ink bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-0 overflow-hidden rounded-[40px] border-[3px] border-ink chunky md:grid-cols-[1fr_auto_1fr] md:items-stretch">
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
                  <div className="flex items-center gap-3">
                    <SocialIcon kind={s.icon} className="h-7 w-7" />
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                      {s.name}
                    </p>
                  </div>
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
