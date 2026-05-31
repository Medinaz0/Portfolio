"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-800 mt-16 sm:mt-20 py-8 z-10 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-white">
          {year} © Santiago Medina Varon
        </p>
        <div className="flex gap-6 font-mono text-sm text-white">
          <a
            href="https://github.com/Medinaz0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            {t("footer.github")}
          </a>
        </div>
      </div>
    </footer>
  );
}
