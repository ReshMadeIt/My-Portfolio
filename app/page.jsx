"use client";

import Image from "next/image";

export default function HomePage() {
  const profileImage = "/resh.png";

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/ReshMadeIt",
      img: "/icons/github.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/reshmadeit",
      img: "/icons/linkedin.png",
    },
    {
      name: "X",
      href: "https://x.com/reshmadeit",
      img: "/icons/x.png",
    },
    {
      name: "Email",
      href: "mailto:reshmadeit@gmail.com",
      img: "/icons/email.png",
    },
    {
      name: "Play Store",
      href: "https://play.google.com/store/apps/dev?id=8041553351271004681",
      img: "/icons/play.png",
    },
    {
      name: "Discord",
      href: "https://discord.gg/1539700112161509438",
      img: "/icons/discord.png",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-black" />

      {/* ================= HERO ================= */}
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* Profile */}
        <div className="flex justify-center lg:justify-start">
          <div className="group relative h-56 w-56 overflow-hidden rounded-3xl border border-black/10 shadow-2xl dark:border-white/10 sm:h-64 sm:w-64 lg:h-80 lg:w-80">

            {/* Hover glow */}
            <div className="absolute inset-0 z-10 rounded-3xl bg-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />

            <Image
              src={profileImage}
              alt="ReshMadeIt"
              fill
              priority
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Age */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-2 justify-center pb-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                23 years old
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">

          <div className="space-y-4">

            <p className="text-sm uppercase tracking-[0.35em] text-black/50 dark:text-white/50">
              Android Developer
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Building modern mobile experiences that feel{" "}

              <span className="bg-[length:200%_100%] bg-gradient-to-r from-orange-300 via-red-500 via-amber-400 to-orange-300 bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_25px_rgba(251,146,60,0.5)]">
                alive
              </span>

              {" "}
              <span className="text-[#FF5700]">.</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-black/70 dark:text-white/70 md:text-lg">
              I design and engineer polished Android applications with clean
              architecture, premium UI, and real-world impact — from portfolio
              experiences to innovative commuter platforms like Nganya.
            </p>

          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-black/10 bg-black/5 px-4 py-2 backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Image
                  src={social.img}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />

                <span className="text-sm">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/projects"
              className="inline-flex rounded-2xl bg-black px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
            >
              View My Work
            </a>
          </div>

        </div>
      </section>


      {/* ================= MY WORK ================= */}
      <section className="py-20">

        <div className="mx-auto max-w-screen-xl px-5">

          {/* Header */}
          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="mb-2 text-sm font-medium text-orange-500">
                MY WORK
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                Things I&apos;ve built.
              </h2>

              <p className="mt-2 max-w-xl text-sm text-black/50 dark:text-[#777] sm:text-base">
                A few projects, experiments and products I&apos;ve been working
                on.
              </p>
            </div>

            <span className="hidden text-xs text-black/40 dark:text-[#555] sm:block">
              Swipe →
            </span>

          </div>


          {/* Swipe row */}
          <div className="-mx-5 overflow-x-auto px-5 pb-4 hide-scrollbar">

            <div className="flex w-max gap-4">

              {/* ================= CARD 1 ================= */}
              <div className="group w-[280px] shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:border-[#1c1c1c] dark:bg-[#0d0d0d] dark:hover:border-[#2a2a2a] sm:w-[320px]">

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-black">

                  <Image
                    src="/nganya.png"
                    alt="Nganya Mobile"
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-[#bbb] backdrop-blur">
                    Android
                  </span>

                </div>


                {/* Content */}
                <div className="p-5">

                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Nganya Mobile
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-black/50 dark:text-[#777]">
                    A community-driven Android experience for discovering
                    Kenya&apos;s matatu culture.
                  </p>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-md bg-black/5 px-2 py-1 text-[11px] text-black/50 dark:bg-[#151515] dark:text-[#999]">
                      Kotlin
                    </span>

                    <span className="rounded-md bg-black/5 px-2 py-1 text-[11px] text-black/50 dark:bg-[#151515] dark:text-[#999]">
                      Compose
                    </span>

                    <span className="rounded-md bg-black/5 px-2 py-1 text-[11px] text-black/50 dark:bg-[#151515] dark:text-[#999]">
                      Supabase
                    </span>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}