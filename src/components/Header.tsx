"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.overview"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.skills"), href: "/skills" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 dark:bg-zinc-950/80 border-b border-zinc-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-mono font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            santiago.medina
          </span>
        </Link>

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

          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
