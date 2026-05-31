"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  X,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      {open && (
        <div className="relative z-50 w-72 bg-zinc-900 border border-zinc-800 rounded-lg p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-emerald-400 text-sm">
              {t("contact.title")}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="min-w-0">
                      <p className="font-mono text-xs text-zinc-500">{t("contact.email")}</p>
                <a
                  href="mailto:smedinav24@gmail.com"
                  className="font-mono text-sm text-white hover:text-emerald-400 transition-colors break-all"
                >
                  smedinav24@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                      <p className="font-mono text-xs text-zinc-500">{t("contact.location")}</p>
                <p className="font-mono text-sm text-white">
                  Manizales, Colombia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                      <p className="font-mono text-xs text-zinc-500">{t("contact.github")}</p>
                <a
                  href="https://github.com/Medinaz0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-white hover:text-emerald-400 transition-colors"
                >
                  @Medinaz0
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        aria-label={open ? t("contact.aria_close") : t("contact.aria_open")}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
