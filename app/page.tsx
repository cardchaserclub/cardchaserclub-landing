"use client";

import { useEffect, useMemo, useState } from "react";

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

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setAtBottom(nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

    alert("App launching soon on iOS and Android.");
  };

  return (
    <main className="min-h-screen bg-[#1B1B1B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1B1B1B]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Placeholder logo mark (swap later) */}
            <div className="h-10 w-10 rounded-2xl bg-[#00B8D4]/20 ring-1 ring-[#00B8D4]/40" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">
                Card Chaser Club
              </div>
              <div className="text-xs text-white/60">
                Fee-free local marketplace
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#why-ccc"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              Why CCC
            </a>
            <a
              href="#safety"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              Safety &amp; Trust
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleGetApp}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#00B8D4] px-5 text-sm font-semibold text-black shadow-lg shadow-[#00B8D4]/20 hover:opacity-90"
            >
              Get App
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#00B8D4]" />
            Beta access now open in select counties
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="block">Join The Club.</span>
            <span className="mt-3 block text-[#00B8D4]">No Listing Fees.</span>
            <span className="mt-2 block text-[#00B8D4]/85">No Selling Fees.</span>
          </h1>
        </div>

        {/* Right - Hero Art */}
        <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            {/* Put your generated image in: /public/hero-banner.png */}
            <img
              src="/hero-banner.png"
              alt="Two collectors reviewing sports cards locally"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Meet Local Hobbyists (branded like section headers) */}
        <div className="md:col-span-2">
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Meet Local <span className="text-[#00B8D4]">Hobbyists</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            Buy, sell, and trade cards with people near you—without giving up 30%
            or more to traditional online marketplaces. Chase cards locally and
            meet other hobbyists.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-14 md:py-16"
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            How It <span className="text-[#00B8D4]">Works</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 text-base text-white/75 md:text-lg">
            Browse cards and collectibles near you, with the ability to adjust your
            search radius to fit what works best for you. (Buy, sell, or trade) by
            seeing what local hobbyists are offering in your area.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            If you’re buying, connect directly with sellers to ask questions,
            confirm details, and set up a time to meet.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            If you’re selling, list your cards and communicate directly with
            interested hobbyists—no listing fees, no selling fees.
          </p>

          <p className="mt-5 text-base font-semibold text-white md:text-lg">
            Meet locally. No shipping. No waiting. Just a clean, straightforward
            transaction.
          </p>
        </div>
      </section>

      {/* Why CCC */}
      <section id="why-ccc" className="bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why <span className="text-[#00B8D4]">CCC</span>
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

            <p className="mt-6 text-base text-white/75 md:text-lg">
              Trading cards shouldn’t feel like work, risk, or a financial hit
              before a deal even happens. But most collectors are pushed into
              platforms built around shipping, fees, and volume—not community.
            </p>

            <p className="mt-5 text-base text-white/75 md:text-lg">
              Online marketplaces take a large cut of every sale. Social media
              groups are unorganized and rely on trust between strangers in private
              messages. Local deals still happen, but without structure,
              consistency, or safeguards.
            </p>

            <p className="mt-5 text-base text-white/75 md:text-lg">
              Card Chaser Club exists to bring card trading back to what it should
              be—local, personal, and fair. A place built for hobbyists who want
              to connect, trade, and keep more of the value in their collection.
            </p>

            <p className="mt-5 text-base font-semibold text-white md:text-lg">
              No listing fees. No selling fees. No unnecessary middlemen. Just a
              better way to chase cards with people near you.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Safety <span className="text-[#00B8D4]">&amp; Trust</span>
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#00B8D4]/70" />

          <p className="mt-6 text-base text-white/75 md:text-lg">
            Meeting in person should feel comfortable, not uncertain. That’s why
            Card Chaser Club is designed around transparency, accountability, and
            public meetups.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Users connect through in-app messaging so details stay in one place.
            Meetups happen at public locations selected on the map, helping both
            sides feel confident before a deal takes place.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Profiles, ratings, and repeat interactions help build trust over time,
            while simple reporting tools give the community a way to flag bad
            behavior when needed.
          </p>

          <p className="mt-5 text-base text-white/75 md:text-lg">
            Card Chaser Club doesn’t replace common sense—it supports it. By keeping
            trades local, visible, and structured, the platform helps collectors
            focus on the hobby instead of worrying about what could go wrong.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-base font-semibold text-white">
            Card <span className="text-[#00B8D4]">Chaser</span> Club
          </div>
          <div className="mt-1 text-sm text-white/55">
            Buy, Sell &amp; Trade Locally.
          </div>

          <div className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} Card Chaser Club. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to top (ONLY at bottom, centered, transparent) */}
      {atBottom && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-transparent px-6 py-2 text-sm text-white/70 backdrop-blur hover:bg-white/10"
          aria-label="Back to top"
        >
          Back To Top
        </button>
      )}
    </main>
  );
}
