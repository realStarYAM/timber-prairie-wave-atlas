/** Theme system types — ClairVoix AAC */

export type TileName = "sand" | "teal" | "clay" | "sky" | "sage" | "rose" | "mist" | "paper" | "urgent";

export type TilePreset =
  | "light"
  | "dark"
  | "win95"
  | "pastel"
  | "paper"
  | "oled"
  | "neon"
  | "candy"
  | "gb"
  | "terminal";

export type ThemeMode = "auto" | "light" | "dark";

export type CategoryKey =
  | "default"
  | "windows"
  | "apple"
  | "ubuntu"
  | "linux"
  | "nintendo"
  | "dragonball"
  | "consoles"
  | "mobile"
  | "styles";

export type DecorId = "soft" | "bevel" | "aqua" | "glass" | "neon" | "neu" | "retro" | "cyber";

/**
 * Partial color spec — every field is optional and gets resolved against
 * BASE_LIGHT / BASE_DARK by the engine, so themes only need to describe what
 * makes them unique.
 */
export type PaletteSpec = Partial<{
  bg: string;
  chrome: string;
  chrome2: string;
  chromeSel: string;
  surface: string;
  surface2: string;
  pred: string;
  ink: string;
  muted: string;
  subtle: string;
  line: string;
  lineStrong: string;
  accent: string;
  accentHover: string;
  accentFg: string;
  accentSoft: string;
  accentSoftFg: string;
  info: string;
  infoSoft: string;
  pos: string;
  posSoft: string;
  danger: string;
  dangerSoft: string;
  dangerFg: string;
  /** bevel highlight (retro/chunky decors) */
  hi: string;
  /** bevel shadow */
  lo: string;
  /** neon glow color */
  glow: string;
  /** overlay scrim behind dialogs */
  scrim: string;
  /** tile palette preset */
  tiles: TilePreset;
}>;

/** Fully resolved palette: every token concrete. */
export type ResolvedPalette = Omit<Required<PaletteSpec>, "tiles"> & {
  tiles: Record<TileName, { bg: string; fg: string }>;
};

export type ThemeDef = {
  id: string;
  name: string;
  /** category key — see THEME_CATEGORIES */
  cat: CategoryKey;
  emoji: string;
  /** short era string, e.g. "1995" or "2015+" */
  era?: string;
  /** 3D / material treatment applied to buttons, tiles, panels */
  decor?: DecorId;
  /** font stack override */
  font?: string;
  /** corner radius in px — single value or [xs,sm,md,lg,xl,2xl] */
  radius?: number | number[];
  /** shadow overrides */
  shadows?: { tile?: string; bar?: string };
  /** palette per light/dark. Missing side gets auto-generated. */
  palettes: { light?: PaletteSpec; dark?: PaletteSpec };
  /** optional raw CSS appended while theme is active (art, animations…) */
  css?: string;
};

export const THEME_CATEGORIES: { key: CategoryKey; label: string; emoji: string }[] = [
  { key: "default", label: "ClairVoix", emoji: "💬" },
  { key: "windows", label: "Microsoft Windows", emoji: "🪟" },
  { key: "apple", label: "Apple / macOS", emoji: "🍎" },
  { key: "ubuntu", label: "Ubuntu", emoji: "🐧" },
  { key: "linux", label: "Linux", emoji: "🐧" },
  { key: "nintendo", label: "Nintendo", emoji: "🎮" },
  { key: "dragonball", label: "Dragon Ball", emoji: "🐉" },
  { key: "consoles", label: "Autres interfaces", emoji: "🎮" },
  { key: "mobile", label: "Mobile", emoji: "📱" },
  { key: "styles", label: "Autres styles", emoji: "🌐" },
];

export const DEFAULT_THEME_ID = "clairvoix";
