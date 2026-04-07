import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          ReshMadeIt
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}