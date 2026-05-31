"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 animate-fade-in">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
          {t("about.title")}
        </h1>
        <p className="text-xl text-foreground">
          {t("about.subtitle")}
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">
              {t("about.sections.security.number")}
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.sections.security.heading")}
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              {t("about.sections.security.text")}
            </p>
            <blockquote className="mt-4 border-l-4 border-emerald-600 bg-white dark:bg-zinc-900/50 p-4 text-zinc-900 dark:text-zinc-200 italic font-medium rounded-r-md shadow-sm">
              {t("about.sections.security.quote")}
            </blockquote>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">
              {t("about.sections.cloud.number")}
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.sections.cloud.heading")}
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              {t("about.sections.cloud.text")}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">
              {t("about.sections.learning.number")}
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              {t("about.sections.learning.heading")}
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              {t("about.sections.learning.text")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
