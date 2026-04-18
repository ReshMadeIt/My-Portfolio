export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070707] text-[#a3a3a3]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f5f5f5]">
              Reshley Atsiaya
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#8a8a8a]">
              Android engineer building polished mobile products with modern architecture,
              thoughtful UX, and production-ready execution.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#666]">Nairobi, Kenya</p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/" className="transition-colors hover:text-[#f5f5f5]">
              Home
            </a>
            <a href="/projects" className="transition-colors hover:text-[#f5f5f5]">
              Projects
            </a>
            <a
              href="mailto:reshmadeit@gmail.com"
              className="transition-colors hover:text-[#f5f5f5]"
            >
              Email
            </a>
            <a
              href="https://github.com/ReshMadeIt"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#f5f5f5]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/reshley-atsiaya"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#f5f5f5]"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-[#666]">&copy; {year} Reshley Atsiaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
