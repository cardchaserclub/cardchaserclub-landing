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

    // Desktop/unknown -> scroll to store buttons
    const el = document.getElementById("get-app");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#1B1B1B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1B1B1B]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Placeholder logo mark (swap later) */}
            <div className="h-9 w-9 rounded-xl bg-[#00B8D4]/20 ring-1 ring-[#00B8D4]/40" />
            <span className="text-base font-semibold tracking-tight">
              Card Chaser Club
            </span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <a
              href="#how"
              className="hidden rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 md:inline-block"
            >
              How it works
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
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-[#00B8D4]" />
              Launching first in the WI / IL Stateline area
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Join the Club.
              <br />
              <span className="text-[#00B8D4]">
                No listing fees. No selling fees.
              </span>
            </h1>

            {/* Store buttons directly under headline */}
            <div id="get-app" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-6 text-white ring-1 ring-white/10 hover:opacity-90"
              >
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-white/70">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-6 text-white ring-1 ring-white/10 hover:opacity-90"
              >
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-white/70">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* ONLY MOVE: "Meet local hobbyists." becomes the header for the first paragraph */}
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Meet local hobbyists.
            </h2>

            {/* Supporting paragraph moved below buttons */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              A simple way to buy, sell, and trade cards with people near you—without giving up 30%
              or more to traditional online marketplaces. Keep more of the value in your pocket by
              chasing cards locally with other hobbyists.
            </p>
          </div>

          {/* Right - Placeholder hero art (phone/in-app visual later) */}
          <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/70">In-app map preview</p>
                <span className="rounded-full bg-[#00B8D4]/20 px-3 py-1 text-xs font-semibold text-[#00B8D4] ring-1 ring-[#00B8D4]/40">
                  Teaser
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <div className="h-64 w-full bg-[radial-gradient(circle_at_25%_30%,rgba(0,184,212,0.35),transparent_45%),radial-gradient(circle_at_70%_55%,rgba(255,255,255,0.10),transparent_45%)]" />
                <div className="p-4">
                  <p className="text-sm text-white/75">
                    Phone + in-app map visual goes here (with your branded waypoint).
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    We’ll swap this placeholder once the waypoint asset is finalized in the logo
                    thread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            How it <span className="text-[#00B8D4]">works</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 text-base text-white/75 md:text-lg">
            Browse cards and collectibles near you, with the ability to adjust your search radius to
            fit what works best for you. (Buy, sell, or trade) by seeing what local hobbyists are
            offering in your area.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            If you’re buying, connect directly with sellers to ask questions, confirm details, and
            set up a time to meet.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
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

            <p className="mt-6 text-base text-white/75 md:text-lg">
              Trading cards shouldn’t feel like work, risk, or a financial hit before a deal even
              happens. But most collectors are pushed into platforms built around shipping, fees,
              and volume—not community.
            </p>

            <p className="mt-5 text-base text-white/75 md:text-lg">
              Online marketplaces take a large cut of every sale. Social media groups are
              unorganized and rely on trust between strangers in private messages. Local deals still
              happen, but without structure, consistency, or safeguards.
            </p>

            <p className="mt-5 text-base text-white/75 md:text-lg">
              Card Chaser Club exists to bring card trading back to what it should be—local,
              personal, and fair. A place built for hobbyists who want to connect, trade, and keep
              more of the value in their collection.
            </p>

            <p className="mt-5 text-base font-semibold text-white md:text-lg">
              No listing fees. No selling fees. No unnecessary middlemen. Just a better way to chase
              cards with people near you.
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

          <p className="mt-6 text-base text-white/75 md:text-lg">
            Meeting in person should feel comfortable, not uncertain. That’s why Card Chaser Club is
            designed around transparency, accountability, and public meetups.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Users connect through in-app messaging so details stay in one place. Meetups happen at
            public locations selected on the map, helping both sides feel confident before a deal
            takes place.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Profiles, ratings, and repeat interactions help build trust over time, while simple
            reporting tools give the community a way to flag bad behavior when needed.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Card Chaser Club doesn’t replace common sense—it supports it. By keeping trades local,
            visible, and structured, the platform helps collectors focus on the hobby instead of
            worrying about what could go wrong.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-base font-semibold">Card Chaser Club</div>
              <div className="mt-1 text-sm text-white/55">
                Fee-free hobbyist marketplace. Buy, sell &amp; trade locally.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-white/55">
              <a
                className="rounded-lg px-3 py-2 hover:bg-white/10 hover:text-[#00B8D4]"
                href="#how"
              >
                How it works
              </a>
              <a
                className="rounded-lg px-3 py-2 hover:bg-white/10 hover:text-[#00B8D4]"
                href="#why"
              >
                Why CCC
              </a>
              <a
                className="rounded-lg px-3 py-2 hover:bg-white/10 hover:text-[#00B8D4]"
                href="#safety"
              >
                Safety
              </a>
              <button
                type="button"
                onClick={handleGetApp}
                className="rounded-lg px-3 py-2 hover:bg-white/10 hover:text-[#00B8D4]"
              >
                Get App
              </button>
            </div>
          </div>

          <div className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} Card Chaser Club. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
