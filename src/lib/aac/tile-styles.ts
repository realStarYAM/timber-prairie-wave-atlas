import type { TileColor } from "./types";

export const TILE_CLASS: Record<TileColor, string> = {
  sand: "bg-tile-sand text-tile-sand-fg",
  teal: "bg-tile-teal text-tile-teal-fg",
  clay: "bg-tile-clay text-tile-clay-fg",
  sky: "bg-tile-sky text-tile-sky-fg",
  sage: "bg-tile-sage text-tile-sage-fg",
  rose: "bg-tile-rose text-tile-rose-fg",
  mist: "bg-tile-mist text-tile-mist-fg",
  paper: "bg-tile-paper text-tile-paper-fg",
  urgent: "bg-tile-urgent text-tile-urgent-fg",
};

export function tileClass(color: TileColor | undefined, fallback: TileColor = "paper") {
  return TILE_CLASS[color ?? fallback];
}
