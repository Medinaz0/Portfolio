"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { skills, softSkills } from "@/data/skills";
import SkillHoverCard from "@/components/SkillHoverCard";

export default function Stack() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 animate-fade-in">
      <div className="mb-12 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          {t("skills.technical_title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl">
          {t("skills.technical_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, i) => {
          const card = (
            <div
              key={
                skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name
              }
              className="w-full aspect-square card-minimal rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center gap-4 group"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <div
                className={`relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 grayscale-hover flex items-center justify-center ${skill.iconClass || ""}`}
              >
                {skill.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={skill.url}
                    alt={
                      skill.tKey
                        ? t(`skills.soft_items.${skill.tKey}`)
                        : skill.name
                    }
                    className="w-full h-full object-contain grayscale-hover"
                    loading="lazy"
                  />
                ) : skill.svg ? (
                  skill.svg
                ) : skill.icon ? (
                  <skill.icon className="w-full h-full text-foreground" />
                ) : (
                  <span className="text-2xs text-zinc-400 font-mono text-center leading-tight">
                    add svg
                  </span>
                )}
              </div>
              <span className="text-sm font-mono text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-nowrap text-center">
                {skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name}
              </span>
            </div>
          );

          if (skill.detail) {
            return (
              <SkillHoverCard
                key={skill.name}
                proficiency={skill.detail.proficiency}
                years={skill.detail.years}
                description={t(skill.detail.descriptionKey)}
                related={skill.detail.related}
              >
                {card}
              </SkillHoverCard>
            );
          }

          return card;
        })}
      </div>

      {/* ──── Soft Skills ──── */}
      <div className="mt-20 sm:mt-24 mb-12 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          {t("skills.soft_title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl">
          {t("skills.soft_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {softSkills.map((skill, i) => (
          <div
            key={skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name}
            className="w-full aspect-square card-minimal rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center gap-4 group"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div
              className={`relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 grayscale-hover flex items-center justify-center ${skill.iconClass || ""}`}
            >
              {skill.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={skill.url}
                  alt={
                    skill.tKey
                      ? t(`skills.soft_items.${skill.tKey}`)
                      : skill.name
                  }
                  className="w-full h-full object-contain grayscale-hover"
                  loading="lazy"
                />
              ) : skill.svg ? (
                skill.svg
              ) : skill.icon ? (
                <skill.icon className="w-full h-full text-foreground" />
              ) : (
                <span className="text-2xs text-zinc-400 font-mono text-center leading-tight">
                  add svg
                </span>
              )}
            </div>
            <span className="text-sm font-mono text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-nowrap text-center">
              {skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
