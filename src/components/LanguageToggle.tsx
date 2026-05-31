"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
      aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      [{lang === "en" ? "ESP" : "ENG"}]
    </button>
  );
}
