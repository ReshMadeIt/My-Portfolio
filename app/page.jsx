"use client";

export default function HomePage() {
  const profileImage = "/reshmadeit.jpg";

  const socials = [
    { name: "GitHub", href: "https://github.com/ReshMadeIt", img: "/icons/github.png" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/reshley-atsiaya", img: "/icons/linkedin.png" },
    { name: "X", href: "https://x.com/lil_mpesa", img: "/icons/x.png" },
    { name: "Email", href: "mailto:reshmadeit@gmail.com", img: "/icons/email.png" },
    { name: "Play Store", href: "https://play.google.com/store/apps/dev?id=8041553351271004681", img: "/icons/play.png" },
  ];



  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_30%)]" />

      <section className="max-w-6xl mx-auto min-h-screen px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">

            {/* subtle glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-8 text-center lg:text-left">

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Android Engineer • Jetpack Compose
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Building modern mobile experiences that feel{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(251,146,60,0.6)] animate-pulse">
                alive
              </span>{" "}
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
    </main>
  );
}