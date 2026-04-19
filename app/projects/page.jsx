export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#070707] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-[#888] mt-3 max-w-xl">
            A collection of apps and experiments focused on Android engineering,
            clean architecture, and real-world usability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card */}
          <div className="group border border-[#1a1a1a] bg-[#0a0a0a] rounded-2xl p-6 hover:border-orange-500/40 transition">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold group-hover:text-orange-400 transition">
                Nganya App
              </h2>
              <span className="text-xs text-[#666]">Android</span>
            </div>

            <p className="text-sm text-[#888] leading-6">
              A modern transport tracking app built with Kotlin, real-time updates,
              and clean architecture principles.
            </p>

            <div className="flex gap-2 mt-4 text-xs text-[#aaa]">
              <span>#Kotlin</span>
              <span>#MVVM</span>
              <span>#Supabase</span>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-between mt-6">

              {/* View Project */}
              <a
                href="https://play.google.com/apps/internaltest/4701223804579468060"
                className="text-sm text-orange-400 hover:text-orange-300"
              >
                View Project →
              </a>

              {/* Join Beta */}
              <a
                href="https://groups.google.com/g/nganya-testers" // replace with your actual group link
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs rounded-md bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:opacity-90 transition"
              >
                Join Beta
              </a>

            </div>

          </div>

          {/* Duplicate card pattern */}
          <div className="group border border-[#1a1a1a] bg-[#0a0a0a] rounded-2xl p-6 hover:border-red-500/40 transition">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold group-hover:text-red-400 transition">
                Portfolio System
              </h2>
              <span className="text-xs text-[#666]">Web</span>
            </div>

            <p className="text-sm text-[#888] leading-6">
              Personal developer brand system with subscriptions, sponsors,
              and email automation.
            </p>

            <div className="flex gap-2 mt-4 text-xs text-[#aaa]">
              <span>#Next.js</span>
              <span>#Supabase</span>
              <span>#Tailwind</span>
            </div>

            <a
              href="#"
              className="inline-block mt-6 text-sm text-red-400 hover:text-red-300"
            >
              View Project →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}