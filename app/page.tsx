"use client";

import { useMemo } from "react";

export default function Page() {
  const NAV = useMemo(
    () => [
      { label: "How it works", href: "#how-it-works" },
      { label: "Why CCC", href: "#why-ccc" },
      { label: "Safety", href: "#safety" },
      { label: "Get App", href: "#get-app" },
    ],
    []
  );

  const APP_STORE_URL = "#";
  const PLAY_STORE_URL = "#";

  const isMobile = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#0e3b43] ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">
                Card Chaser Club
              </div>
              <div className="text-xs text-white/60">Fee-free local marketplace</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-app"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#00B8D4] px-5 text-sm font-semibold text-black shadow-lg shadow-[#00B8D4]/20 hover:opacity-90"
            >
              Get App
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#00B8D4]" />
            Launching first in the WI / IL Stateline area
          </div>

          {/* UPDATED HERO HEADLINE (each sentence on its own line) */}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Join the Club.
            <br />
            <span className="text-[#00B8D4]">No listing fees.</span>
            <br />
            <span className="text-[#00B8D4]">No selling fees.</span>
          </h1>

          {/* Store buttons directly under headline */}
          <div id="get-app" className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-black px-6 text-white ring-1 ring-white/10 hover:opacity-90"
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
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-black px-6 text-white ring-1 ring-white/10 hover:opacity-90"
            >
              <div className="text-left leading-tight">
                <div className="text-[11px] text-white/70">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* UPDATED: Subhead moved below buttons */}
          <h2 className="mt-7 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Meet local hobbyists.
          </h2>

          {/* Supporting paragraph moved below buttons */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            A simple way to buy, sell, and trade cards with people near you—without giving up 30% or
            more to traditional online marketplaces. Keep more of the value in your pocket by
            chasing cards locally with other hobbyists.
          </p>
        </div>

        {/* Right - Placeholder hero art (phone/in-app visual later) */}
        <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="rounded-2xl bg-gradient-to-br from-[#00B8D4]/20 via-[#0b0f12] to-[#0b0f12] p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white/80">In-app preview</div>
            <div className="mt-4 h-64 rounded-xl bg-black/30 ring-1 ring-white/10" />
            <div className="mt-4 text-sm text-white/60">
              Phone mock + branded waypoint will go here.
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#00B8D4] md:text-4xl">
            How it works
          </h2>
          <p className="mt-5 text-white/75 md:text-lg">
            Browse cards and collectibles available near you and adjust your search radius to fit
            you—whether you’re looking to buy, sell, or trade. See what local hobbyists are offering.
          </p>
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Browse nearby</div>
              <p className="mt-2 text-white/70">
                Discover listings around you and find cards, sealed product, or collectibles in your
                area.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Buy or sell directly</div>
              <p className="mt-2 text-white/70">
                If you’re buying, connect with sellers to ask questions, confirm details, and line
                up a meet. If you’re selling, list and chat directly—no listing fees, no selling
                fees.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Meet locally</div>
              <p className="mt-2 text-white/70">
                Meet at public locations set by you in the map. No shipping. No waiting. Just a clean,
                straightforward transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CCC */}
      <section id="why-ccc" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00B8D4] md:text-4xl">
              Why Card Chaser Club
            </h2>
            <p className="mt-5 text-white/75 md:text-lg">
              Keep more value in your pocket by trading locally. Avoid heavy marketplace fees and get
              deals done faster—without shipping, delays, or surprises.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Fee-free</div>
              <p className="mt-2 text-white/70">
                No listing fees. No selling fees. Just hobbyists connecting locally.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Local-first</div>
              <p className="mt-2 text-white/70">
                Browse what’s nearby, message directly, and meet at public locations you choose.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">Straightforward</div>
              <p className="mt-2 text-white/70">
                No shipping. No waiting. A clean exchange, face-to-face.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#00B8D4] md:text-4xl">
            Safety
          </h2>
          <p className="mt-5 text-white/75 md:text-lg">
            Trade in public. Keep conversations in-app. Your meet locations are chosen by you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-lg font-semibold text-white">Public meetups</div>
            <p className="mt-2 text-white/70">
              Meet at public locations to keep trades simple and safe.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-lg font-semibold text-white">In-app messaging</div>
            <p className="mt-2 text-white/70">
              Ask questions and confirm details before meeting.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-lg font-semibold text-white">Your controls</div>
            <p className="mt-2 text-white/70">
              Set your meet locations and radius preferences that fit you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0f12]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">Card Chaser Club</div>
              <div className="mt-1 text-sm text-white/60">
                Fee Free Hobbyists Marketplace. Buy, Sell &amp; Trade Locally.
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/60 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-xs text-white/50">
            © {new Date().getFullYear()} Card Chaser Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
