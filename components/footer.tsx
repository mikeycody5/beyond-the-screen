import Link from "next/link";
import Image from "next/image";
import { Marquee, MARQUEE_WORDS } from "@/components/marquee";
import { FiveStar } from "@/components/star-burst";

const footerWords = MARQUEE_WORDS;

const SOCIAL_PATHS: Record<string, string> = {
  ig: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
  x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  yt: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  pin: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
};

const SocialIcon = ({ kind, className }: { kind: keyof typeof SOCIAL_PATHS; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={SOCIAL_PATHS[kind]} />
  </svg>
);

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
              <li><Link href="/science/blog/more-than-entertainment" className="text-bone hover:text-orange transition-colors">Blog</Link></li>
              <li><Link href="/register" className="text-bone hover:text-orange transition-colors">Register</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-2xl uppercase tracking-wide text-green">
              Follow
            </h4>
            <ul className="mt-5 space-y-3 text-base">
              <li>
                <a href="https://www.instagram.com/toysrus/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bone hover:text-orange transition-colors">
                  <SocialIcon kind="ig" className="h-5 w-5" />
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="https://x.com/ToysRUs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bone hover:text-orange transition-colors">
                  <SocialIcon kind="x" className="h-5 w-5" />
                  X (Twitter) ↗
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/toysrus" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bone hover:text-orange transition-colors">
                  <SocialIcon kind="yt" className="h-5 w-5" />
                  YouTube ↗
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/toysrus/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bone hover:text-orange transition-colors">
                  <SocialIcon kind="pin" className="h-5 w-5" />
                  Pinterest ↗
                </a>
              </li>
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
