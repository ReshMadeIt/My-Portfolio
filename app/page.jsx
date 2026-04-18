"use client";

export default function HomePage() {
  const profileImage = "/profile.jpg";

  const socials = [
    { name: "GitHub", href: "https://github.com/ReshMadeIt", img: "/icons/github.png" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/reshley-atsiaya", img: "/icons/linkedin.png" },
    { name: "X", href: "https://x.com/lil_mpesa", img: "/icons/x.png" },
    { name: "Email", href: "mailto:reshmadeit@gmail.com", img: "/icons/email.png" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_30%)]" />

      <section className="relative max-w-6xl mx-auto min-h-screen px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        

        <div style={{ width: "200", height: 200, overflow: "hidden" }}>
        <img
          src={profileImage || ""}
          alt={""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px"
          }}
        />
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
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
              >
                <img src={social.img} alt={social.name} className="w-[150px] h-[150px] rounded-[24px]" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="/projects"
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