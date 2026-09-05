import { useMemo, useState } from "react";
import { Check, Palette, Search, Star, Sun, Moon, Sparkles, X, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { categoryEmoji, categoryLabel, getTheme, THEMES } from "@/lib/theme/registry";
import { resolveTheme, themeHasPalette } from "@/lib/theme/engine";
import { paletteFor } from "@/lib/theme/engine";
import type { CategoryKey, ThemeDef, ThemeMode } from "@/lib/theme/types";
import type { Settings } from "@/lib/aac/types";
import { cn } from "@/lib/utils";
import { DEFAULT_THEME_ID, effectiveMode } from "@/lib/theme/apply";
import { paletteToCssVars } from "@/lib/theme/engine";

type Props = {
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onClose: () => void;
};

type FilterKey = "all" | "favorites" | "recent" | CategoryKey;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "favorites", label: "⭐ Favoris" },
  { key: "recent", label: "🕘 Récents" },
  { key: "default", label: "💬 ClairVoix" },
  { key: "windows", label: "🪟 Windows" },
  { key: "apple", label: "🍎 Apple / macOS" },
  { key: "ubuntu", label: "🐧 Ubuntu" },
  { key: "linux", label: "🐧 Linux" },
  { key: "nintendo", label: "🎮 Nintendo" },
  { key: "dragonball", label: "🐉 Dragon Ball" },
  { key: "consoles", label: "🎮 Autres interfaces" },
  { key: "mobile", label: "📱 Mobile" },
  { key: "styles", label: "🌐 Autres styles" },
];

/**
 * Preview palette scoped to *surfaces* only — interactive controls inside a
 * card (Appliquer, star, ring, borders) must keep the document accent so they
 * stay readable no matter which theme is being previewed.
 */
const CONTROL_VARS = new Set([
  "--color-accent",
  "--color-accent-hover",
  "--color-accent-fg",
  "--color-accent-soft",
  "--color-accent-soft-fg",
  "--color-danger",
  "--color-danger-soft",
  "--color-danger-fg",
  "--glow",
]);

function miniStyle(theme: ThemeDef, side: "light" | "dark"): React.CSSProperties {
  const pal = paletteFor(theme, side);
  const vars = paletteToCssVars(pal);
  const css: React.CSSProperties = {};
  for (const [k, v] of Object.entries(vars)) {
    if (CONTROL_VARS.has(k)) continue;
    (css as Record<string, string>)[k] = v;
  }
  return css;
}

function ThemeThumb({ theme }: { theme: ThemeDef }) {
  const side = themeHasPalette(theme, "light") ? "light" : "dark";
  const res = resolveTheme(theme, side, false);
  const p = res.palette;

  const chips = [
    { bg: p.surface, fg: p.ink, label: "Oui" },
    { bg: p.tiles.sand.bg, fg: p.tiles.sand.fg, label: "Bonjour" },
    { bg: p.tiles.sky.bg, fg: p.tiles.sky.fg, label: "Eau" },
    { bg: p.tiles.rose.bg, fg: p.tiles.rose.fg, label: "Merci" },
    { bg: p.tiles.teal.bg, fg: p.tiles.teal.fg, label: "Toilettes" },
    { bg: p.surface2, fg: p.ink, label: "…" },
  ];

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: p.bg }}>
      {/* fake top window bar */}
      <div className="absolute inset-x-0 top-0 h-5 border-b" style={{ background: p.chrome, borderColor: p.line }}>
        <div className="flex items-center gap-1 px-1.5 pt-1">
          <span className="size-1.5 rounded-full" style={{ background: p.danger }} />
          <span className="size-1.5 rounded-full" style={{ background: p.pos }} />
          <span className="ml-auto text-[5px] font-bold" style={{ color: p.ink }}>
            {theme.emoji} {theme.name}
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex p-1.5 pt-5">
        <div className="flex w-full flex-col gap-1">
          <div className="flex gap-1">
            {chips.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="flex h-5 min-w-0 flex-1 items-center justify-center rounded-[3px] px-0.5 text-[4.5px] leading-none"
                style={{ background: c.bg, color: c.fg }}
              >
                {c.label}
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {chips.slice(3).map((c, i) => (
              <div
                key={i}
                className="flex h-5 min-w-0 flex-1 items-center justify-center rounded-[3px] px-0.5 text-[4.5px] leading-none"
                style={{ background: c.bg, color: c.fg }}
              >
                {c.label}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-1 pt-0.5">
            <div
              className="h-1.5 w-7 rounded-full"
              style={{ background: p.accent, boxShadow: `0 0 4px ${p.glow}` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemeGallery({ settings, onChange, onClose }: Props) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const favorites = settings.themeFavorites ?? [];
  const recents = settings.themeRecent ?? [];
  const activeThemeId = settings.themeId ?? DEFAULT_THEME_ID;
  const mode = effectiveMode(settings);

  const apply = (id: string) => {
    const theme = getTheme(id);
    if (!theme) return;
    onChange({
      themeId: id,
      themeRecent: [id, ...recents.filter((r) => r !== id)].slice(0, 12),
    });
    toast.success(`Thème appliqué : ${theme.emoji} ${theme.name}`);
  };

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter((f) => f !== id) : [id, ...favorites];
    onChange({ themeFavorites: next });
  };

  const setMode = (m: ThemeMode) => {
    onChange({ themeMode: m, dark: m === "dark" });
  };

  const themes = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = THEMES;
    if (filter === "favorites") list = THEMES.filter((t) => favorites.includes(t.id));
    else if (filter === "recent") list = recents.map(getTheme).filter((t): t is ThemeDef => Boolean(t));
    else if (filter !== "all") list = THEMES.filter((t) => t.cat === filter);
    if (needle) {
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(needle) ||
          t.era?.toLowerCase().includes(needle) ||
          categoryLabel(t.cat).toLowerCase().includes(needle),
      );
    }
    return list;
  }, [q, filter, favorites, recents]);

  return (
    <div className="absolute inset-0 z-[60] flex flex-col bg-bg">
      {/* header */}
      <header className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-line bg-chrome px-3 py-2.5 shadow-[var(--shadow-bar)]">
        <button
          type="button"
          aria-label="Fermer la galerie"
          onClick={onClose}
          className="th-btn flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface text-ink"
        >
          <X className="size-6" />
        </button>
        <h2 className="flex min-w-0 items-center gap-2 text-lg font-bold text-ink">
          <Palette className="size-6 shrink-0 text-accent" />
          <span className="truncate">Galerie des thèmes</span>
        </h2>
        <div className="ml-auto flex min-w-[9rem] flex-1 items-center gap-2 rounded-lg bg-surface-2 px-3 py-2 sm:max-w-xs">
          <Search className="size-4 shrink-0 text-subtle" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un thème…"
            className="w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-subtle"
          />
        </div>
        {/* light / dark / auto */}
        <div className="flex shrink-0 overflow-hidden rounded-lg border border-line bg-surface p-0.5" role="group" aria-label="Mode clair ou sombre">
          {(
            [
              ["auto", <Sparkles key="a" className="size-4" />, "Auto"],
              ["light", <Sun key="l" className="size-4" />, "Clair"],
              ["dark", <Moon key="d" className="size-4" />, "Sombre"],
            ] as const
          ).map(([m, icon, label]) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold",
                mode === m ? "rounded-md bg-accent text-accent-fg" : "text-muted hover:text-ink",
              )}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* filter chips */}
      <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-line bg-chrome px-3 py-2">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "th-chip shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                active ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-ink",
              )}
            >
              {f.label}
              {f.key === "favorites" ? ` (${favorites.length})` : f.key === "recent" ? ` (${recents.length})` : null}
            </button>
          );
        })}
      </div>

      {/* cards */}
      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {themes.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-muted">
            <Wand2 className="size-10 text-subtle" />
            <p>Aucun thème trouvé. Essayez un autre mot-clé.</p>
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-3 pb-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {themes.map((t) => {
            const active = t.id === activeThemeId;
            const fav = favorites.includes(t.id);
            const hasLight = themeHasPalette(t, "light");
            const hasDark = themeHasPalette(t, "dark");
            return (
              <article
                key={t.id}
                className={cn(
                  "theme-card group flex flex-col overflow-hidden rounded-xl border bg-surface shadow-[var(--shadow-tile)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-bar)]",
                  active ? "border-accent ring-2 ring-accent/60" : "border-line",
                )}
                style={miniStyle(t, hasLight ? "light" : "dark")}
              >
                <ThemeThumb theme={t} />
                <div className="flex flex-1 flex-col gap-1.5 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="min-w-0 text-sm leading-snug font-bold text-ink">
                      <span className="mr-1">{t.emoji}</span>
                      {t.name}
                    </h3>
                    <button
                      type="button"
                      aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
                      onClick={() => toggleFavorite(t.id)}
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                        fav ? "bg-accent text-accent-fg" : "bg-surface-2 text-subtle hover:text-ink",
                      )}
                    >
                      <Star className={cn("size-4", fav && "fill-current")} />
                    </button>
                  </div>
                  <p className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-subtle">
                    <span>{categoryEmoji(t.cat)} {categoryLabel(t.cat)}</span>
                    {t.era ? <span>· {t.era}</span> : null}
                    {hasLight && hasDark ? (
                      <span className="rounded bg-surface-2 px-1 py-px" title="Disponible en clair et sombre">☀️/🌙</span>
                    ) : hasDark ? (
                      <span className="rounded bg-surface-2 px-1 py-px">🌙</span>
                    ) : null}
                  </p>
                  <div className="mt-auto flex gap-2 pt-1.5">
                    {active ? (
                      <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent/15 py-2 text-xs font-bold text-accent">
                        <Check className="size-4" /> Thème actif
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => apply(t.id)}
                        className="th-btn flex flex-1 items-center justify-center rounded-lg bg-accent py-2 text-sm font-bold text-accent-fg transition-colors hover:bg-accent-hover"
                      >
                        Appliquer
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
