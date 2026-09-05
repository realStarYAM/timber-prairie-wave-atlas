import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownUp,
  Download,
  Grid3x3,
  ImageIcon,
  Keyboard,
  Mic,
  Palette,
  Pencil,
  Save,
  Search,
  Settings as SettingsIcon,
  Trash2,
  Upload,
  Volume2,
} from "lucide-react";
import { toast } from "sonner";
import {
  IosAlert,
  IosFooter,
  IosFooterBtn,
  IosInput,
  IosRow,
  IosScrim,
  IosSheet,
  IosToggleRow,
} from "./ios";
import { fileToDataUrl } from "@/lib/aac/chime";
import { getFrenchVoices } from "@/lib/aac/speech";
import { TILE_CLASS } from "@/lib/aac/tile-styles";
import {
  TILE_COLORS,
  type ButtonSize,
  type Category,
  type Phrase,
  type Profile,
  type Settings,
  type TileColor,
} from "@/lib/aac/types";
import { cn } from "@/lib/utils";

export function SettingsMenu({
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
  const [page, setPage] = useState<
    null | "general" | "layout" | "board" | "speech" | "backup" | "keyboard"
  >(null);

  if (page === "general") {
    return (
      <SubPage title="Paramètres généraux" onBack={() => setPage(null)}>
        <IosToggleRow
          label="Appui long pour modifier"
          checked={settings.longPressEdit}
          onChange={(v) => onChange({ longPressEdit: v })}
        />
        <IosToggleRow
          label="Thème sombre"
          checked={settings.dark}
          onChange={(v) => onChange({ dark: v })}
        />
        <IosToggleRow
          label="Contraste élevé"
          checked={settings.highContrast}
          onChange={(v) => onChange({ highContrast: v })}
          last
        />
      </SubPage>
    );
  }

  if (page === "layout") {
    return (
      <SubPage title="Mise en page et couleurs" onBack={() => setPage(null)}>
        <p className="px-4 pt-3 pb-1 text-xs tracking-wide text-white/50 uppercase">Taille des boutons</p>
        <div className="flex gap-2 px-4 py-3">
          {(["compact", "comfortable", "large"] as ButtonSize[]).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onChange({ buttonSize: size })}
              className={cn(
                "flex-1 rounded-lg py-3 text-sm font-medium",
                settings.buttonSize === size ? "bg-[#0a84ff] text-white" : "bg-white/10",
              )}
            >
              {size === "compact" ? "Compact" : size === "comfortable" ? "Confort" : "Grand"}
            </button>
          ))}
        </div>
        <IosToggleRow label="Thème sombre" checked={settings.dark} onChange={(v) => onChange({ dark: v })} last />
      </SubPage>
    );
  }

  if (page === "board") {
    return (
      <SubPage title="Catégories et phrases" onBack={() => setPage(null)}>
        <p className="px-4 py-4 text-[15px] leading-relaxed text-white/70">
          Appui long sur une phrase ou une catégorie pour la modifier. Utilisez + pour en ajouter, et la loupe pour
          rechercher.
        </p>
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={() => {
              onReset();
              toast.success("Tableau restauré");
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#ff453a]"
          >
            <Trash2 className="size-4" />
            Restaurer le tableau d’origine
          </button>
        </div>
      </SubPage>
    );
  }

  if (page === "speech") {
    return <SpeechPage settings={settings} onChange={onChange} onBack={() => setPage(null)} />;
  }

  if (page === "backup") {
    return (
      <SubPage title="Sauvegarder et importer" onBack={() => setPage(null)}>
        <p className="px-4 py-4 text-[15px] leading-relaxed text-white/70">
          Exportez votre tableau en fichier JSON, ou importez-en un. Le partage AirDrop n’est pas disponible dans le
          navigateur : envoyez le fichier par Messages ou Mail.
        </p>
        <div className="flex flex-col gap-2 px-4 pb-4">
          <button
            type="button"
            onClick={onExport}
            className="flex items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#0a84ff]"
          >
            <Download className="size-4" />
            Exporter le tableau
          </button>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#0a84ff]">
            <Upload className="size-4" />
            Importer un tableau
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
        </div>
      </SubPage>
    );
  }

  if (page === "keyboard") {
    return <KeyboardPage settings={settings} onChange={onChange} onBack={() => setPage(null)} />;
  }

  return (
    <IosScrim onClose={onClose}>
      <IosSheet
        title="Paramètres"
        footer={
          <IosFooter>
            <IosFooterBtn primary onClick={onClose}>
              Terminé
            </IosFooterBtn>
          </IosFooter>
        }
      >
        <IosRow
          icon={<SettingsIcon className="size-6" />}
          label="Paramètres généraux"
          onClick={() => setPage("general")}
        />
        <IosRow
          icon={<Palette className="size-6" />}
          label="Mise en page et Couleurs"
          onClick={() => setPage("layout")}
        />
        <IosRow
          icon={<Grid3x3 className="size-6" />}
          label="Catégories/Phrases et Utilisateurs"
          onClick={() => setPage("board")}
        />
        <IosRow
          icon={<Volume2 className="size-6" />}
          label="Parole, Enregistrements et Son"
          onClick={() => setPage("speech")}
        />
        <IosRow
          icon={<Save className="size-6" />}
          label="Sauvegarder, Importer et AirDrop"
          onClick={() => setPage("backup")}
        />
        <IosRow
          icon={<Keyboard className="size-6" />}
          label="Clavier Personnalisé"
          onClick={() => setPage("keyboard")}
          last
        />
        <IosToggleRow
          label="Parler auto"
          checked={settings.speakOnTap}
          onChange={(v) => onChange({ speakOnTap: v })}
        />
        <IosToggleRow
          label="Parler/effacer auto"
          checked={settings.clearAfterSpeak}
          onChange={(v) => onChange({ clearAfterSpeak: v })}
          last
        />
      </IosSheet>
    </IosScrim>
  );
}

function SubPage({ title, onBack, children }: { title: string; onBack: () => void; children: ReactNode }) {
  return (
    <IosScrim onClose={onBack}>
      <IosSheet
        title={title}
        footer={
          <IosFooter>
            <IosFooterBtn primary onClick={onBack}>
              Retour
            </IosFooterBtn>
          </IosFooter>
        }
      >
        {children}
      </IosSheet>
    </IosScrim>
  );
}

function SpeechPage({
  settings,
  onChange,
  onBack,
}: {
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onBack: () => void;
}) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    const load = () => setVoices(getFrenchVoices());
    load();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  return (
    <SubPage title="Parole et son" onBack={onBack}>
      <label className="block px-4 py-3">
        <span className="mb-2 block text-sm text-white/60">Voix</span>
        <select
          className="h-11 w-full rounded-md bg-[#2c2c2e] px-3 text-white"
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
      <label className="block px-4 py-3">
        <span className="mb-2 block text-sm text-white/60">Vitesse ({settings.rate.toFixed(2)})</span>
        <input
          type="range"
          min={0.6}
          max={1.3}
          step={0.05}
          value={settings.rate}
          onChange={(e) => onChange({ rate: Number(e.target.value) })}
          className="w-full"
        />
      </label>
      <label className="block px-4 py-3">
        <span className="mb-2 block text-sm text-white/60">Hauteur ({settings.pitch.toFixed(2)})</span>
        <input
          type="range"
          min={0.7}
          max={1.4}
          step={0.05}
          value={settings.pitch}
          onChange={(e) => onChange({ pitch: Number(e.target.value) })}
          className="w-full"
        />
      </label>
    </SubPage>
  );
}

function KeyboardPage({
  settings,
  onChange,
  onBack,
}: {
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onBack: () => void;
}) {
  const [draft, setDraft] = useState("");
  const keys = settings.customKeys ?? [];
  return (
    <SubPage title="Clavier personnalisé" onBack={onBack}>
      <p className="px-4 py-3 text-[15px] text-white/70">
        Raccourcis affichés au-dessus du clavier. Touchez-en un pour l’écrire d’un geste.
      </p>
      <div className="flex flex-wrap gap-2 px-4 pb-3">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => onChange({ customKeys: keys.filter((x) => x !== k) })}
            className="rounded-full bg-white/10 px-3 py-1.5 text-sm"
          >
            {k} ×
          </button>
        ))}
      </div>
      <div className="flex gap-2 px-4 pb-4">
        <IosInput value={draft} onChange={setDraft} placeholder="Nouveau raccourci" />
        <button
          type="button"
          onClick={() => {
            const t = draft.trim();
            if (!t || keys.includes(t)) return;
            onChange({ customKeys: [...keys, t] });
            setDraft("");
          }}
          className="rounded-md bg-[#0a84ff] px-3 text-sm font-medium"
        >
          Ajouter
        </button>
      </div>
    </SubPage>
  );
}

export function AddPopover({
  onNewPhrase,
  onSaveCurrent,
  onNewCategory,
  onClose,
}: {
  onNewPhrase: () => void;
  onSaveCurrent: () => void;
  onNewCategory: () => void;
  onClose: () => void;
}) {
  return (
    <IosScrim onClose={onClose} align="top-right" fit>
      <div className="ml-auto w-72 overflow-hidden rounded-xl bg-[#2c2c2e] shadow-2xl">
        <button
          type="button"
          onClick={onNewPhrase}
          className="w-full border-b border-white/10 py-3.5 text-center text-[17px] text-[#0a84ff]"
        >
          Nouvelle phrase
        </button>
        <button
          type="button"
          onClick={onSaveCurrent}
          className="w-full border-b border-white/10 py-3.5 text-center text-[17px] text-[#0a84ff]"
        >
          Enregistrer phrase actuelle
        </button>
        <button
          type="button"
          onClick={onNewCategory}
          className="w-full py-3.5 text-center text-[17px] text-[#0a84ff]"
        >
          Nouvelle catégorie
        </button>
      </div>
    </IosScrim>
  );
}

export function NewPhraseDialog({
  categories,
  currentCategoryId,
  initialLabel,
  onAdd,
  onClose,
}: {
  categories: Category[];
  currentCategoryId: string;
  initialLabel?: string;
  onAdd: (categoryId: string, phrase: Omit<Phrase, "id">, index: number) => void;
  onClose: () => void;
}) {
  const writable = categories.filter((c) => !c.virtual);
  const [label, setLabel] = useState(initialLabel ?? "");
  const [catId, setCatId] = useState(
    writable.some((c) => c.id === currentCategoryId) ? currentCategoryId : (writable[0]?.id ?? ""),
  );
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState<TileColor | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [audio, setAudio] = useState<string | undefined>();
  const [palette, setPalette] = useState(false);
  const [alert, setAlert] = useState(false);
  const [recording, setRecording] = useState(false);
  const media = useRef<MediaRecorder | null>(null);

  const cat = writable.find((c) => c.id === catId) ?? writable[0];
  const phrases = cat?.phrases ?? [];

  async function onImage(file: File) {
    try {
      setImage(await fileToDataUrl(file));
    } catch {
      toast.error("Image illisible");
    }
  }

  async function toggleRec() {
    if (recording) {
      media.current?.stop();
      setRecording(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      rec.ondataavailable = (e) => chunks.push(e.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
        const reader = new FileReader();
        reader.onload = () => setAudio(String(reader.result));
        reader.readAsDataURL(blob);
      };
      media.current = rec;
      rec.start();
      setRecording(true);
      window.setTimeout(() => {
        if (rec.state === "recording") rec.stop();
        setRecording(false);
      }, 4000);
    } catch {
      toast.error("Micro indisponible");
    }
  }

  function submit() {
    if (!label.trim()) {
      setAlert(true);
      return;
    }
    onAdd(
      catId,
      { label: label.trim(), color, image, audio },
      index,
    );
    toast.success("Phrase ajoutée");
    onClose();
  }

  return (
    <>
      <IosScrim onClose={onClose}>
        <IosSheet
          title="Nouvelle phrase"
          wide
          footer={
            <IosFooter>
              <IosFooterBtn onClick={onClose}>Annuler</IosFooterBtn>
              <div className="w-px bg-white/15" />
              <IosFooterBtn primary onClick={submit}>
                Ajouter
              </IosFooterBtn>
            </IosFooter>
          }
        >
          <div className="grid gap-3 p-3 md:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-3">
              <div className="flex min-h-24 items-center justify-center rounded-lg bg-[#2c2c2e] px-3 text-center text-lg">
                {image ? <img src={image} alt="" className="mr-2 size-10 rounded object-cover" /> : null}
                <span className={color ? TILE_CLASS[color] : ""}>{label || " "}</span>
              </div>
              <label className="text-sm text-white/70">
                Étiquette:
                <div className="mt-1">
                  <IosInput value={label} onChange={setLabel} autoFocus />
                </div>
              </label>
              <div className="flex gap-2">
                <IconBtn label="Couleur" onClick={() => setPalette((v) => !v)}>
                  <Palette className="size-7" />
                </IconBtn>
                <label className="flex size-14 cursor-pointer items-center justify-center rounded-lg bg-[#2c2c2e] text-[#0a84ff]">
                  <ImageIcon className="size-7" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) void onImage(f);
                    }}
                  />
                </label>
                <IconBtn label="Enregistrer la prononciation" onClick={() => void toggleRec()}>
                  <Mic className={cn("size-7", recording && "text-[#ff453a]")} />
                </IconBtn>
              </div>
              {palette ? (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setColor(undefined)}
                    className="size-9 rounded-md border border-white/20"
                    aria-label="Sans couleur"
                  />
                  {TILE_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-white")}
                      aria-label={c}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="overflow-hidden rounded-lg bg-[#2c2c2e]">
              <div className="grid max-h-64 grid-cols-2 overflow-y-auto">
                <div className="border-r border-white/10">
                  {writable.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setCatId(c.id);
                        setIndex(0);
                      }}
                      className={cn(
                        "block w-full truncate px-3 py-2 text-left text-sm",
                        c.id === catId ? "bg-white/15" : "text-white/50",
                      )}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
                <div>
                  {phrases.length === 0 ? (
                    <p className="px-3 py-2 text-sm text-white/40">Pos: 1 (vide)</p>
                  ) : (
                    phrases.map((p, i) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "block w-full truncate px-3 py-2 text-left text-sm",
                          index === i ? "bg-white/15" : "text-white/50",
                        )}
                      >
                        Pos: {i + 1} {p.label}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </IosSheet>
      </IosScrim>
      {alert ? <IosAlert title="Pas de texte entré." onOk={() => setAlert(false)} /> : null}
    </>
  );
}

export function NewCategoryDialog({
  categories,
  onAdd,
  onClose,
}: {
  categories: Category[];
  onAdd: (name: string, color: TileColor, icon: string, index: number) => void;
  onClose: () => void;
}) {
  const real = categories.filter((c) => !c.virtual);
  const [name, setName] = useState("");
  const [color, setColor] = useState<TileColor>("mist");
  const [index, setIndex] = useState(0);
  const [palette, setPalette] = useState(false);
  const [alert, setAlert] = useState(false);

  function submit() {
    if (!name.trim()) {
      setAlert(true);
      return;
    }
    onAdd(name.trim(), color, "Star", index);
    toast.success("Catégorie ajoutée");
    onClose();
  }

  return (
    <>
      <IosScrim onClose={onClose}>
        <IosSheet
          title="Nouvelle catégorie"
          wide
          footer={
            <IosFooter>
              <IosFooterBtn onClick={onClose}>Annuler</IosFooterBtn>
              <div className="w-px bg-white/15" />
              <IosFooterBtn primary onClick={submit}>
                Ajouter
              </IosFooterBtn>
            </IosFooter>
          }
        >
          <div className="grid gap-3 p-3 md:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-3">
              <IosInput value={name} onChange={setName} placeholder="Nom" autoFocus />
              <div className="flex gap-2">
                <IconBtn label="Couleur" onClick={() => setPalette((v) => !v)}>
                  <Palette className="size-7" />
                </IconBtn>
                <IconBtn label="Image">
                  <ImageIcon className="size-7" />
                </IconBtn>
              </div>
              {palette ? (
                <div className="flex flex-wrap gap-2">
                  {TILE_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-white")}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="max-h-56 overflow-y-auto rounded-lg bg-[#2c2c2e]">
              {real.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    "block w-full truncate px-3 py-2 text-left text-sm",
                    index === i ? "bg-white/15" : "text-white/50",
                  )}
                >
                  Pos: {i + 1} {c.name}
                </button>
              ))}
            </div>
          </div>
        </IosSheet>
      </IosScrim>
      {alert ? <IosAlert title="Pas de texte entré." onOk={() => setAlert(false)} /> : null}
    </>
  );
}

function IconBtn({
  children,
  onClick,
  label,
}: {
  children: ReactNode;
  onClick?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-14 items-center justify-center rounded-lg bg-[#2c2c2e] text-[#0a84ff]"
    >
      {children}
    </button>
  );
}

export function SearchPhrases({
  categories,
  onClose,
  onSpeak,
  onEdit,
  onPick,
}: {
  categories: Category[];
  onClose: () => void;
  onSpeak: (text: string) => void;
  onEdit: (phrase: Phrase) => void;
  onPick: (phrase: Phrase) => void;
}) {
  const [q, setQ] = useState("");
  const rows = categories
    .filter((c) => !c.virtual)
    .flatMap((c) => c.phrases.map((p) => ({ phrase: p, cat: c.name })))
    .filter((r) => r.phrase.label.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.phrase.label.localeCompare(b.phrase.label, "fr"));

  return (
    <IosScrim onClose={onClose}>
      <IosSheet
        title="Rechercher phrases"
        wide
        footer={
          <IosFooter>
            <IosFooterBtn primary onClick={onClose}>
              Terminé
            </IosFooterBtn>
          </IosFooter>
        }
      >
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 rounded-lg bg-[#2c2c2e] px-3">
            <Search className="size-4 text-white/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus
              className="h-11 flex-1 bg-transparent text-[17px] outline-none"
              placeholder="Rechercher"
            />
          </div>
        </div>
        <ul>
          {rows.map(({ phrase, cat }) => (
            <li key={phrase.id} className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <button type="button" className="min-w-0 flex-1 text-left" onClick={() => onPick(phrase)}>
                <p className="truncate text-[17px]">{phrase.label}</p>
                <p className="text-sm text-white/50">Catégorie: {cat}</p>
              </button>
              <button
                type="button"
                className="size-10 text-[#7c5cff]"
                aria-label="Écouter"
                onClick={() => onSpeak(phrase.speak ?? phrase.label)}
              >
                <Volume2 className="size-6" />
              </button>
              <button
                type="button"
                className="size-10 text-white/70"
                aria-label="Modifier"
                onClick={() => onEdit(phrase)}
              >
                <Pencil className="size-5" />
              </button>
            </li>
          ))}
        </ul>
      </IosSheet>
    </IosScrim>
  );
}

export function UsersMenu({
  profiles,
  activeId,
  onSelect,
  onAdd,
  onClose,
}: {
  profiles: Profile[];
  activeId: string;
  onSelect: (id: string) => void;
  onAdd: (name: string) => void;
  onClose: () => void;
}) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");

  return (
    <IosScrim onClose={onClose} align="top-right" fit>
      <div className="ml-auto w-72 overflow-hidden rounded-xl bg-[#2c2c2e] shadow-2xl">
        {profiles.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              onSelect(p.id);
              onClose();
            }}
            className="flex w-full items-center justify-between border-b border-white/10 px-4 py-3.5 text-[17px] text-[#0a84ff]"
          >
            <span>{p.name}</span>
            {p.id === activeId ? <span>✓</span> : null}
          </button>
        ))}
        {creating ? (
          <div className="flex gap-2 p-3">
            <IosInput value={name} onChange={setName} placeholder="Nom" autoFocus />
            <button
              type="button"
              className="text-sm text-[#0a84ff]"
              onClick={() => {
                if (!name.trim()) return;
                onAdd(name.trim());
                onClose();
              }}
            >
              OK
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setCreating(true)}
            className="w-full py-3.5 text-center text-[17px] text-[#0a84ff]"
          >
            Nouvel utilisateur
          </button>
        )}
      </div>
    </IosScrim>
  );
}

export function FullscreenHelp({ onOk }: { onOk: () => void }) {
  return (
    <IosScrim>
      <IosSheet
        title="Saisie plein écran"
        footer={
          <IosFooter>
            <IosFooterBtn primary onClick={onOk}>
              Ok
            </IosFooterBtn>
          </IosFooter>
        }
      >
        <ul className="space-y-4 px-5 py-4 text-[15px] leading-relaxed text-white/90">
          <li>
            • La saisie plein écran vous offre plus d’espace pour saisir, relire et modifier votre message. Elle est
            particulièrement utile pour les messages plus longs ou lorsque vous souhaitez vous concentrer sur la saisie.
          </li>
          <li>• Vous pouvez enregistrer votre texte comme une nouvelle phrase ou mettre à jour la phrase enregistrée.</li>
          <li>
            • Et vous pouvez revenir à l’écran principal à tout moment. Votre texte restera dans la zone de message.
          </li>
        </ul>
      </IosSheet>
    </IosScrim>
  );
}

export function FullscreenEditor({
  text,
  onChange,
  onClose,
  onSpeak,
  onClear,
  onDeleteWord,
  onSave,
  onShare,
  onBell,
  onSettings,
}: {
  text: string;
  onChange: (v: string) => void;
  onClose: () => void;
  onSpeak: () => void;
  onClear: () => void;
  onDeleteWord: () => void;
  onSave: () => void;
  onShare: () => void;
  onBell: () => void;
  onSettings: () => void;
}) {
  return (
    <div className="absolute inset-0 z-40 flex gap-2 bg-bg p-3">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="h-full min-h-0 flex-1 resize-none rounded-xl bg-surface p-5 text-2xl leading-snug text-ink outline-none"
        autoFocus
        aria-label="Saisie plein écran"
      />
      <div className="grid w-[9.5rem] shrink-0 grid-cols-2 content-start gap-2">
        <FsBtn label="Effacer" onClick={onClear} className="text-danger">
          <span className="text-3xl font-light">×</span>
        </FsBtn>
        <FsBtn label="Parler" onClick={onSpeak} className="text-[#1d4ed8]">
          <Volume2 className="size-8" />
        </FsBtn>
        <FsBtn label="Mot précédent" onClick={onDeleteWord} className="text-[#1d4ed8]">
          <span className="text-xl">⌫</span>
        </FsBtn>
        <FsBtn label="Enregistrer" onClick={onSave} className="text-[#1d4ed8]">
          <Save className="size-7" />
        </FsBtn>
        <FsBtn label="Partager" onClick={onShare} className="text-[#3f6f4e]">
          <Upload className="size-7" />
        </FsBtn>
        <FsBtn label="Retour" onClick={onClose} className="text-[#3f6f4e]">
          <span className="text-3xl">←</span>
        </FsBtn>
        <FsBtn label="Réglages" onClick={onSettings} className="text-muted">
          <SettingsIcon className="size-8" />
        </FsBtn>
        <FsBtn label="Sonnette" onClick={onBell} className="text-[#3f6f4e]">
          <span className="text-2xl">🔔</span>
        </FsBtn>
      </div>
    </div>
  );
}

function FsBtn({
  children,
  onClick,
  label,
  className,
}: {
  children: ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "tile-press flex h-16 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)]",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ReorderHint() {
  return (
    <p className="pointer-events-none absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#1c1c1e]/90 px-3 py-1 text-xs text-white">
      Mode réorganisation — flèches sur les cases
    </p>
  );
}

export { ArrowDownUp };
