"use client";

import Image from "next/image";

export default function HomePage() {
  const profileImage = "/resh.png";

  const socials = [
    { name: "GitHub", href: "https://github.com/ReshMadeIt", img: "/icons/github.png" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/reshmadeit", img: "/icons/linkedin.png" },
    { name: "X", href: "https://x.com/reshmadeit", img: "/icons/x.png" },
    { name: "Email", href: "mailto:reshmadeit@gmail.com", img: "/icons/email.png" },
    { name: "Play Store", href: "https://play.google.com/store/apps/dev?id=8041553351271004681", img: "/icons/play.png" },
{
    name: "Discord",
    href: "https://discord.gg/1539700112161509438",
    img: "/icons/discord.png"
},
  ];

  return (
<main className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white">
{/* Pure black background */}
<div className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-black" />
      <section className="max-w-6xl mx-auto min-h-screen px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">

            {/* glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* image */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* AGE OVERLAY */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="mb-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white">
                23 years old
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-8 text-center lg:text-left">

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Android Developer
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Building modern mobile experiences that feel{" "}
              <span className="bg-[length:200%_100%] bg-gradient-to-r from-orange-300 via-red-500 via-amber-400 to-orange-300 bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_25px_rgba(251,146,60,0.5)]">
                alive
              </span>
              {" "}
              <span className="text-[#FF5700]">.</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-7 max-w-xl">
              I design and engineer polished Android applications with clean architecture, premium UI, and real-world impact — from portfolio experiences to innovative commuter platforms like Nganya.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className="w-5 h-5"
                />

                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/projects"
              className="inline-flex px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </a>
          </div>

        </div>
      </section>

<section className="py-20">
  <div className="mx-auto max-w-screen-xl px-5">

    {/* Header */}
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="mb-2 text-sm font-medium text-orange-500">
          MY WORK
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Things I&apos;ve built.
        </h2>

        <p className="mt-2 max-w-xl text-sm text-[#777] sm:text-base">
          A few projects, experiments and products I&apos;ve been working on.
        </p>
      </div>

      <span className="hidden text-xs text-[#555] sm:block">
        Swipe →
      </span>
    </div>

    {/* Swipe row */}
   <div className="-mx-5 overflow-x-auto px-5 pb-4 hide-scrollbar">
      <div className="flex w-max gap-4">

        {/* Card 1 */}
        <div className="group w-[280px] shrink-0 overflow-hidden rounded-2xl border border-[#1c1c1c] bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:border-[#2a2a2a] sm:w-[320px]">
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent">
<div className="group w-[280px] shrink-0 overflow-hidden rounded-2xl border border-[#1c1c1c] bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:border-[#2a2a2a] sm:w-[320px]">

  <div className="relative h-48 overflow-hidden bg-black">
    <Image
      src="/nganya.png"
      alt="Nganya Mobile"
      fill
      sizes="(max-width: 640px) 280px, 320px"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black/20" />
  </div>

</div>

            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-[#bbb] backdrop-blur">
              Android
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-medium text-white">
              Nganya Mobile
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#777]">
              A community-driven Android experience for discovering
              Kenya&apos;s matatu culture.
            </p>

            <div className="mt-4 flex gap-2">
              <span className="rounded-md bg-[#151515] px-2 py-1 text-[11px] text-[#999]">
                Kotlin
              </span>
              <span className="rounded-md bg-[#151515] px-2 py-1 text-[11px] text-[#999]">
                Compose
              </span>
              <span className="rounded-md bg-[#151515] px-2 py-1 text-[11px] text-[#999]">
                Supabase
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}