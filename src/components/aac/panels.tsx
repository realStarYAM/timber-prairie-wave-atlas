import { useEffect, useState, type ReactNode } from "react";
import { Download, Trash2, Upload, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { getFrenchVoices } from "@/lib/aac/speech";
import { TILE_CLASS } from "@/lib/aac/tile-styles";
import {
  TILE_COLORS,
  type ButtonSize,
  type Category,
  type HistoryItem,
  type Phrase,
  type Settings,
  type TileColor,
} from "@/lib/aac/types";
import { cn } from "@/lib/utils";

export function OverlayFrame({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="absolute inset-0 z-40 flex items-end justify-center bg-ink/35 p-3 sm:items-center">
      <div
        className={cn(
          "flex max-h-[min(92dvh,52rem)] w-full flex-col rounded-xl border border-line bg-surface shadow-[var(--shadow-bar)]",
          wide ? "max-w-3xl" : "max-w-lg",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <h2 id="panel-title" className="text-lg font-semibold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-md hover:bg-secondary"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
        </header>
        <div className="overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export function FullscreenMessage({
  text,
  flipped,
  onClose,
  onSpeak,
}: {
  text: string;
  flipped: boolean;
  onClose: () => void;
  onSpeak: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-surface-2 p-4">
      <div className="mb-3 flex justify-end gap-2">
        <Button onClick={onSpeak}>Parler</Button>
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </div>
      <div
        className={cn(
          "flex flex-1 items-center justify-center overflow-auto px-4 text-center",
          flipped && "rotate-180",
        )}
      >
        <p className="max-w-5xl text-pretty text-3xl font-semibold leading-snug sm:text-5xl lg:text-6xl">
          {text || "…"}
        </p>
      </div>
    </div>
  );
}

export function HistoryPanel({
  items,
  onClose,
  onPick,
  onClear,
}: {
  items: HistoryItem[];
  onClose: () => void;
  onPick: (text: string) => void;
  onClear: () => void;
}) {
  return (
    <OverlayFrame title="Messages récents" onClose={onClose}>
      {items.length === 0 ? (
        <p className="py-8 text-center text-muted">Aucun message pour le moment.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onPick(item.text)}
                className="w-full rounded-md bg-secondary px-4 py-3 text-left text-base font-medium"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 ? (
        <Button variant="ghost" className="mt-4" onClick={onClear}>
          Vider l’historique
        </Button>
      ) : null}
    </OverlayFrame>
  );
}

export function SettingsPanel({
  settings,
  onChange,
  onClose,
  onReset,
  onExport,
  onImport,
}: {
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onClose: () => void;
  onReset: () => void;
  onExport: () => void;
  onImport: (file: File) => void;
}) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    const load = () => setVoices(getFrenchVoices());
    load();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  return (
    <OverlayFrame title="Réglages" onClose={onClose} wide>
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">Parole</h3>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Voix</span>
            <select
              className="h-12 rounded-md border border-line bg-surface-2 px-3 text-base"
              value={settings.voiceURI}
              onChange={(e) => onChange({ voiceURI: e.target.value })}
            >
              <option value="">Voix française par défaut</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Vitesse ({settings.rate.toFixed(2)})</span>
            <input
              type="range"
              min={0.6}
              max={1.3}
              step={0.05}
              value={settings.rate}
              onChange={(e) => onChange({ rate: Number(e.target.value) })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Hauteur ({settings.pitch.toFixed(2)})</span>
            <input
              type="range"
              min={0.7}
              max={1.4}
              step={0.05}
              value={settings.pitch}
              onChange={(e) => onChange({ pitch: Number(e.target.value) })}
            />
          </label>
          <Toggle
            label="Parler au toucher d’une phrase"
            checked={settings.speakOnTap}
            onChange={(v) => onChange({ speakOnTap: v })}
          />
          <Toggle
            label="Effacer le message après « Parler »"
            checked={settings.clearAfterSpeak}
            onChange={(v) => onChange({ clearAfterSpeak: v })}
          />
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">Affichage</h3>
          <div className="flex flex-wrap gap-2">
            {(["compact", "comfortable", "large"] as ButtonSize[]).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onChange({ buttonSize: size })}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium",
                  settings.buttonSize === size ? "bg-accent text-accent-fg" : "bg-secondary",
                )}
              >
                {size === "compact" ? "Compact" : size === "comfortable" ? "Confort" : "Grand"}
              </button>
            ))}
          </div>
          <Toggle
            label="Thème sombre"
            checked={settings.dark}
            onChange={(v) => onChange({ dark: v })}
          />
          <Toggle
            label="Contraste élevé"
            checked={settings.highContrast}
            onChange={(v) => onChange({ highContrast: v })}
          />
          <Toggle
            label="Appui long pour modifier"
            checked={settings.longPressEdit}
            onChange={(v) => onChange({ longPressEdit: v })}
          />
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">Données</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={onExport}>
              <Download className="size-4" />
              Exporter
            </Button>
            <label className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-line bg-surface px-4 text-sm font-medium">
              <Upload className="size-4" />
              Importer
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onImport(file);
                  e.target.value = "";
                }}
              />
            </label>
            <Button variant="danger" onClick={() => setConfirmReset(true)}>
              <Trash2 className="size-4" />
              Tableau d’origine
            </Button>
          </div>
          {confirmReset ? (
            <div className="rounded-md border border-line bg-danger-soft p-3 text-danger-fg">
              <p className="text-sm">Remplacer toutes les phrases par le tableau d’origine ?</p>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="danger"
                  onClick={() => {
                    onReset();
                    setConfirmReset(false);
                    toast.success("Tableau restauré");
                  }}
                >
                  Confirmer
                </Button>
                <Button variant="ghost" onClick={() => setConfirmReset(false)}>
                  Annuler
                </Button>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </OverlayFrame>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-secondary px-3 py-3">
      <span className="text-sm font-medium">{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

export function AddPanel({
  categories,
  currentCategoryId,
  currentMessage,
  onClose,
  onAddPhrase,
  onAddCategory,
  onSaveMessage,
}: {
  categories: Category[];
  currentCategoryId: string;
  currentMessage: string;
  onClose: () => void;
  onAddPhrase: (categoryId: string, phrase: Omit<Phrase, "id">) => void;
  onAddCategory: (name: string, color: TileColor, icon: string) => void;
  onSaveMessage: (categoryId: string) => void;
}) {
  const writable = categories.filter((c) => !c.virtual);
  const [tab, setTab] = useState<"phrase" | "category" | "save">("phrase");
  const [label, setLabel] = useState("");
  const [speak, setSpeak] = useState("");
  const [catId, setCatId] = useState(
    writable.some((c) => c.id === currentCategoryId) ? currentCategoryId : (writable[0]?.id ?? ""),
  );
  const [catName, setCatName] = useState("");
  const [color, setColor] = useState<TileColor>("teal");

  return (
    <OverlayFrame title="Ajouter" onClose={onClose}>
      <div className="mb-4 flex gap-2">
        {(
          [
            ["phrase", "Phrase"],
            ["category", "Catégorie"],
            ["save", "Message actuel"],
          ] as const
        ).map(([id, name]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "flex-1 rounded-md px-3 py-3 text-sm font-medium",
              tab === id ? "bg-accent text-accent-fg" : "bg-secondary",
            )}
          >
            {name}
          </button>
        ))}
      </div>

      {tab === "phrase" ? (
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!label.trim()) return;
            onAddPhrase(catId, { label: label.trim(), speak: speak.trim() || undefined });
            toast.success("Phrase ajoutée");
            onClose();
          }}
        >
          <Field label="Texte du bouton">
            <Input value={label} onChange={(e) => setLabel(e.target.value)} required />
          </Field>
          <Field label="Texte prononcé (optionnel)">
            <Input value={speak} onChange={(e) => setSpeak(e.target.value)} />
          </Field>
          <Field label="Catégorie">
            <select
              className="h-12 w-full rounded-md border border-line bg-surface-2 px-3"
              value={catId}
              onChange={(e) => setCatId(e.target.value)}
            >
              {writable.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Button type="submit" size="lg">
            Enregistrer
          </Button>
        </form>
      ) : null}

      {tab === "category" ? (
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!catName.trim()) return;
            onAddCategory(catName.trim(), color, "Star");
            toast.success("Catégorie ajoutée");
            onClose();
          }}
        >
          <Field label="Nom">
            <Input value={catName} onChange={(e) => setCatName(e.target.value)} required />
          </Field>
          <ColorPicker value={color} onChange={setColor} />
          <Button type="submit" size="lg">
            Créer
          </Button>
        </form>
      ) : null}

      {tab === "save" ? (
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!currentMessage.trim()) {
              toast.error("Le message est vide");
              return;
            }
            onSaveMessage(catId);
            toast.success("Message enregistré comme phrase");
            onClose();
          }}
        >
          <p className="rounded-md bg-secondary px-3 py-3 text-sm">{currentMessage || "—"}</p>
          <Field label="Catégorie">
            <select
              className="h-12 w-full rounded-md border border-line bg-surface-2 px-3"
              value={catId}
              onChange={(e) => setCatId(e.target.value)}
            >
              {writable.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Button type="submit" size="lg">
            Enregistrer
          </Button>
        </form>
      ) : null}
    </OverlayFrame>
  );
}

export function EditPhraseDialog({
  phrase,
  categoryId,
  categories,
  favorite,
  onToggleFavorite,
  onClose,
  onSave,
  onDelete,
}: {
  phrase: Phrase;
  categoryId: string;
  categories: Category[];
  favorite: boolean;
  onToggleFavorite: () => void;
  onClose: () => void;
  onSave: (patch: Partial<Phrase>, moveTo?: string) => void;
  onDelete: () => void;
}) {
  const [label, setLabel] = useState(phrase.label);
  const [speak, setSpeak] = useState(phrase.speak ?? "");
  const [color, setColor] = useState<TileColor | "">(phrase.color ?? "");
  const writable = categories.filter((c) => !c.virtual);
  const initialCat =
    writable.find((c) => c.phrases.some((p) => p.id === phrase.id))?.id ??
    (writable.some((c) => c.id === categoryId) ? categoryId : (writable[0]?.id ?? ""));
  const [catId, setCatId] = useState(initialCat);

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier la phrase</DialogTitle>
          <DialogDescription>Appui long pour ouvrir cet écran.</DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(
              {
                label: label.trim(),
                speak: speak.trim() || undefined,
                color: color || undefined,
              },
              catId !== initialCat ? catId : undefined,
            );
            onClose();
          }}
        >
          <Field label="Texte du bouton">
            <Input value={label} onChange={(e) => setLabel(e.target.value)} />
          </Field>
          <Field label="Texte prononcé">
            <Textarea value={speak} onChange={(e) => setSpeak(e.target.value)} />
          </Field>
          <Field label="Catégorie">
            <select
              className="h-12 w-full rounded-md border border-line bg-surface-2 px-3"
              value={catId}
              onChange={(e) => setCatId(e.target.value)}
            >
              {writable.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <ColorPicker
            value={color || "paper"}
            onChange={(c) => setColor(c)}
            allowEmpty
            empty={color === ""}
            onEmpty={() => setColor("")}
          />
          <div className="flex items-center justify-between gap-3 rounded-md bg-secondary px-3 py-3">
            <span className="text-sm font-medium">Favori</span>
            <Switch checked={favorite} onCheckedChange={onToggleFavorite} />
          </div>
          <div className="mt-2 flex gap-2">
            <Button type="submit">Enregistrer</Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                onDelete();
                onClose();
              }}
            >
              Supprimer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EditCategoryDialog({
  category,
  onClose,
  onSave,
  onDelete,
}: {
  category: Category;
  onClose: () => void;
  onSave: (patch: { name: string; color: TileColor }) => void;
  onDelete: () => void;
}) {
  const [name, setName] = useState(category.name);
  const [color, setColor] = useState<TileColor>(category.color);

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier la catégorie</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSave({ name: name.trim(), color });
            onClose();
          }}
        >
          <Field label="Nom">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <ColorPicker value={color} onChange={setColor} />
          <div className="mt-2 flex gap-2">
            <Button type="submit">Enregistrer</Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                onDelete();
                onClose();
              }}
            >
              Supprimer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
    </label>
  );
}

function ColorPicker({
  value,
  onChange,
  allowEmpty,
  empty,
  onEmpty,
}: {
  value: TileColor;
  onChange: (c: TileColor) => void;
  allowEmpty?: boolean;
  empty?: boolean;
  onEmpty?: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {allowEmpty ? (
        <button
          type="button"
          onClick={onEmpty}
          className={cn("size-10 rounded-md border border-line", empty && "ring-2 ring-ink")}
          aria-label="Couleur de la catégorie"
        />
      ) : null}
      {TILE_COLORS.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={cn(
            "size-10 rounded-md",
            TILE_CLASS[c],
            !empty && value === c && "ring-2 ring-ink ring-offset-2 ring-offset-surface",
          )}
          aria-label={c}
        />
      ))}
    </div>
  );
}
