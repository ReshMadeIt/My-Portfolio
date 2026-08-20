"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-5">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <Image
            src="/resh.png"
            alt="ReshMadeIt"
            width={42}
            height={42}
            className="object-contain"
            priority
          />

          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <span className="text-[19px] sm:text-[22px] font-semibold tracking-tight text-[#f5f5f5]">
                ReshMadeIt
              </span>

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
            </div>

            <span className="mt-1 hidden text-[11px] text-[#777] sm:block">
              Android Developer
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="ml-auto hidden items-center gap-6 text-[13.5px] text-[#888] md:flex">

          {/* Testing */}
          <a
            href="https://play.google.com/apps/testing/com.nganya.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 blur-md opacity-60 transition duration-300 group-hover:opacity-100" />

            <span className="relative rounded-lg bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-white">
              Join Testing 🚀
            </span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/3ep8MXach"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 blur-md opacity-60 transition duration-300 group-hover:opacity-100" />

            <span className="relative flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-105">
              Discord
            </span>
          </a>

          {/* Projects */}
          {pathname !== "/projects" && (
            <Link
              href="/projects"
              className="transition-colors hover:text-white"
            >
              Projects
            </Link>
          )}

          {/* Subscribe */}
          {pathname !== "/subscribe" && (
            <div className="group relative">
              <Link
                href="/subscribe"
                className="transition-colors hover:text-white"
              >
                Subscribe
              </Link>

              <div className="invisible absolute right-0 mt-3 w-64 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/subscribe?type=updates"
                  className="block rounded-lg px-3 py-2 text-sm text-[#ccc] hover:bg-[#111] hover:text-white"
                >
                  📦 Product Updates
                </Link>

                <Link
                  href="/subscribe?type=beta"
                  className="block rounded-lg px-3 py-2 text-sm text-[#ccc] hover:bg-[#111] hover:text-white"
                >
                  🚀 Beta Testing
                </Link>

                <Link
                  href="/subscribe?type=newsletter"
                  className="block rounded-lg px-3 py-2 text-sm text-[#ccc] hover:bg-[#111] hover:text-white"
                >
                  🧠 Newsletter
                </Link>
              </div>
            </div>
          )}

          {/* Sponsor */}
          <Link
            href="/sponsor"
            className="transition-colors hover:text-white"
          >
            Sponsor
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#222] bg-[#111] text-[#ddd] transition hover:bg-[#181818] md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#151515] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 py-4">

          {/* Contract */}
          <a
            href="https://play.google.com/apps/testing/com.nganya.mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 p-[1px]"
          >
            <span className="block rounded-[11px] bg-[#0a0a0a] px-4 py-3 text-sm font-medium text-white">
              Hire me 🚀
            </span>
          </a>

          {/* Join Testing */}
          <a
            href="https://play.google.com/apps/testing/com.nganya.mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 p-[1px]"
          >
            <span className="block rounded-[11px] bg-[#0a0a0a] px-4 py-3 text-sm font-medium text-white">
              Join Testing 🚀
            </span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/3ep8MXach"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center rounded-xl border border-[#202020] bg-[#101010] px-4 py-3 text-sm font-medium text-white"
          >
            Discord
          </a>

          {/* Projects */}
          {pathname !== "/projects" && (
            <Link
              href="/projects"
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm text-[#aaa] transition hover:bg-[#111] hover:text-white"
            >
              Projects
            </Link>
          )}

          {/* Subscribe */}
          {pathname !== "/subscribe" && (
            <Link
              href="/subscribe"
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm text-[#aaa] transition hover:bg-[#111] hover:text-white"
            >
              Subscribe
            </Link>
          )}

          {/* Sponsor */}
          <Link
            href="/sponsor"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-sm text-[#aaa] transition hover:bg-[#111] hover:text-white"
          >
            Sponsor
          </Link>

        </div>
      </div>
    </nav>
  );
}