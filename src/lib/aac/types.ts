export type TileColor =
  | "sand"
  | "teal"
  | "clay"
  | "sky"
  | "sage"
  | "rose"
  | "mist"
  | "paper"
  | "urgent";

export type ButtonSize = "compact" | "comfortable" | "large";

export type Phrase = {
  id: string;
  label: string;
  speak?: string;
  icon?: string;
  color?: TileColor;
  image?: string;
  audio?: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: TileColor;
  phrases: Phrase[];
  virtual?: "favoris" | "recents";
  image?: string;
};

export type HistoryItem = {
  id: string;
  text: string;
  at: number;
};

export type Profile = {
  id: string;
  name: string;
};

export type Settings = {
  rate: number;
  pitch: number;
  voiceURI: string;
  speakOnTap: boolean;
  clearAfterSpeak: boolean;
  buttonSize: ButtonSize;
  highContrast: boolean;
  dark: boolean;
  longPressEdit: boolean;
  customKeys: string[];
  /** Theme system (Paramètres → Apparence → Thème) */
  themeId?: string;
  themeMode?: "auto" | "light" | "dark";
  themeFavorites?: string[];
  themeRecent?: string[];
};

export const TILE_COLORS: TileColor[] = [
  "sand",
  "teal",
  "clay",
  "sky",
  "sage",
  "rose",
  "mist",
  "paper",
  "urgent",
];

export const DEFAULT_SETTINGS: Settings = {
  rate: 0.95,
  pitch: 1,
  voiceURI: "",
  speakOnTap: true,
  clearAfterSpeak: false,
  buttonSize: "comfortable",
  highContrast: false,
  dark: false,
  longPressEdit: true,
  customKeys: [],
  themeId: "clairvoix",
  themeMode: "light",
  themeFavorites: [],
  themeRecent: [],
};

export const DEFAULT_PROFILE: Profile = {
  id: "user-default",
  name: "Utilisateur par défaut",
};
