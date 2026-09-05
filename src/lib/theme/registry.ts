import { APPLE_THEMES } from "./themes/apple";
import { CONSOLES_THEMES } from "./themes/consoles";
import { DEFAULT_THEMES } from "./themes/default";
import { DRAGONBALL_THEMES } from "./themes/dragonball";
import { LINUX_THEMES } from "./themes/linux";
import { MOBILE_THEMES } from "./themes/mobile";
import { NINTENDO_THEMES } from "./themes/nintendo";
import { STYLE_THEMES } from "./themes/styles";
import { UBUNTU_THEMES } from "./themes/ubuntu";
import { WINDOWS_THEMES } from "./themes/windows";
import { DEFAULT_THEME_ID, THEME_CATEGORIES, type CategoryKey, type ThemeDef } from "./types";

/** Full catalog — registry aggregator. */
export const THEMES: ThemeDef[] = [
  ...DEFAULT_THEMES,
  ...WINDOWS_THEMES,
  ...APPLE_THEMES,
  ...UBUNTU_THEMES,
  ...LINUX_THEMES,
  ...NINTENDO_THEMES,
  ...DRAGONBALL_THEMES,
  ...CONSOLES_THEMES,
  ...MOBILE_THEMES,
  ...STYLE_THEMES,
];

export const THEME_INDEX = new Map<string, ThemeDef>(THEMES.map((t) => [t.id, t]));

export function getTheme(id: string | undefined | null): ThemeDef | undefined {
  if (!id) return undefined;
  return THEME_INDEX.get(id);
}

export function getThemesByCategory(cat: CategoryKey | "all"): ThemeDef[] {
  if (cat === "all") return THEMES;
  return THEMES.filter((t) => t.cat === cat);
}

export function categoryLabel(key: CategoryKey): string {
  return THEME_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function categoryEmoji(key: CategoryKey): string {
  return THEME_CATEGORIES.find((c) => c.key === key)?.emoji ?? "🎨";
}

export function themeCount(): number {
  return THEMES.length;
}

export function defaultTheme(): ThemeDef {
  return THEME_INDEX.get(DEFAULT_THEME_ID) ?? THEMES[0]!;
}

export { THEME_CATEGORIES };
