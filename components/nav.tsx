"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", color: "pink" },
  { href: "/science", label: "Science", color: "blue" },
  { href: "/imagination-engine", label: "Podcast", color: "green" },
  { href: "/press", label: "Press", color: "orange" },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink",
  blue: "bg-blue",
  green: "bg-green",
  orange: "bg-orange",
};

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-ink bg-bone">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-10 w-24 md:h-12 md:w-28">
            <Image
              src="https://www.toysrus.com/cdn/shop/t/7/assets/tru-logo.png?v=150549919582931083811717694967"
              alt="Toys R Us"
              fill
              unoptimized
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden border-l-[3px] border-ink pl-3 md:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-pink leading-none">
              Presents
            </p>
            <p className="font-display text-xl text-ink leading-tight">
              Beyond <em className="text-blue">the</em> Screen
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  className={cn(
                    "absolute inset-0 -z-0 rounded-full",
                    colorMap[link.color]
                  )}
                  initial={false}
                  animate={{
                    scale: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 -z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    colorMap[link.color]
                  )}
                />
              </Link>
            );
          })}
          <Link
            href="/register"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-bold uppercase tracking-wide text-bone chunky hover:bg-pink-deep"
          >
            Reserve spot ★
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-ink"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-[3px] border-ink bg-bone px-5 py-6">
          <nav className="flex flex-col gap-3">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-full px-5 py-3 text-base font-bold uppercase tracking-wide",
                  i === 0 && "bg-pink text-bone",
                  i === 1 && "bg-blue text-bone",
                  i === 2 && "bg-green text-ink",
                  i === 3 && "bg-orange text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-base font-bold uppercase text-bone chunky"
            >
              Reserve your spot ★
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
