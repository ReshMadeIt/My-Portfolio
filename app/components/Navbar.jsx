"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  console.log("Navbar rendered");
  const pathname = usePathname();
  return (
    <nav className="relative sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-6 px-5">
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/science.png"
                alt="Logo"
                width={48}
                height={48}
                className="mb-1"
                priority
              />

              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-2">
                  <span className="text-[24px] font-semibold tracking-tight text-[#f5f5f5]">
                    Reshley Atsiaya
                  </span>

                  {/* status dot */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                  </span>
                </div>

                <span className="mt-1 text-[12px] text-[#888]">
                  Android Engineer | Kotlin Developer
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Nav */}
        <div className="ml-auto flex items-center gap-6 text-[13.5px] text-[#888]">

          <a
            href="https://play.google.com/apps/internaltest/4701223804579468060"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-[1px] py-[1px] rounded-lg group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 blur-md opacity-70 group-hover:opacity-100 transition duration-300"></span>

            <span className="relative flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0a0a0a] rounded-lg">
              Join Testing 🚀
            </span>
          </a>

          <a
            href="https://wa.me/254759183060?text=Hi%20Reshley%2C%20I%20want%20to%20inquire%20about%20your%20Android%20development%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-[1px] py-[1px] rounded-lg group"
          >
            {/* glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 blur-md opacity-70 group-hover:opacity-100 transition duration-300"></span>

            {/* button body */}
            <span className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a0a0a] rounded-lg transition-all duration-300 group-hover:scale-105">
              WhatsApp
            </span>
          </a>

          {pathname !== "/" && (
            <Link href="/" className="hover:text-[#ededed]">
              Home
            </Link>
          )}

          {pathname !== "/projects" && (
            <Link href="/projects" className="hover:text-[#ededed]">
              Projects
            </Link>
          )}

          <a
            href="mailto:reshmadeit@gmail.com"
            className="hover:text-[#ededed]"
          >
            Contact
          </a>

        </div>
      </div>
      {/* Gradient bottom border */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 blur-xl" /> */}
    </nav>
  );
}