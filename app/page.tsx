"use client";

import { useMemo } from "react";

export default function Home() {
  // TODO: Replace with your real store URLs when ready
  const APP_STORE_URL = "https://apps.apple.com/";
  const PLAY_STORE_URL = "https://play.google.com/store";

  const isIOS = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  const isAndroid = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android/i.test(navigator.userAgent);
  }, []);

  const handleGetApp = () => {
    if (typeof window === "undefined") return;

    if (isIOS) {
      window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
      return;
    }

    if (isAndroid) {
      window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
      return;
    }

    // Desktop/unknown -> open App Store page (single CTA only, per your request)
    window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
  };

  const handleBackToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#1B1B1B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1B1B1B]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Placeholder logo mark (swap later) */}
            <div className="h-9 w-9 rounded-xl bg-[#00B8D4]/20 ring-1 ring-[#00B8D4]/40" />
            <span className="text-base font-semibold tracking-tight">Card Chaser Club</span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <a
              href="#how"
              className="hidden rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 md:inline-block"
            >
              How It Works
            </a>
            <a
              href="#why"
              className="hidden rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 md:inline-block"
            >
              Why CCC
            </a>
            <a
              href="#safety"
              className="hidden rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 md:inline-block"
            >
              Safety
            </a>
            <button
              type="button"
              onClick={handleGetApp}
              className="rounded-xl bg-[#00B8D4] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Get App
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-[#00B8D4]" />
              Launching first in the WI / IL Stateline area
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="block">Join the Club.</span>
              <span className="block text-[#00B8D4]">No listing fees.</span>
              <span className="block text-[#00B8D4]">No selling fees.</span>
            </h1>
          </div>

          {/* Right - Hero visual + subheader + copy (kept next to hero headline) */}
          <div>
            <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10">
                {/* Inline SVG visual (brand-aligned: cards + map pin) */}
                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,184,212,0.28),transparent_45%),radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.10),transparent_45%)]" />
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 720 320"
                    aria-hidden="true"
                  >
                    {/* stacked cards */}
                    <g opacity="0.95">
                      <rect
                        x="175"
                        y="80"
                        width="240"
                        height="160"
                        rx="22"
                        fill="rgba(255,255,255,0.08)"
                        stroke="rgba(255,255,255,0.18)"
                      />
                      <rect
                        x="210"
                        y="60"
                        width="240"
                        height="160"
                        rx="22"
                        fill="rgba(0,0,0,0.28)"
                        stroke="rgba(255,255,255,0.14)"
                      />
                      <rect
                        x="245"
                        y="40"
                        width="240"
                        height="160"
                        rx="22"
                        fill="rgba(255,255,255,0.06)"
                        stroke="rgba(255,255,255,0.16)"
                      />
                      {/* teal accent stripe */}
                      <rect x="265" y="62" width="200" height="8" rx="4" fill="#00B8D4" opacity="0.8" />
                      {/* simple “card art” lines */}
                      <rect x="270" y="88" width="190" height="90" rx="16" fill="rgba(255,255,255,0.05)" />
                      <rect x="285" y="194" width="120" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
                      <rect x="285" y="212" width="160" height="8" rx="4" fill="rgba(255,255,255,0.10)" />
                    </g>

                    {/* map pin */}
                    <g transform="translate(520 76)">
                      <path
                        d="M64 0c-30 0-54 24-54 54 0 38 54 106 54 106s54-68 54-106C118 24 94 0 64 0z"
                        fill="rgba(0,184,212,0.22)"
                        stroke="rgba(0,184,212,0.65)"
                        strokeWidth="3"
                      />
                      <circle cx="64" cy="54" r="18" fill="#00B8D4" opacity="0.85" />
                      <circle cx="64" cy="54" r="8" fill="rgba(0,0,0,0.35)" />
                    </g>
                  </svg>
                </div>

                <div className="p-4">
                  <p className="text-xs text-white/55">Local meetups • Public locations • In-app chat</p>
                </div>
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
              Meet Local <span className="text-[#00B8D4]">Hobbyists</span>
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

            <p className="mt-6 rounded-2xl bg-white/[0.03] p-5 text-base leading-relaxed text-white/75 ring-1 ring-white/10 md:text-lg">
              Buy, sell, and trade cards with people near you—without giving up 30% or more to traditional
              online marketplaces. Chase cards locally and meet other hobbyists.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            How It <span className="text-[#00B8D4]">Works</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 rounded-2xl bg-white/[0.03] p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
            Browse cards and collectibles near you, with the ability to adjust your search radius to fit
            what works best for you. (Buy, sell, or trade) by seeing what local hobbyists are offering in
            your area.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            If you’re buying, connect directly with sellers to ask questions, confirm details, and set up
            a time to meet.
          </p>

          <p className="mt-5 rounded-2xl bg-white/[0.03] p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
            If you’re selling, list your cards and communicate directly with interested hobbyists—no
            listing fees, no selling fees.
          </p>

          <p className="mt-5 text-base font-semibold text-white md:text-lg">
            Meet locally. No shipping. No waiting. Just a clean, straightforward transaction.
          </p>
        </div>
      </section>

      {/* Why CCC */}
      <section id="why" className="bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why <span className="text-[#00B8D4]">CCC</span>
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

            <p className="mt-6 rounded-2xl bg-black/20 p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
              Trading cards shouldn’t feel like work, risk, or a financial hit before a deal even happens.
              But most collectors are pushed into platforms built around shipping, fees, and volume—not
              community.
            </p>

            <p className="mt-5 text-base text-white/75 md:text-lg">
              Online marketplaces take a large cut of every sale. Social media groups are unorganized and
              rely on trust between strangers in private messages. Local deals still happen, but without
              structure, consistency, or safeguards.
            </p>

            <p className="mt-5 rounded-2xl bg-black/20 p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
              Card Chaser Club exists to bring card trading back to what it should be—local, personal, and
              fair. A place built for hobbyists who want to connect, trade, and keep more of the value in
              their collection.
            </p>

            <p className="mt-5 text-base font-semibold text-white md:text-lg">
              No listing fees. No selling fees. No unnecessary middlemen. Just a better way to chase cards
              with people near you.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Safety <span className="text-[#00B8D4]">&amp; Trust</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 rounded-2xl bg-white/[0.03] p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
            Meeting in person should feel comfortable, not uncertain. That’s why Card Chaser Club is
            designed around transparency, accountability, and public meetups.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Users connect through in-app messaging so details stay in one place. Meetups happen at public
            locations selected on the map, helping both sides feel confident before a deal takes place.
          </p>

          <p className="mt-5 rounded-2xl bg-white/[0.03] p-5 text-base text-white/75 ring-1 ring-white/10 md:text-lg">
            Profiles, ratings, and repeat interactions help build trust over time, while simple reporting
            tools give the community a way to flag bad behavior when needed.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Card Chaser Club doesn’t replace common sense—it supports it. By keeping trades local, visible,
            and structured, the platform helps collectors focus on the hobby instead of worrying about what
            could go wrong.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-base font-semibold">
                <span>Card Chaser </span>
                <span className="text-[#00B8D4]">Club</span>
              </div>
              <div className="mt-1 text-sm text-white/55">Buy, Sell &amp; Trade Locally.</div>
            </div>
          </div>

          <div className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} Card Chaser Club. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to top pop-up arrow */}
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00B8D4] text-lg font-black text-black shadow-lg shadow-[#00B8D4]/20 hover:opacity-90"
      >
        ↑
      </button>
    </main>
  );
}
