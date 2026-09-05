import { applyHighContrast, resolveTheme } from "./engine";
import { defaultTheme, getTheme } from "./registry";
import type { Settings } from "@/lib/aac/types";
import { isDarkColor } from "./palette";

export const DEFAULT_THEME_ID = "clairvoix";

export type ThemePrefs = {
  themeId?: string;
  themeMode?: "auto" | "light" | "dark";
  highContrast?: boolean;
  dark?: boolean;
};

export function effectiveMode(p: ThemePrefs): "auto" | "light" | "dark" {
  if (p.themeMode) return p.themeMode;
  // legacy boards (persisted before themes existed)
  return p.dark ? "dark" : "light";
}

export function systemPrefersDark(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

let styleTag: HTMLStyleElement | null = null;

function themeStyle(): HTMLStyleElement {
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "clairvoix-theme-css";
    document.head.appendChild(styleTag);
  }
  return styleTag;
}

/** Apply a theme to the whole document (html element). Safe to call repeatedly. */
export function applyThemeToDocument(settings: Settings | ThemePrefs) {
  if (typeof document === "undefined") return;
  const theme = getTheme(settings.themeId) ?? defaultTheme();
  const mode = effectiveMode(settings);
  const systemDark = systemPrefersDark();
  let resolved = resolveTheme(theme, mode, systemDark);
  const highContrast = Boolean(settings.highContrast);
  if (highContrast) resolved = applyHighContrast(resolved, true);

  const root = document.documentElement;
  for (const [k, v] of Object.entries(resolved.cssVars)) {
    root.style.setProperty(k, v);
  }
  root.dataset.themeId = theme.id;
  root.dataset.themeName = theme.name;
  root.dataset.decor = resolved.decor;
  root.dataset.side = resolved.side;
  root.dataset.mode = mode;
  root.dataset.contrast = highContrast ? "high" : "normal";
  root.style.colorScheme = resolved.side;

  // theme-specific extra CSS (wallpapers, scanlines, animations…)
  themeStyle().textContent = theme.css ?? "";

  // meta theme-color for mobile chrome
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved.palette.bg);
}

export function themeMetaFor(settings: Settings | ThemePrefs): { name: string; bg: string; decor: string } {
  const theme = getTheme(settings.themeId) ?? defaultTheme();
  const mode = effectiveMode(settings);
  const side = mode === "auto" ? (systemPrefersDark() ? "dark" : "light") : mode;
  const p = theme.palettes[side] ?? theme.palettes.light ?? theme.palettes.dark ?? {};
  return { name: theme.name, bg: p.bg ?? "#c5ced8", decor: theme.decor ?? "soft" };
}

export { isDarkColor };
