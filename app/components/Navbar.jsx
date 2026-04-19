export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-6 px-5">
        <div className="flex flex-col leading-none">
          <a href="/" className="text-[15px] font-semibold tracking-tight text-[#f5f5f5]">
            Reshley Atsiaya
          </a>
          <span className="mt-1 text-[12px] text-[#888]">Android Engineer | Kotlin Developer</span>
        </div>

        <div className="ml-auto flex items-center gap-6 text-[13.5px] text-[#888]">
          <a href="/" className="transition-colors hover:text-[#ededed]">
            Home
          </a>
          <a href="/projects" className="transition-colors hover:text-[#ededed]">
            Projects
          </a>
          <a href="mailto:reshmadeit@gmail.com" className="transition-colors hover:text-[#ededed]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}