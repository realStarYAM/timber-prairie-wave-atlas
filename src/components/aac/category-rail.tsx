import { useRef } from "react";
import type { Category } from "@/lib/aac/types";
import { cn } from "@/lib/utils";

type Props = {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
  onEdit: (category: Category) => void;
  longPressEdit: boolean;
};

export function CategoryRail({
  categories,
  selectedId,
  onSelect,
  onEdit,
  longPressEdit,
}: Props) {
  return (
    <nav
      className="grid min-h-0 flex-1 grid-cols-2 content-start gap-2 overflow-y-auto max-lg:auto-cols-max max-lg:grid-flow-col max-lg:grid-rows-2 max-lg:overflow-x-auto lg:grid-flow-row"
      aria-label="Catégories"
    >
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          selected={category.id === selectedId}
          longPressEdit={longPressEdit && !category.virtual}
          onSelect={onSelect}
          onEdit={onEdit}
        />
      ))}
    </nav>
  );
}

function CategoryButton({
  category,
  selected,
  longPressEdit,
  onSelect,
  onEdit,
}: {
  category: Category;
  selected: boolean;
  longPressEdit: boolean;
  onSelect: (id: string) => void;
  onEdit: (category: Category) => void;
}) {
  const timer = useRef<number | null>(null);
  const fired = useRef(false);

  return (
    <button
      type="button"
      onPointerDown={() => {
        if (!longPressEdit) return;
        fired.current = false;
        timer.current = window.setTimeout(() => {
          fired.current = true;
          onEdit(category);
        }, 560);
      }}
      onPointerUp={() => {
        if (timer.current) window.clearTimeout(timer.current);
      }}
      onPointerLeave={() => {
        if (timer.current) window.clearTimeout(timer.current);
      }}
      onClick={() => {
        if (fired.current) return;
        onSelect(category.id);
      }}
      className={cn(
        "tile-press flex min-h-14 items-center justify-center rounded-lg px-2 text-center shadow-[var(--shadow-tile)] max-lg:min-w-28 lg:min-h-16",
        selected
          ? "bg-chrome-selected text-ink ring-2 ring-line-strong"
          : "bg-chrome text-ink",
      )}
    >
      <span className="text-cat font-medium leading-tight text-balance">{category.name}</span>
    </button>
  );
}
