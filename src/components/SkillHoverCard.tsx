"use client";

/* Floating UI's setFloating is a callback ref, not a ref read during render */
/* eslint-disable react-hooks/refs */

import { useState, useId, useMemo, type ReactNode } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { useLanguage } from "@/i18n/LanguageProvider";

type SkillHoverCardProps = {
  children: ReactNode;
  proficiency: number;
  years: number;
  description: string;
  related: string[];
};

export default function SkillHoverCard({
  children,
  proficiency,
  years,
  description,
  related,
}: SkillHoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const headingId = useId();

  const middleware = useMemo(
    () => [offset(8), flip(), shift({ padding: 8 })],
    [],
  );
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware,
  });

  const hover = useHover(context, {
    move: false,
    delay: { open: 200, close: 150 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "dialog" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps({
              "aria-labelledby": headingId,
            })}
            className="z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl p-4 w-72"
          >
            {/* Proficiency bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {t("skills.hover.proficiency")}
                </span>
                <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
                  {proficiency}%
                </span>
              </div>
              <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  style={{ width: `${proficiency}%` }}
                />
              </div>
            </div>

            {/* Years of experience */}
            <div className="mb-3">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {t("skills.hover.years")}
              </span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-0.5">
                {t("skills.hover.years_format").replace(
                  "{years}",
                  String(years),
                )}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              {description}
            </p>

            {/* Related technologies */}
            {related.length > 0 && (
              <div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1.5">
                  {t("skills.hover.related")}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {related.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-full border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-500/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
