import type { ReactNode } from "react";
import { Delete, Volume2, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Phrase } from "@/lib/aac/types";
import { cn } from "@/lib/utils";

const ROW1 = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"];
const ROW2 = ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"];
const ROW3 = ["w", "x", "c", "v", "b", "n", "'", "-", "."];
const ACCENTS = ["é", "è", "ê", "à", "ù", "ç", "ô", "î", "œ", ",", "?", "!"];

type Props = {
  open: boolean;
  message: string;
  phrases: Phrase[];
  customKeys?: string[];
  onClose: () => void;
  onChange: (value: string) => void;
  onSpeak: () => void;
  onPickPhrase: (phrase: Phrase) => void;
};

export function KeyboardOverlay({
  open,
  message,
  phrases,
  customKeys = [],
  onClose,
  onChange,
  onSpeak,
  onPickPhrase,
}: Props) {
  const [shift, setShift] = useState(false);

  const predictions = useMemo(() => {
    const last = message.split(/\s+/).pop()?.toLowerCase() ?? "";
    if (last.length < 1) {
      return phrases.slice(0, 6);
    }
    return phrases
      .filter((p) => p.label.toLowerCase().includes(last) || (p.speak ?? "").toLowerCase().includes(last))
      .slice(0, 8);
  }, [message, phrases]);

  if (!open) return null;

  function insert(ch: string) {
    onChange(message + (shift ? ch.toUpperCase() : ch));
    if (shift) setShift(false);
  }

  function backspace() {
    onChange(message.slice(0, -1));
  }

  function space() {
    onChange(message.endsWith(" ") ? message : `${message} `);
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-30 rounded-t-xl border-t border-line bg-surface p-2 shadow-[var(--shadow-bar)] lg:p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted">Clavier</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onSpeak}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3 text-sm font-semibold text-accent-fg"
          >
            <Volume2 className="size-4" />
            Parler
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-md bg-secondary text-ink"
            aria-label="Fermer le clavier"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {customKeys.length > 0 ? (
        <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
          {customKeys.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onChange(message ? `${message.trimEnd()} ${k}` : k)}
              className="shrink-0 rounded-md bg-secondary px-3 py-2 text-sm font-medium"
            >
              {k}
            </button>
          ))}
        </div>
      ) : null}

      {predictions.length > 0 ? (
        <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
          {predictions.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onPickPhrase(p)}
              className="shrink-0 rounded-md bg-accent-soft px-3 py-2 text-sm font-medium text-tile-teal-fg"
            >
              {p.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mb-1 flex gap-1">
        {ACCENTS.map((k) => (
          <Key key={k} label={k} onClick={() => insert(k)} slim />
        ))}
      </div>
      <div className="mb-1 flex gap-1">
        {ROW1.map((k) => (
          <Key key={k} label={shift ? k.toUpperCase() : k} onClick={() => insert(k)} />
        ))}
      </div>
      <div className="mb-1 flex gap-1">
        {ROW2.map((k) => (
          <Key key={k} label={shift ? k.toUpperCase() : k} onClick={() => insert(k)} />
        ))}
      </div>
      <div className="mb-1 flex gap-1">
        <Key
          label="Maj"
          wide
          active={shift}
          onClick={() => setShift((s) => !s)}
        />
        {ROW3.map((k) => (
          <Key key={k} label={shift ? k.toUpperCase() : k} onClick={() => insert(k)} />
        ))}
        <Key label={<Delete className="size-5" />} wide onClick={backspace} />
      </div>
      <div className="flex gap-1">
        <Key label="Espace" extra onClick={space} />
      </div>
    </div>
  );
}

function Key({
  label,
  onClick,
  wide,
  extra,
  slim,
  active,
}: {
  label: ReactNode;
  onClick: () => void;
  wide?: boolean;
  extra?: boolean;
  slim?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "tile-press flex flex-1 items-center justify-center rounded-sm bg-surface-2 font-semibold text-ink shadow-[var(--shadow-tile)]",
        slim ? "h-9 text-sm" : "h-12 text-lg lg:h-14",
        wide && "max-w-20 flex-none basis-16",
        extra && "h-12 lg:h-14",
        active && "bg-accent text-accent-fg",
      )}
    >
      {label}
    </button>
  );
}
