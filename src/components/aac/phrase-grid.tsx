import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef } from "react";
import { tileClass } from "@/lib/aac/tile-styles";
import type { ButtonSize, Phrase } from "@/lib/aac/types";
import { cn } from "@/lib/utils";

type Props = {
  phrases: Phrase[];
  size: ButtonSize;
  longPressEdit: boolean;
  editMode: boolean;
  reorder: boolean;
  onSelect: (phrase: Phrase) => void;
  onEdit: (phrase: Phrase) => void;
  onMove: (phraseId: string, dir: -1 | 1) => void;
};

export function PhraseGrid({
  phrases,
  size,
  longPressEdit,
  editMode,
  reorder,
  onSelect,
  onEdit,
  onMove,
}: Props) {
  const cols = size === "compact" ? 6 : size === "large" ? 4 : 5;
  const minCells = cols * 6;
  const cells: Array<Phrase | null> = [...phrases];
  while (cells.length < minCells) cells.push(null);

  return (
    <div
      className={cn(
        "grid h-full min-h-0 gap-2 overflow-y-auto lg:overflow-hidden",
        size === "compact" && "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
        size === "comfortable" && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
        size === "large" && "grid-cols-2 lg:grid-cols-4",
      )}
      style={{ gridAutoRows: "minmax(4.75rem, 1fr)" }}
    >
      {cells.map((phrase, i) =>
        phrase ? (
          <PhraseTile
            key={phrase.id}
            phrase={phrase}
            longPressEdit={longPressEdit}
            editMode={editMode}
            reorder={reorder}
            onSelect={onSelect}
            onEdit={onEdit}
            onMove={onMove}
          />
        ) : (
          <div
            key={`empty-${i}`}
            className="hidden rounded-lg bg-surface shadow-[var(--shadow-tile)] lg:block"
            aria-hidden
          />
        ),
      )}
    </div>
  );
}

function PhraseTile({
  phrase,
  longPressEdit,
  editMode,
  reorder,
  onSelect,
  onEdit,
  onMove,
}: {
  phrase: Phrase;
  longPressEdit: boolean;
  editMode: boolean;
  reorder: boolean;
  onSelect: (phrase: Phrase) => void;
  onEdit: (phrase: Phrase) => void;
  onMove: (phraseId: string, dir: -1 | 1) => void;
}) {
  const timer = useRef<number | null>(null);
  const fired = useRef(false);

  function clearTimer() {
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  return (
    <div className="relative h-full">
      <button
        type="button"
        onPointerDown={() => {
          if (!longPressEdit || editMode || reorder) return;
          fired.current = false;
          timer.current = window.setTimeout(() => {
            fired.current = true;
            onEdit(phrase);
          }, 560);
        }}
        onPointerUp={clearTimer}
        onPointerLeave={clearTimer}
        onPointerCancel={clearTimer}
        onClick={() => {
          if (fired.current) return;
          if (editMode) onEdit(phrase);
          else if (!reorder) onSelect(phrase);
        }}
        className={cn(
          "tile-press flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg px-2.5 py-2 text-center shadow-[var(--shadow-tile)]",
          phrase.color ? tileClass(phrase.color) : "bg-surface text-ink",
        )}
      >
        {phrase.image ? (
          <img src={phrase.image} alt="" className="mb-1 max-h-10 max-w-10 rounded object-cover" />
        ) : null}
        <span className="text-tile font-medium leading-snug text-balance">{phrase.label}</span>
      </button>
      {reorder ? (
        <div className="absolute top-1 right-1 flex flex-col gap-0.5">
          <button
            type="button"
            aria-label="Monter"
            onClick={() => onMove(phrase.id, -1)}
            className="rounded bg-black/50 p-0.5 text-white"
          >
            <ChevronUp className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Descendre"
            onClick={() => onMove(phrase.id, 1)}
            className="rounded bg-black/50 p-0.5 text-white"
          >
            <ChevronDown className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
