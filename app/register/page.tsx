"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { Sticker } from "@/components/sticker";
import { FiveStar, StarBurst } from "@/components/star-burst";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

const TOPIC_OPTIONS = [
  "Managing screen time",
  "Encouraging creativity",
  "The Default Mode Network basics",
  "Boredom & brain development",
];

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [allergies, setAllergies] = useState("");
  const [numChildren, setNumChildren] = useState("1");

  const [lecture, setLecture] = useState<"yes" | "no" | "maybe">("yes");
  const [topics, setTopics] = useState<string[]>([]);
  const [consentPlay, setConsentPlay] = useState(false);
  const [consentMedia, setConsentMedia] = useState(false);

  const toggleTopic = (t: string) =>
    setTopics((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const next = () => setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  const back = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  const canNext1 = parentName && parentEmail && parentPhone;
  const canNext2 = childName && childAge;
  const canSubmit = consentPlay;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return <Confirmation parentName={parentName} childName={childName} />;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-pink py-16 text-bone md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-15 confetti" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Sticker color="orange" rotate={-6}>
              ★ The Play Council
            </Sticker>
            <Sticker color="green" rotate={4}>
              Free family pass
            </Sticker>
          </div>
          <h1 className="mt-10 font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85]">
            Reserve <em className="text-orange">your</em>
            <br />
            <span className="text-bone">spot.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/90 md:text-xl">
            One afternoon, two experiences. A supervised play zone for kids.
            A short, jargon-free lecture for parents.
          </p>
        </div>
      </section>

      {/* MISSION — THE PLAY COUNCIL */}
      <section className="border-b-[3px] border-ink bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker color="pink" rotate={-6}>
                ★ The Play Council
              </Sticker>
              <h2 className="mt-6 font-display text-5xl leading-[0.9] text-ink md:text-6xl">
                More than
                <br />
                <em className="text-pink">a store.</em>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ink md:col-span-7 md:pt-4">
              <p className="text-xl md:text-2xl">
                We want to prove to the world that we are{" "}
                <span className="squiggle font-bold text-ink">
                  more than a store
                </span>
                , we are a community of parents, educators, and creators who
                understand the harm of the digital world. We want to stay
                connected with families who are on the front lines of this
                movement. Why do you have a question about new store layouts
                or you want to share your child stories&apos; creative
                breakthroughs, either way we want to hear all about it. We
                are committed to being transparent and an accessible
                resource for children, overstimulated, parents, and the
                overall well-being of your family&apos;s journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOREDOM CHALLENGE */}
      <section className="border-b-[3px] border-ink bg-green">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker color="orange" rotate={-6}>
                ★ The Boredom Challenge
              </Sticker>
              <h2 className="mt-6 font-display text-5xl leading-[0.9] text-ink md:text-6xl">
                One hour
                <br />
                of <em className="text-blue">device-free play.</em>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ink md:col-span-7 md:pt-4">
              <p className="text-xl md:text-2xl">
                If you are ready to take the first step, we invite you to
                join the{" "}
                <span className="rounded-md bg-orange px-2 py-0.5 font-bold text-ink">
                  &quot;Boredom Challenge.&quot;
                </span>{" "}
                This initiative asks parents to commit to just one hour of
                device-free play per day. By signing up, you&apos;ll receive
                a weekly{" "}
                <span className="rounded-md bg-pink px-2 py-0.5 font-bold text-bone">
                  &quot;Play Kit&quot;
                </span>{" "}
                guide filled with analog activities and exclusive discounts
                on imagination-fueling toys. I&apos;m Shaylyn Kerrigan, the
                creator of this initiative and a BSU college student. My
                mission is to bridge the gap between clinical psychology and
                brand strategy to ensure that the future of play is bright
                and intelligence gaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {/* Stepper */}
          <div className="mb-12 flex items-center justify-center gap-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink font-display text-lg transition-all duration-500",
                    step === s
                      ? "bg-pink text-bone chunky"
                      : step > s
                      ? "bg-ink text-bone"
                      : "bg-bone text-ink-soft"
                  )}
                >
                  {step > s ? <Check size={16} /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      "h-1 w-12 rounded-full transition-colors duration-500",
                      step > s ? "bg-ink" : "bg-ink/15"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="rounded-[40px] border-[3px] border-ink bg-cream chunky p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <div>
                    <Sticker color="blue" rotate={-4}>
                      Step 1 of 3
                    </Sticker>
                    <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl">
                      About the parent
                      <br />
                      or <em className="text-pink">guardian.</em>
                    </h2>
                  </div>
                  <Field label="Full name">
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className={inputCls}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      className={inputCls}
                      placeholder="jane@example.com"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      className={inputCls}
                      placeholder="(555) 123-4567"
                    />
                  </Field>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <div>
                    <Sticker color="green" rotate={-4}>
                      Step 2 of 3
                    </Sticker>
                    <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl">
                      Tell us about
                      <br />
                      <em className="text-blue">your child.</em>
                    </h2>
                  </div>
                  <Field label="Child's first name">
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className={inputCls}
                      placeholder="Theo"
                    />
                  </Field>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Age">
                      <input
                        type="number"
                        min={2}
                        max={12}
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className={inputCls}
                        placeholder="6"
                      />
                    </Field>
                    <Field label="# of kids attending">
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={numChildren}
                        onChange={(e) => setNumChildren(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <Field
                    label="Allergies, medical, or accessibility needs"
                    sub="So our play zone team is ready before you arrive."
                  >
                    <textarea
                      rows={3}
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      className={`${inputCls} resize-none`}
                      placeholder="e.g. peanut allergy, sensory sensitivities, none"
                    />
                  </Field>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                  <div>
                    <Sticker color="orange" rotate={-4}>
                      Step 3 of 3
                    </Sticker>
                    <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl">
                      Your <em className="text-pink">experience.</em>
                    </h2>
                  </div>

                  <Field
                    label="Will you attend the parent lecture?"
                    sub="A 30-minute, jargon-free intro to the Default Mode Network while your child plays."
                  >
                    <div className="grid grid-cols-3 gap-3">
                      {(["yes", "maybe", "no"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setLecture(opt)}
                          className={cn(
                            "rounded-2xl border-[3px] border-ink px-4 py-3 text-sm font-bold uppercase transition-all duration-300",
                            lecture === opt
                              ? "bg-blue text-bone chunky"
                              : "bg-bone text-ink hover:bg-cream"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field
                    label="Topics you're most interested in"
                    sub="Pick any. We use this to tailor follow-up resources."
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      {TOPIC_OPTIONS.map((t) => {
                        const on = topics.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTopic(t)}
                            className={cn(
                              "flex items-center gap-3 rounded-2xl border-[3px] border-ink px-4 py-3 text-left text-sm font-medium transition-all duration-300",
                              on ? "bg-pink text-bone chunky" : "bg-bone text-ink hover:bg-cream"
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-5 w-5 flex-none items-center justify-center rounded-md border-2 transition-colors",
                                on ? "border-bone bg-bone text-pink" : "border-ink"
                              )}
                            >
                              {on && <Check size={12} />}
                            </span>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <div className="space-y-4 border-t-[3px] border-dashed border-ink pt-6">
                    <Consent
                      checked={consentPlay}
                      onChange={setConsentPlay}
                      label="I consent to my child's participation in supervised play activities."
                      required
                    />
                    <Consent
                      checked={consentMedia}
                      onChange={setConsentMedia}
                      label="I consent to photo or video of my child being used for promotional materials. (Optional)"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer controls */}
            <div className="mt-10 flex items-center justify-between gap-4 border-t-[3px] border-dashed border-ink pt-8">
              <button
                type="button"
                onClick={back}
                disabled={step === 1}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-ink-soft transition-colors hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} /> Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2)}
                  className="inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-ink px-7 py-3 text-sm font-bold uppercase text-bone chunky disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-pink px-7 py-3 text-sm font-bold uppercase text-bone chunky disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Sparkles size={16} />
                  Reserve my spot
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-2xl border-[3px] border-ink bg-bone px-5 py-4 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:bg-cream focus:ring-4 focus:ring-pink/30";

function Field({
  label,
  sub,
  children,
}: {
  label: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-bold uppercase tracking-wide text-ink">{label}</span>
      {sub && <span className="mt-1 block text-sm text-ink-soft">{sub}</span>}
      <div className="mt-3">{children}</div>
    </label>
  );
}

function Consent({
  checked,
  onChange,
  label,
  required,
}: {
  checked: boolean;
  onChange: (b: boolean) => void;
  label: string;
  required?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-start gap-3 text-left"
    >
      <span
        className={cn(
          "mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md border-[3px] border-ink transition-colors",
          checked ? "bg-pink text-bone" : "bg-bone"
        )}
      >
        {checked && <Check size={14} />}
      </span>
      <span className="text-sm text-ink">
        {label}
        {required && <span className="text-pink"> *</span>}
      </span>
    </button>
  );
}

function Confirmation({
  parentName,
  childName,
}: {
  parentName: string;
  childName: string;
}) {
  return (
    <section className="relative overflow-hidden bg-green py-16 md:py-24">
      <div className="confetti pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 hidden md:block">
        <StarBurst className="h-full w-full text-pink" spin />
      </div>
      <div className="pointer-events-none absolute -right-24 bottom-32 h-64 w-64 hidden md:block">
        <StarBurst className="h-full w-full text-orange" spin points={16} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-2xl px-5 md:px-8"
      >
        <div className="text-center">
          <Sticker color="green" rotate={-4} wobble>
            ★ Reservation confirmed
          </Sticker>
          <h1 className="mt-8 font-display text-5xl leading-[0.85] md:text-7xl">
            See you there,
            <br />
            <em className="text-pink">{parentName.split(" ")[0] || "friend"}.</em>
          </h1>
          <p className="mt-6 text-lg text-ink-soft">
            We&apos;ve saved a spot for {childName || "your family"} at the
            next Beyond the Screen event. A confirmation email is on its
            way.
          </p>
        </div>

        {/* Ticket card */}
        <div className="mt-12 overflow-hidden rounded-[40px] border-[3px] border-ink bg-bone chunky">
          <div className="flex items-center justify-between border-b-[3px] border-dashed border-bone bg-pink p-8 text-bone">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange">
                Beyond the Screen
              </p>
              <p className="mt-2 font-display text-3xl">The Boredom Initiative</p>
            </div>
            <div className="text-right">
              <p className="font-display text-5xl">2026</p>
              <p className="text-xs font-bold uppercase tracking-widest text-bone/80">
                Family Pass
              </p>
            </div>
          </div>

          <div className="grid gap-6 p-8 md:grid-cols-3">
            <Detail label="Date" value="Sat, June 14" />
            <Detail label="Time" value="11:00 AM – 1:30 PM" />
            <Detail label="Location" value="Toys R Us · Paramus, NJ" />
            <Detail label="Guest" value={parentName || "—"} />
            <Detail label="Child" value={childName || "—"} />
            <Detail label="Pass ID" value={`BTS-${Math.floor(Math.random() * 9000 + 1000)}`} />
          </div>

          <div className="border-t-[3px] border-dashed border-ink bg-cream p-8 flex items-center justify-between">
            <p className="text-sm font-medium text-ink">
              Bring a curious child and a quiet mind.
            </p>
            <FiveStar className="h-8 w-8 text-pink" fill="currentColor" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="rounded-full border-[3px] border-ink bg-bone px-6 py-3 text-sm font-bold uppercase text-ink chunky"
          >
            Add to calendar
          </button>
          <button
            type="button"
            className="rounded-full border-[3px] border-ink bg-pink px-6 py-3 text-sm font-bold uppercase text-bone chunky"
          >
            Share with a friend
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-pink">{label}</p>
      <p className="mt-1 font-display text-xl text-ink">{value}</p>
    </div>
  );
}
