export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070707] text-[#a3a3a3]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between">

        {/* LEFT */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f5f5f5]">
              Reshley Atsiaya
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#8a8a8a]">
              Android engineer building polished mobile products with modern architecture,
              thoughtful UX, and production-ready execution.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">
            Nairobi, Kenya
          </p>

          {/* Sponsor CTA */}
          <a
            href="/sponsor"
            className="inline-flex mt-3 text-sm text-orange-400 hover:text-orange-300 transition-colors"
          >
            Become a Sponsor →
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 text-sm md:items-end">

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-end">
            <a href="/" className="hover:text-[#f5f5f5] transition-colors">Home</a>
            <a href="/projects" className="hover:text-[#f5f5f5] transition-colors">Projects</a>
            <a href="/subscribe" className="hover:text-[#f5f5f5] transition-colors">Subscribe</a>
            <a href="/sponsor" className="hover:text-[#f5f5f5] transition-colors">Sponsor</a>
            <a href="mailto:reshmadeit@gmail.com" className="hover:text-[#f5f5f5] transition-colors">Email</a>
            <a href="https://github.com/ReshMadeIt" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/reshley-atsiaya" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#666]">
            &copy; {year} Reshley Atsiaya. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}