import type { Metadata } from "next";
import { Abril_Fatface, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond the Screen — Toys \"R\" Us",
  description:
    "A movement to reclaim imagination. Join the hybrid play + lecture event reuniting families with the science of unstructured play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abril.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        <Nav />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
