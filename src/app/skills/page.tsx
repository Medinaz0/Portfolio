"use client";

import type { ReactNode } from "react";
import {
  Users,
  Lightbulb,
  MessageSquareText,
  Brain,
  RefreshCw,
  Crown,
  Timer,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

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
        {skills.map((skill, i) => (
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
                  alt={skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name}
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
                  alt={skill.tKey ? t(`skills.soft_items.${skill.tKey}`) : skill.name}
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

type Skill = {
  name: string;
  tKey?: string;
  svg?: ReactNode;
  url?: string;
  iconClass?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const skills: Skill[] = [
  {
    name: "Python",
    svg: (
      <svg fill="none" viewBox="16 16 32 32">
        <path
          fill="url(#python__a)"
          d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
        />
        <path
          fill="url(#python__b)"
          d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
        />
        <defs>
          <linearGradient
            id="python__a"
            x1="19.075"
            x2="34.898"
            y1="18.782"
            y2="34.658"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#387EB8" />
            <stop offset="1" stop-color="#366994" />
          </linearGradient>
          <linearGradient
            id="python__b"
            x1="28.809"
            x2="45.803"
            y1="28.882"
            y2="45.163"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE052" />
            <stop offset="1" stop-color="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Bash",
    svg: (
      <svg viewBox="0 0 32 32">
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M28.057 6.53 17.952.532a3.8 3.8 0 0 0-3.88 0L3.965 6.53A4.03 4.03 0 0 0 2 10.002v11.996a4.03 4.03 0 0 0 1.948 3.472l10.105 5.998a3.8 3.8 0 0 0 3.88 0L28.04 25.47a4.03 4.03 0 0 0 1.948-3.472V10.002a4.03 4.03 0 0 0-1.93-3.472zM20.23 25.262v.86a.318.318 0 0 1-.148.265l-.512.293c-.08.042-.148 0-.148-.113v-.847a1.66 1.66 0 0 1-1.164.113c-.062-.042-.086-.122-.056-.2l.183-.78a.322.322 0 0 1 .102-.17.18.18 0 0 1 .05-.035.11.11 0 0 1 .08 0 1.41 1.41 0 0 0 1.059-.134 1.41 1.41 0 0 0 .79-1.21c0-.438-.24-.62-.82-.625-.734 0-1.4-.14-1.43-1.224a3.137 3.137 0 0 1 1.186-2.4v-.872a.34.34 0 0 1 .148-.268l.494-.314c.08-.042.148 0 .148.116v.872a1.61 1.61 0 0 1 .967-.116c.07.04.098.128.064.2l-.173.773a.325.325 0 0 1-.138.195c-.02.012-.05.008-.074 0a1.28 1.28 0 0 0-.931.152 1.17 1.17 0 0 0-.706 1.037c0 .395.208.515.907.53.935 0 1.337.423 1.348 1.362a3.346 3.346 0 0 1-1.228 2.53zm5.293-1.45a.201.201 0 0 1-.078.194L22.9 25.558c-.024.02-.06.023-.087.007s-.04-.05-.033-.08v-.66a.184.184 0 0 1 .116-.162l2.516-1.507c.024-.02.06-.023.087-.007s.04.05.033.08v.582zM27.288 9.06l-9.562 5.906c-1.193.706-2.07 1.478-2.07 2.914v11.778c0 .86.353 1.4.882 1.58a3.14 3.14 0 0 1-.53.053 3.13 3.13 0 0 1-1.595-.441L4.308 24.853A3.3 3.3 0 0 1 2.706 22V10.002a3.304 3.304 0 0 1 1.602-2.858l10.105-5.998c.98-.58 2.196-.58 3.176 0l10.105 5.998c.833.504 1.4 1.35 1.552 2.3-.328-.713-1.083-.9-1.962-.395h.003z"
        />
      </svg>
    ),
  },
  {
    name: "Java",
    svg: (
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
        <path
          d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17"
          fill="#5382A1"
        />
        <path
          d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95"
          fill="#E76F00"
        />
        <path
          d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2"
          fill="#5382A1"
        />
        <path
          d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110"
          fill="#E76F00"
        />
        <path
          d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10"
          fill="#5382A1"
        />
      </svg>
    ),
    iconClass: "scale-87",
  },
  {
    name: "Spring Boot",
    url: "https://pic.vsixhub.com/30/3f/0efda145-8595-4ff7-98ef-1e3abc5e5757-logo.webp",
    iconClass: "scale-110",
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 432.071 445.383">
        <g
          fill="none"
          stroke="#fff"
          strokeWidth={12.4651}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={4}
        >
          <path
            d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107"
            fill="#000"
            stroke="#000"
            strokeWidth={37.3953}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <path
            d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z"
            fill="#336791"
            stroke="none"
          />
          <path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" />
          <path
            d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762"
            strokeLinejoin="bevel"
          />
          <path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" />
          <path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" />
          <path
            d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z"
            fill="#fff"
            strokeWidth={4.155}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <path
            d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z"
            fill="#fff"
            strokeWidth={2.0775}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" />
        </g>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 304 182">
        <path
          fill="#ffffff"
          d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z"
        />
        <path
          d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z"
          fill="#f90"
        />
        <path
          d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z"
          fill="#f90"
        />
      </svg>
    ),
  },
  {
    name: "Azure",
    svg: (
      <svg viewBox="0 0 96 96">
        <defs>
          <linearGradient
            id="azure__a"
            x1="-1032.17"
            x2="-1059.21"
            y1="145.31"
            y2="65.43"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#114a8b" />
            <stop offset="1" stop-color="#0669bc" />
          </linearGradient>
          <linearGradient
            id="azure__b"
            x1="-1023.73"
            x2="-1029.98"
            y1="108.08"
            y2="105.97"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-opacity=".3" />
            <stop offset=".07" stop-opacity=".2" />
            <stop offset=".32" stop-opacity=".1" />
            <stop offset=".62" stop-opacity=".05" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="azure__c"
            x1="-1027.16"
            x2="-997.48"
            y1="147.64"
            y2="68.56"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#3ccbf4" />
            <stop offset="1" stop-color="#2892df" />
          </linearGradient>
        </defs>
        <path
          fill="url(#azure__a)"
          d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"
        />
        <path
          fill="#0078d4"
          d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"
        />
        <path
          fill="url(#azure__b)"
          d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"
        />
        <path
          fill="url(#azure__c)"
          d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"
        />
      </svg>
    ),
  },
  {
    name: "VM",
    url: "https://www.koboct.com/img/Devices/webgl-screen2.png",
    iconClass: "scale-125",
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" fill="#008fe2">
        <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
      </svg>
    ),
  },
  {
    name: "jenkins",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1920px-Jenkins_logo.svg.png",
    iconClass: "scale-125",
  },
  {
    name: "Git",
    svg: (
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
        <path
          d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
          fill="#DE4C36"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 1024 1024" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          transform="scale(64)"
          fill="#ffff"
        />
      </svg>
    ),
  },
  {
    name: "API",
    url: "https://cdn-icons-png.flaticon.com/512/8681/8681370.png",
    iconClass: "scale-163",
  },
  {
    name: "Cybersecurity",
    url: "https://img.icons8.com/color/512/parrot-security--v2.png",
    iconClass: "scale-120",
  },
  {
    name: "SCRUM",
    url: "https://www.puntoes.es/wp-content/uploads/2019/07/agile.png",
    iconClass: "scale-165",
  },

  {
    name: "Reporting",
    url: "https://cdn-icons-png.flaticon.com/512/747/747050.png",
    iconClass: "scale-120",
  },
];

const softSkills: Skill[] = [
  {
    name: "teamwork",
    tKey: "teamwork",
    url: "https://cdn-icons-png.flaticon.com/512/7086/7086327.png",
    iconClass: "scale-120",
  },
  {
    name: "problem_solving",
    tKey: "problem_solving",
    url: "https://cdn-icons-png.flaticon.com/512/7399/7399787.png",
    iconClass: "scale-115",
  },
  {
    name: "communication",
    tKey: "communication",
    url: "https://cdn-icons-png.flaticon.com/512/9186/9186482.png",
    iconClass: "scale-115",
  },
  {
    name: "critical_thinking",
    tKey: "critical_thinking",
    url: "https://cdn-icons-png.flaticon.com/512/12641/12641431.png",
    iconClass: "scale-120",
  },
  {
    name: "adaptability",
    tKey: "adaptability",
    url: "https://cdn-icons-png.flaticon.com/512/10285/10285079.png",
    iconClass: "scale-115",
  },
  {
    name: "time_management",
    tKey: "time_management",
    url: "https://cdn-icons-png.flaticon.com/512/1897/1897866.png",
    iconClass: "scale-120",
  },
  {
    name: "creativity",
    tKey: "creativity",
    url: "https://cdn-icons-png.flaticon.com/512/5985/5985765.png",
    iconClass: "scale-120",
  },
];
