import type { PaletteSpec, ResolvedPalette, TileName } from "./types";

/* ------------------------------------------------------------------ */
/*  Tile presets                                                       */
/* ------------------------------------------------------------------ */

type TileMap = Record<TileName, { bg: string; fg: string }>;

function t(sand: [string, string], teal: [string, string], clay: [string, string], sky: [string, string], sage: [string, string], rose: [string, string], mist: [string, string], paper: [string, string], urgent: [string, string]): TileMap {
  const names: TileName[] = ["sand", "teal", "clay", "sky", "sage", "rose", "mist", "paper", "urgent"];
  const arr = [sand, teal, clay, sky, sage, rose, mist, paper, urgent];
  const out = {} as TileMap;
  names.forEach((n, i) => (out[n] = { bg: arr[i][0], fg: arr[i][1] }));
  return out;
}

export const TILE_PRESETS: Record<string, TileMap> = {
  light: t(
    ["#ffffff", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#b4bdc8", "#1c1c1e"],
    ["#ffffff", "#1c1c1e"],
    ["#e11d2e", "#ffffff"],
  ),
  dark: t(
    ["#ececee", "#16161a"],
    ["#57c4a1", "#03251b"],
    ["#e08a5f", "#33140a"],
    ["#5aa9e6", "#062036"],
    ["#a3c95f", "#1b2606"],
    ["#ee7d9a", "#3a0713"],
    ["#3f3f45", "#f2f2f5"],
    ["#2c2c2e", "#f5f5f7"],
    ["#e11d2e", "#ffffff"],
  ),
  win95: t(
    ["#c0c0c0", "#000000"],
    ["#c0c0c0", "#000000"],
    ["#c0c0c0", "#000000"],
    ["#c0c0c0", "#000000"],
    ["#c0c0c0", "#000000"],
    ["#c0c0c0", "#000000"],
    ["#a8a8a8", "#000000"],
    ["#ffffff", "#000000"],
    ["#ff0000", "#ffffff"],
  ),
  pastel: t(
    ["#fff8ed", "#5b3a1a"],
    ["#d1f2e4", "#0f4a36"],
    ["#ffddd0", "#7c2d12"],
    ["#d7ebff", "#0c4a6e"],
    ["#e2f0cf", "#365314"],
    ["#ffdbe4", "#881337"],
    ["#e9e2ff", "#3730a3"],
    ["#ffffff", "#1c1c1e"],
    ["#e11d2e", "#ffffff"],
  ),
  paper: t(
    ["#f7f1e3", "#241f16"],
    ["#cfe3d2", "#243b28"],
    ["#ecd3c5", "#4a2b1c"],
    ["#cfddea", "#20303f"],
    ["#d8e3c8", "#2c3a22"],
    ["#ecd6d6", "#432a2a"],
    ["#e7dfd2", "#2a251c"],
    ["#fdfaf3", "#1f1b14"],
    ["#b3261e", "#ffffff"],
  ),
  oled: t(
    ["#0a0a0c", "#ffffff"],
    ["#0f1416", "#7ff0d0"],
    ["#160f0e", "#ffb49a"],
    ["#0d1216", "#8fd0ff"],
    ["#10130d", "#b9e08a"],
    ["#150e10", "#ff9eb6"],
    ["#141416", "#cfcfcf"],
    ["#101012", "#ffffff"],
    ["#c81e1e", "#ffffff"],
  ),
  neon: t(
    ["#ffcc4d", "#2a2000"],
    ["#06d6a0", "#00382a"],
    ["#ff8a5c", "#40160a"],
    ["#4cc9f0", "#052c3a"],
    ["#a7d129", "#1c2600"],
    ["#ff4d6d", "#3f0a12"],
    ["#9b8cff", "#140e40"],
    ["#3a3a40", "#ffffff"],
    ["#ff2e2e", "#ffffff"],
  ),
  candy: t(
    ["#f7b32b", "#3a2400"],
    ["#32cb97", "#0a1f16"],
    ["#ff7849", "#3a0f02"],
    ["#45b5ff", "#06293d"],
    ["#9acd32", "#1b2404"],
    ["#ff5c8a", "#330612"],
    ["#8d6ff0", "#ffffff"],
    ["#f2f2f2", "#1c1c1e"],
    ["#e63946", "#ffffff"],
  ),
  gb: t(
    ["#c4cf9a", "#1a2410"],
    ["#9bb379", "#14230c"],
    ["#b5a77f", "#211b10"],
    ["#b8c99a", "#152013"],
    ["#a9bd8b", "#141d0e"],
    ["#c2ad8e", "#211a12"],
    ["#9aa87e", "#161e0e"],
    ["#dfe8c6", "#171d0d"],
    ["#5c6b33", "#e8f0d0"],
  ),
  terminal: t(
    ["#0c140c", "#3dff77"],
    ["#0c140c", "#3dff77"],
    ["#140c0c", "#ff9a5c"],
    ["#0c0f14", "#5cc9ff"],
    ["#0c140c", "#c4ff5c"],
    ["#140c10", "#ff5ca8"],
    ["#0f1a0f", "#3dff77"],
    ["#0c0c0c", "#3dff77"],
    ["#ff4b2e", "#0a0a0a"],
  ),
};

/* ------------------------------------------------------------------ */
/*  Base palettes (used as defaults + by the “ClairVoix” theme)        */
/* ------------------------------------------------------------------ */

export const BASE_LIGHT: PaletteSpec = {
  bg: "#c5ced8",
  chrome: "#b4bdc8",
  chrome2: "#a7b1bd",
  chromeSel: "#9aa4b0",
  surface: "#ffffff",
  surface2: "#eef1f5",
  pred: "#dfe4eb",
  ink: "#1c1c1e",
  muted: "#3a3a3c",
  subtle: "#6e6e73",
  line: "#8e98a4",
  lineStrong: "#6d7784",
  accent: "#0a84ff",
  accentHover: "#0070e0",
  accentFg: "#ffffff",
  accentSoft: "#d6e9ff",
  accentSoftFg: "#0b3a75",
  info: "#1d4ed8",
  infoSoft: "#dbe4ff",
  pos: "#3f6f4e",
  posSoft: "#dcefe2",
  danger: "#e11d2e",
  dangerSoft: "#ffd5d8",
  dangerFg: "#9f1230",
  hi: "#ffffff",
  lo: "#8a9099",
  glow: "#0a84ff",
  scrim: "rgb(18 20 26 / 0.55)",
  tiles: "light",
};

export const BASE_DARK: PaletteSpec = {
  bg: "#1c1c1e",
  chrome: "#3a3a3c",
  chrome2: "#2c2c2e",
  chromeSel: "#48484a",
  surface: "#2c2c2e",
  surface2: "#3a3a3c",
  pred: "#26262b",
  ink: "#f5f5f7",
  muted: "#d1d1d6",
  subtle: "#98989d",
  line: "#48484a",
  lineStrong: "#636366",
  accent: "#0a84ff",
  accentHover: "#3a9bff",
  accentFg: "#ffffff",
  accentSoft: "#0b3a75",
  accentSoftFg: "#a8d1ff",
  info: "#7caaff",
  infoSoft: "#16294d",
  pos: "#68b98d",
  posSoft: "#1d3a2c",
  danger: "#ff453a",
  dangerSoft: "#5c1418",
  dangerFg: "#ffc9c4",
  hi: "#7c7c80",
  lo: "#101014",
  glow: "#3a9bff",
  scrim: "rgb(0 0 0 / 0.6)",
  tiles: "dark",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function mix(a: string, b: string, t: number): string {
  const ca = hexToRgb(a) ?? [128, 128, 128];
  const cb = hexToRgb(b) ?? [128, 128, 128];
  const c = ca.map((v, i) => Math.round(v + (cb[i] - v) * t));
  return `rgb(${c[0]} ${c[1]} ${c[2]})`;
}

export function shade(hex: string, t: number): string {
  // t < 0 => darken toward black, t > 0 => lighten toward white
  return t >= 0 ? mix(hex, "#ffffff", t) : mix(hex, "#000000", -t);
}

export function isDarkColor(hex: string): boolean {
  const c = parseAnyColor(hex);
  if (!c) return false;
  return (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) / 255 < 0.45;
}

/** WCAG contrast ratio between two colors (1..21). Accepts hex and rgb()/rgba(). */
export function contrastRatio(a: string, b: string): number {
  const ca = parseAnyColor(a);
  const cb = parseAnyColor(b);
  if (!ca || !cb) return 21;
  const lum = (c: { r: number; g: number; b: number }) => {
    const f = (v: number) => {
      const x = v / 255;
      return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const la = lum(ca);
  const lb = lum(cb);
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** Parse #hex, rgb()/rgba() (comma or space syntax) into {r,g,b,a}. */
function parseAnyColor(input: string): { r: number; g: number; b: number; a: number } | null {
  const s = input.trim();
  if (s.startsWith("#")) {
    const c = hexToRgb(s);
    return c ? { r: c[0], g: c[1], b: c[2], a: 1 } : null;
  }
  const m = /^rgba?\(([^)]+)\)$/.exec(s);
  if (!m) return null;
  const parts = m[1].split(/[\s,]+/).filter(Boolean);
  const r = parseFloat(parts[0]);
  const g = parseFloat(parts[1]);
  const b = parseFloat(parts[2]);
  let a = 1;
  if (parts[3] != null) {
    if (parts[3].startsWith("/")) a = parseFloat(parts[3].slice(1));
    else a = parseFloat(parts[3]);
  }
  if ([r, g, b, a].some(Number.isNaN)) return null;
  return { r, g, b, a: Math.min(1, Math.max(0, a)) };
}

/** Composite `c` over an opaque background and return an opaque hex/rgb string. */
function flatten(c: string, over: string, fallback: string): string {
  const fc = parseAnyColor(c);
  const fo = parseAnyColor(over);
  if (!fc) return c;
  if (!fo || fo.a >= 1) {
    const b = fo ?? parseAnyColor(fallback) ?? { r: 13, g: 13, b: 18, a: 1 };
    const a = fc.a;
    const out = [
      Math.round(fc.r * a + b.r * (1 - a)),
      Math.round(fc.g * a + b.g * (1 - a)),
      Math.round(fc.b * a + b.b * (1 - a)),
    ];
    return `rgb(${out[0]}, ${out[1]}, ${out[2]})`;
  }
  // both translucent: fold over the fallback base
  return flatten(c, flatten(over, fallback, fallback), fallback);
}

/**
 * Guarantee `color` (foreground) keeps at least `minRatio` contrast against the
 * surface `bg` sits on. Returns the original string untouched when it already
 * passes (so authentic theme colors never change), otherwise a readable mix of
 * the color toward white (dark surfaces) or black (light surfaces).
 */
export function ensureContrast(color: string, bg: string, behind: string, minRatio = 3.05): string {
  const eff = flatten(bg, behind, "#101014");
  const base = flatten(color, eff, "#101014");
  if (contrastRatio(base, eff) >= minRatio) return color;
  const bgDark = isDarkColor(eff);
  let candidate = color;
  for (let i = 1; i <= 10; i++) {
    const t = i / 10;
    candidate = mix(color, bgDark ? "#ffffff" : "#000000", bgDark ? t : t);
    const effC = flatten(candidate, eff, "#101014");
    if (contrastRatio(effC, eff) >= minRatio) return candidate;
  }
  return bgDark ? "#ffffff" : "#101418";
}

/**
 * Readable foreground for text/icons sitting on a chrome surface. Picks the
 * strongest of: the theme color kept/lightened toward the right pole, pure
 * white and near-black — so authentic pairs survive when they truly pass, and
 * mid-luminance surfaces get a guaranteed-extreme ink.
 */
export function ctxReadableFg(color: string, bg: string, behind: string): string {
  const eff = flatten(bg, behind, "#101014");
  const candidates = [ensureContrast(color, bg, behind), "#ffffff", "#101418"];
  let best = candidates[0];
  let bestR = -1;
  for (const c of candidates) {
    const r = contrastRatio(flatten(c, eff, "#101014"), eff);
    if (r > bestR) {
      bestR = r;
      best = c;
    }
  }
  return best;
}

export function resolvePalette(spec: PaletteSpec, side: "light" | "dark"): ResolvedPalette {
  const base = side === "light" ? BASE_LIGHT : BASE_DARK;
  const s: PaletteSpec = { ...base, ...spec };
  const tiles = TILE_PRESETS[s.tiles ?? "light"] ?? TILE_PRESETS.light;

  // automatic hover + bevels when the theme didn't give them
  const accent = s.accent!;
  const chrome = s.chrome!;
  const accentHover = s.accentHover ?? (isDarkColor(accent) ? shade(accent, 0.14) : shade(accent, -0.14));
  const hi = s.hi ?? (side === "dark" ? mix(chrome, "#ffffff", 0.28) : "#ffffff");
  const lo = s.lo ?? mix(chrome, "#000000", side === "dark" ? 0.5 : 0.42);
  const glow = s.glow ?? accent;

  const accentSoft = s.accentSoft!;
  // Legibility guard: authored accent pairs that fail a 3:1 contrast floor get
  // an automatic readable foreground — era-authentic but unreadable combos
  // (e.g. silver text on teal) must never ship on real buttons.
  let accentFg = s.accentFg!;
  if (contrastRatio(accent, accentFg) < 3) {
    accentFg = isDarkColor(accent) ? "#ffffff" : "#101418";
  }
  let accentSoftFg = s.accentSoftFg ?? (isDarkColor(accentSoft) ? "#ffffff" : "#0b3a75");
  if (contrastRatio(accentSoft, accentSoftFg) < 3) {
    accentSoftFg = isDarkColor(accentSoft) ? "#ffffff" : "#101418";
  }

  const infoSoft = s.infoSoft ?? (isDarkColor(s.info!) ? "transparent" : "#dbe4ff");
  const posSoft = s.posSoft ?? (isDarkColor(s.pos!) ? "transparent" : "#dcefe2");

  return {
    bg: s.bg!,
    chrome,
    chrome2: s.chrome2!,
    chromeSel: s.chromeSel!,
    surface: s.surface!,
    surface2: s.surface2!,
    pred: s.pred!,
    ink: s.ink!,
    muted: s.muted!,
    subtle: s.subtle!,
    line: s.line!,
    lineStrong: s.lineStrong!,
    accent,
    accentHover,
    accentFg,
    accentSoft,
    accentSoftFg,
    info: s.info!,
    infoSoft,
    pos: s.pos!,
    posSoft,
    danger: s.danger!,
    dangerSoft: s.dangerSoft!,
    dangerFg: s.dangerFg!,
    hi,
    lo,
    glow,
    scrim: s.scrim!,
    tiles,
  };
}

/**
 * Generic dark-mode conversion for themes that only ship a light palette —
 * preserves the theme's accent/chrome identity while re-mapping the neutral
 * surfaces. Reverse direction for dark-only themes.
 */
export function autoSide(p: ResolvedPalette, target: "light" | "dark"): ResolvedPalette {
  if (target === "light") {
    return resolvePalette(
      {
        ...p,
        bg: "#dfe4ec",
        chrome: "#cdd4de",
        chrome2: "#bcc5d1",
        chromeSel: "#aab5c3",
        surface: "#ffffff",
        surface2: "#eef1f5",
        pred: "#e6eaf0",
        ink: "#16181c",
        muted: "#34383f",
        subtle: "#626971",
        line: "#93a0b0",
        lineStrong: "#6d7784",
        hi: "#ffffff",
        lo: "#8a9099",
        tiles: "light",
      },
      "light",
    );
  }
  // recompute neutrals only; keep accents/tiles (they're bright on dark)
  const neutral = resolvePalette(
    {
      bg: "#101014",
      chrome: "#25262c",
      chrome2: "#1c1d22",
      chromeSel: "#33343c",
      surface: "#1b1c21",
      surface2: "#26272e",
      pred: "#202128",
      ink: "#eef0f4",
      muted: "#c6c9d1",
      subtle: "#8b8f99",
      line: "#363841",
      lineStrong: "#4e515c",
      accentSoftFg: "#ffffff",
      hi: mix(p.chrome, "#ffffff", 0.22),
      lo: "#0a0a0c",
      scrim: "rgb(0 0 0 / 0.6)",
      tiles: "dark",
    },
    "dark",
  );
  return { ...neutral, accent: p.accent, accentHover: p.accentHover, glow: p.glow };
}
