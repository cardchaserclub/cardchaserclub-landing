"use client";

import { useMemo } from "react";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-[#0b0f12] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#0e3b43] ring-1 ring-white/10" />
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
              How it works
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
              Safety
            </a>
            <a
              href="#get-app"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              Get App
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (isIOS) window.open(APP_STORE_URL, "_blank");
                else if (isAndroid) window.open(PLAY_STORE_URL, "_blank");
                else
                  document
                    .getElementById("get-app")
                    ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#00B8D4] px-5 text-sm font-semibold text-black shadow-lg shadow-[#00B8D4]/20 hover:opacity-90"
            >
              Get App
            </button>
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

          {/* No wrapping request: keep the hero headline clean (no forced line breaks) */}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Join the Club.
          </h1>

          <div id="get-app" className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => window.open(APP_STORE_URL, "_blank")}
              className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-black px-6 py-5 text-base font-semibold text-white hover:border-white/20 sm:w-auto sm:min-w-[260px]"
            >
              Download on the App Store
            </button>

            <button
              onClick={() => window.open(PLAY_STORE_URL, "_blank")}
              className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-black px-6 py-5 text-base font-semibold text-white hover:border-white/20 sm:w-auto sm:min-w-[260px]"
            >
              Get it on Google Play
            </button>
          </div>

          {/* Subheader moved below buttons (as requested) */}
          <h2 className="mt-7 text-2xl font-semibold tracking-tight text-white md:text-3xl md:whitespace-nowrap">
            No listing fees. No selling fees.{" "}
            <span className="text-[#00B8D4]">Meet local hobbyists.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            A simple way to buy, sell, and trade cards with people near you—without
            giving up 30% or more to traditional online marketplaces. Keep more of
            the value in your pocket by chasing cards locally with other hobbyists.
          </p>
        </div>

        {/* Right: replace placeholder art with stacked sports cards imagery */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1612036781124-8470b3a1d9b4?auto=format&fit=crop&w=1400&q=70"
              alt="Stacked sports cards"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f12]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
