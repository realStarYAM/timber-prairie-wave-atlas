import { autoSide, ctxReadableFg, resolvePalette } from "./palette";
import { DEFAULT_THEME_ID, type PaletteSpec, type ResolvedPalette, type ThemeDef, type ThemeMode } from "./types";

export type ResolvedTheme = {
  theme: ThemeDef;
  side: "light" | "dark";
  palette: ResolvedPalette;
  decor: NonNullable<ThemeDef["decor"]>;
  font: string;
  radius: number[];
  shadows: { tile: string; bar: string };
  cssVars: Record<string, string>;
};

const COLOR_KEYS = [
  "bg",
  "chrome",
  "chrome2",
  "chromeSel",
  "surface",
  "surface2",
  "pred",
  "ink",
  "muted",
  "subtle",
  "line",
  "lineStrong",
  "accent",
  "accentHover",
  "accentFg",
  "accentSoft",
  "accentSoftFg",
  "info",
  "infoSoft",
  "pos",
  "posSoft",
  "danger",
  "dangerSoft",
  "dangerFg",
] as const;

const TILE_NAMES = ["sand", "teal", "clay", "sky", "sage", "rose", "mist", "paper", "urgent"] as const;

export const DEFAULT_RADIUS = [8, 10, 12, 14, 18, 22];
export const DEFAULT_FONT =
  '"SF Pro Text", "Segoe UI", system-ui, -apple-system, "Atkinson Hyperlegible", sans-serif';

const DEFAULT_SHADOWS = {
  tile: "0 1px 1px rgb(28 28 30 / 0.08), 0 1px 2px rgb(28 28 30 / 0.04)",
  bar: "0 1px 2px rgb(28 28 30 / 0.08)",
};

export function paletteToCssVars(p: ResolvedPalette): Record<string, string> {
  // token names on the CSS side (styles.css @theme) are kebab-case; the palette
  // model uses camelCase keys ("chromeSel", "chrome2", "lineStrong", …).
  const TOKEN_RENAME: Record<string, string> = { chromeSel: "chrome-selected" };
  const out: Record<string, string> = {};
  for (const k of COLOR_KEYS) out[`--color-${TOKEN_RENAME[k] ?? k}`] = p[k];
  for (const name of TILE_NAMES) {
    out[`--color-tile-${name}`] = p.tiles[name].bg;
    out[`--color-tile-${name}-fg`] = p.tiles[name].fg;
  }
  out["--hi"] = p.hi;
  out["--lo"] = p.lo;
  out["--glow"] = p.glow;
  out["--scrim"] = p.scrim;
  return out;
}

export function sideFor(theme: ThemeDef, mode: ThemeMode, systemDark: boolean): "light" | "dark" {
  const want: "light" | "dark" = mode === "auto" ? (systemDark ? "dark" : "light") : mode;
  if (theme.palettes[want]) return want;
  // fall back to whatever palette exists, preserving the author intent
  return theme.palettes.light ? "light" : "dark";
}

export function paletteFor(theme: ThemeDef, side: "light" | "dark"): ResolvedPalette {
  const spec = theme.palettes[side];
  if (spec) return resolvePalette(spec, side);
  const otherSide = side === "light" ? "dark" : "light";
  const other = theme.palettes[otherSide];
  if (!other) return resolvePalette({}, side);
  return autoSide(resolvePalette(other, otherSide), side);
}

export function themeHasPalette(theme: ThemeDef, side: "light" | "dark"): boolean {
  return Boolean(theme.palettes[side]);
}

export function radiusValues(theme: ThemeDef): number[] {
  const r = theme.radius;
  if (r == null) return DEFAULT_RADIUS;
  const arr = Array.isArray(r) ? r : Array(6).fill(r);
  const out = [...DEFAULT_RADIUS];
  arr.forEach((v, i) => {
    if (i < out.length && typeof v === "number") out[i] = v;
  });
  return out;
}

const FALLBACK_FONTS = {
  mono: '"Cascadia Code", "SF Mono", Consolas, "Courier New", monospace',
  mac: '"Atkinson Hyperlegible", "SF Pro Text", -apple-system, "Segoe UI", sans-serif',
};

/** Build the full resolved theme given preferences + system darkness. */
export function resolveTheme(
  themeDef: ThemeDef | undefined,
  mode: ThemeMode,
  systemDark: boolean,
): ResolvedTheme {
  const theme =
    themeDef ??
    ({
      id: DEFAULT_THEME_ID,
      name: "ClairVoix",
      cat: "default",
      emoji: "💬",
    } as ThemeDef);

  const side = sideFor(theme, mode, systemDark);
  let palette = paletteFor(theme, side);

  // generic auto-generated side tweaks to preserve readability in auto mode
  if (!theme.palettes[side]) {
    // theme only ships the other side — keep as-is (respect author intent)
  }

  const radius = radiusValues(theme);
  const shadows = { ...DEFAULT_SHADOWS, ...theme.shadows };

  // Context tokens: chrome/ink pairings and "vivid" icon colors are only
  // legible when the theme author happened to pick readable fg colors for
  // their chrome. Derive guaranteed-readable variants here (original colors
  // are preserved whenever they already pass 3:1 on the chrome surface).
  const chromeFg = ctxReadableFg(palette.ink, palette.chrome, palette.bg);
  const chromeSelFg = ctxReadableFg(palette.ink, palette.chromeSel, palette.bg);
  const vAccent = ctxReadableFg(palette.accent, palette.chrome, palette.bg);
  const vInfo = ctxReadableFg(palette.info, palette.chrome, palette.bg);
  const vPos = ctxReadableFg(palette.pos, palette.chrome, palette.bg);
  const vDanger = ctxReadableFg(palette.danger, palette.chrome, palette.bg);

  const vars: Record<string, string> = {
    ...paletteToCssVars(palette),
    "--font-sans": theme.font ?? DEFAULT_FONT,
    "--radius-xs": `${radius[0]}px`,
    "--radius-sm": `${radius[1]}px`,
    "--radius-md": `${radius[2]}px`,
    "--radius-lg": `${radius[3]}px`,
    "--radius-xl": `${radius[4]}px`,
    "--radius-2xl": `${radius[5]}px`,
    "--radius": `${radius[2]}px`,
    "--shadow-tile": shadows.tile,
    "--shadow-bar": shadows.bar,
    "--chrome-fg": chromeFg,
    "--chrome-sel-fg": chromeSelFg,
    "--v-accent": vAccent,
    "--v-info": vInfo,
    "--v-pos": vPos,
    "--v-danger": vDanger,
  };

  return {
    theme,
    side,
    palette,
    decor: theme.decor ?? "soft",
    font: theme.font ?? DEFAULT_FONT,
    radius,
    shadows,
    cssVars: vars,
  };
}

/** High-contrast accessibility override — recolor in place, thicken outlines. */
export function applyHighContrast(resolved: ResolvedTheme, on: boolean): ResolvedTheme {
  if (!on) return resolved;
  const p: PaletteSpec = resolved.side === "dark" ? {
    bg: "#000000",
    chrome: "#0a0a0a",
    chrome2: "#161616",
    chromeSel: "#2a2a2a",
    surface: "#0d0d0d",
    surface2: "#1c1c1c",
    pred: "#0d0d0d",
    ink: "#ffffff",
    muted: "#ffffff",
    subtle: "#e6e6e6",
    line: "#ffffff",
    lineStrong: "#ffffff",
    accent: "#ffff00",
    accentHover: "#ffff00",
    accentFg: "#000000",
    accentSoft: "#ffff00",
    accentSoftFg: "#000000",
    info: "#00e5ff",
    pos: "#39ff8e",
    danger: "#ff3b30",
    dangerSoft: "#ff3b30",
    dangerFg: "#ffffff",
    tiles: "oled",
    scrim: "rgb(0 0 0 / 0.75)",
  } : {
    bg: "#ffffff",
    chrome: "#e9e9e9",
    chrome2: "#d9d9d9",
    chromeSel: "#ffffff",
    surface: "#ffffff",
    surface2: "#f2f2f2",
    pred: "#ffffff",
    ink: "#000000",
    muted: "#000000",
    subtle: "#1a1a1a",
    line: "#000000",
    lineStrong: "#000000",
    accent: "#0033ee",
    accentHover: "#0022aa",
    accentFg: "#ffffff",
    accentSoft: "#ffd400",
    accentSoftFg: "#000000",
    info: "#0000cc",
    infoSoft: "#b3c6ff",
    pos: "#005522",
    posSoft: "#b7e6c8",
    danger: "#cc0000",
    dangerSoft: "#ffc2c2",
    dangerFg: "#660000",
    tiles: "light",
    scrim: "rgb(0 0 0 / 0.6)",
  };
  const palette = resolvePalette(p, resolved.side);
  palette.tiles = Object.fromEntries(
    Object.entries(palette.tiles).map(([k, v]) => [
      k,
      { bg: resolved.side === "dark" ? "#000000" : "#ffffff", fg: resolved.side === "dark" ? "#ffffff" : "#000000" },
    ]),
  ) as typeof palette.tiles;
  return {
    ...resolved,
    palette,
    cssVars: {
      ...resolved.cssVars,
      ...paletteToCssVars(palette),
      "--shadow-tile": resolved.side === "dark" ? "0 0 0 2px #ffffff" : "0 0 0 2px #000000",
      "--shadow-bar": resolved.side === "dark" ? "0 0 0 2px #ffffff" : "0 0 0 2px #000000",
    },
  };
}

export const MONO_FONT = FALLBACK_FONTS.mono;
export const MAC_FONT = FALLBACK_FONTS.mac;
