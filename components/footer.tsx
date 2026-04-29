import Link from "next/link";
import Image from "next/image";
import { Marquee, MARQUEE_WORDS } from "@/components/marquee";
import { FiveStar } from "@/components/star-burst";

const footerWords = MARQUEE_WORDS;

export function Footer() {
  return (
    <footer className="relative z-10 border-t-[3px] border-ink bg-blue text-bone">
      {/* Marquee band */}
      <div className="border-b-[3px] border-ink bg-pink py-5 text-bone">
        <Marquee speed="normal">
          {footerWords.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-3xl uppercase md:text-4xl"
            >
              {w}
              <FiveStar className="h-6 w-6 text-bone" fill="currentColor" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        {/* Big logo */}
        <div className="flex flex-col items-center justify-center gap-6 border-b-[3px] border-dashed border-bone pb-12 text-center">
          <div className="relative h-24 w-56 md:h-32 md:w-72">
            <Image
              src="https://www.toysrus.com/cdn/shop/t/7/assets/tru-logo.png?v=150549919582931083811717694967"
              alt="Toys R Us"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <p className="font-display text-3xl text-bone md:text-5xl">
            Presents <em className="text-orange">Beyond the Screen.</em>
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="max-w-md text-bone/85 md:text-lg">
              A Toys &quot;R&quot; Us initiative reuniting families with the
              science of unstructured play. Reclaim the quiet. Rebuild the
              imagination.
            </p>

            <div className="relative mt-10 h-44 w-44">
              <Image
                src="https://www.toysrus.com/cdn/shop/files/geoffrey-footer.png?v=1712174618&width=1000"
                alt="Geoffrey the Giraffe"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-2xl uppercase tracking-wide text-orange">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-base">
              <li><Link href="/" className="text-bone hover:text-orange transition-colors">Home</Link></li>
              <li><Link href="/science" className="text-bone hover:text-orange transition-colors">The Science</Link></li>
              <li><Link href="/imagination-engine" className="text-bone hover:text-orange transition-colors">Podcast</Link></li>
              <li><Link href="/press" className="text-bone hover:text-orange transition-colors">Press</Link></li>
              <li><Link href="/register" className="text-bone hover:text-orange transition-colors">Register</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-2xl uppercase tracking-wide text-green">
              Follow
            </h4>
            <ul className="mt-5 space-y-3 text-base">
              <li><a href="https://www.instagram.com/toysrus/" target="_blank" rel="noreferrer" className="text-bone hover:text-orange transition-colors">Instagram ↗</a></li>
              <li><a href="https://x.com/ToysRUs" target="_blank" rel="noreferrer" className="text-bone hover:text-orange transition-colors">X (Twitter) ↗</a></li>
              <li><a href="https://www.youtube.com/toysrus" target="_blank" rel="noreferrer" className="text-bone hover:text-orange transition-colors">YouTube ↗</a></li>
              <li><a href="https://www.pinterest.com/toysrus/" target="_blank" rel="noreferrer" className="text-bone hover:text-orange transition-colors">Pinterest ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t-[3px] border-bone/30 pt-8 text-sm text-bone/70 md:flex-row md:items-center md:justify-between">
          <p className="font-bold uppercase tracking-wide">© 2026 Toys &quot;R&quot; Us · The Boredom Initiative</p>
          <p className="italic">Designed by Shaylyn Kerrigan · BSU</p>
        </div>
      </div>
    </footer>
  );
}
