"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: t("nav.overview"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.skills"), href: "/skills" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-900 dark:bg-zinc-950/80 border-b border-zinc-800 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-mono font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              santiago.medina
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://medinaz0.github.io/"
            className="hidden md:inline-flex text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {t("nav.writeups")} ↗
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://github.com/Medinaz0/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <span>[src]</span>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-zinc-400 active:text-white transition-colors text-2xl leading-none"
              style={{ touchAction: "manipulation" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — fuera del <header> para evitar problemas de stacking context */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 pt-[65px] bg-zinc-950/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-6 pt-12 pb-8 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://medinaz0.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="text-lg font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {t("nav.writeups")} ↗
            </a>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="https://github.com/Medinaz0/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
              >
                [src]
              </a>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
