"use client";

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function HomePage() {

  const socials = [
    { name: "GitHub", href: "https://github.com/ReshMadeIt", icon: <FaGithub className="text-lg" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/reshley-atsiaya", icon: <FaLinkedin className="text-lg" /> },
    { name: "X", href: "https://x.com/lil_mpesa", icon: <FaXTwitter className="text-lg" /> },
    { name: "Email", href: "mailto:reshmadeit@gmail.com", icon: <FaEnvelope className="text-lg" /> },
  ];

    return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_30%)]" />

      <section className="relative max-w-6xl mx-auto min-h-screen px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl" />
            <img
              src="/public/profile.jpg"
              alt="ReshMadeIt"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-[2rem] object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Android Engineer • Jetpack Compose
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building modern mobile experiences that feel alive.
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-8 max-w-2xl">
              I design and engineer polished Android applications with clean architecture, premium UI, and real-world impact — from portfolio experiences to innovative commuter platforms like Nganya.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="text-lg" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}