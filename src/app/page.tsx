"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col min-h-[75vh]">
      <div className="max-w-3xl animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-8 font-mono text-sm text-emerald-600">
          <Terminal className="w-4 h-4" />
          <span>$ whoami --role=&quot;</span>
          <Typewriter text={t("home.role")} />
          <span>&quot;</span>
        </div>

        <h1 className="text-6xl sm:text-6xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight whitespace-pre-line">
          {t("home.heading")}
        </h1>

        <p className="text-xl text-foreground max-w-2xl leading-relaxed mb-10">
          {t("home.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 font-mono text-sm">
          <Link
            href="/skills"
            className="px-6 py-3 bg-zinc-900 text-zinc-50 font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center rounded-sm"
          >
            {t("home.cta_skills")}
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center justify-center rounded-sm"
          >
            {t("home.cta_about")}
          </Link>
        </div>
      </div>

      <div className="mt-auto pt-24 grid sm:grid-cols-3 gap-8 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in delay-200">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {t("home.cards.linux.heading")}
          </h3>
          <p className="text-base text-foreground">
            {t("home.cards.linux.text")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {t("home.cards.version_control.heading")}
          </h3>
          <p className="text-base text-foreground">
            {t("home.cards.version_control.text")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {t("home.cards.security.heading")}
          </h3>
          <p className="text-base text-foreground">
            {t("home.cards.security.text")}
          </p>
        </div>
      </div>
    </div>
  );
}
