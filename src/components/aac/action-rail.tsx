import {
  ArrowDownUp,
  Bell,
  Delete,
  FlipVertical2,
  History,
  Keyboard,
  Languages,
  PencilLine,
  Plus,
  RotateCcw,
  Scan,
  Search,
  Settings,
  Share,
  Square,
  Users,
  Volume2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type ActionHandlers = {
  onClear: () => void;
  onSpeak: () => void;
  onDeleteWord: () => void;
  onFullscreen: () => void;
  onAdd: () => void;
  onSettings: () => void;
  onBell: () => void;
  onShare: () => void;
  onFlip: () => void;
  onKeyboard: () => void;
  onUsers: () => void;
  onReorder: () => void;
  onSearch: () => void;
  onEditMode: () => void;
  onHistory: () => void;
  onTranslate: () => void;
  onEditor: () => void;
  flip: boolean;
  reorder: boolean;
  editMode: boolean;
  speaking: boolean;
  canUndo: boolean;
};

export function ActionRail(props: ActionHandlers) {
  const actions = [
    props.canUndo
      ? { key: "undo", label: "Annuler", icon: RotateCcw, className: "text-danger", stroke: 2.5, onClick: props.onClear }
      : { key: "clear", label: "Effacer", icon: X, className: "text-danger", stroke: 3, onClick: props.onClear },
    props.speaking
      ? { key: "stop", label: "Arrêter", icon: Square, className: "text-[#1d4ed8] fill-[#1d4ed8]", stroke: 2.25, onClick: props.onSpeak }
      : { key: "speak", label: "Parler", icon: Volume2, className: "text-ink", stroke: 2.25, onClick: props.onSpeak },
    { key: "delete", label: "Mot précédent", icon: Delete, className: "text-ink", stroke: 2.25, onClick: props.onDeleteWord },
    { key: "fullscreen", label: "Afficher le message", icon: Scan, className: "text-ink", stroke: 2.25, onClick: props.onFullscreen },
    { key: "add", label: "Ajouter", icon: Plus, className: "text-accent", stroke: 3, onClick: props.onAdd },
    { key: "settings", label: "Réglages", icon: Settings, className: "text-muted", stroke: 2.25, onClick: props.onSettings },
    { key: "bell", label: "Sonnette", icon: Bell, className: "text-[#3f6f4e]", stroke: 2.25, onClick: props.onBell },
    { key: "share", label: "Partager", icon: Share, className: "text-[#3f6f4e]", stroke: 2.25, onClick: props.onShare },
    {
      key: "flip",
      label: "Retourner",
      icon: FlipVertical2,
      className: props.flip ? "text-accent" : "text-[#1d4ed8]",
      stroke: 2.25,
      onClick: props.onFlip,
    },
    { key: "keyboard", label: "Clavier", icon: Keyboard, className: "text-[#1d4ed8]", stroke: 2.25, onClick: props.onKeyboard },
    { key: "users", label: "Utilisateurs", icon: Users, className: "text-[#1d4ed8]", stroke: 2.25, onClick: props.onUsers },
    {
      key: "reorder",
      label: "Réorganiser",
      icon: ArrowDownUp,
      className: props.reorder ? "text-accent" : "text-[#1d4ed8]",
      stroke: 2.25,
      onClick: props.onReorder,
    },
    { key: "search", label: "Rechercher", icon: Search, className: "text-ink", stroke: 2.25, onClick: props.onSearch },
    {
      key: "edit",
      label: "Modifier",
      icon: PencilLine,
      className: props.editMode ? "text-accent" : "text-ink",
      stroke: 2.25,
      onClick: props.onEditMode,
    },
    { key: "history", label: "Récents", icon: History, className: "text-ink", stroke: 2.25, onClick: props.onHistory },
    { key: "translate", label: "Traduire", icon: Languages, className: "text-[#1d4ed8]", stroke: 2.25, onClick: props.onTranslate },
    { key: "editor", label: "Saisie plein écran", icon: Keyboard, className: "text-ink", stroke: 2.25, onClick: props.onEditor },
    { key: "settings2", label: "Réglages", icon: Settings, className: "text-muted", stroke: 2.25, onClick: props.onSettings },
  ];

  return (
    <nav
      className="grid h-[calc(3*3.5rem+2*0.5rem)] shrink-0 grid-cols-2 content-start gap-2 overflow-y-auto lg:h-[calc(3*4rem+2*0.5rem)]"
      aria-label="Actions"
    >
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.key}
            type="button"
            onClick={action.onClick}
            aria-label={action.label}
            className={cn(
              "tile-press flex h-14 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)] lg:h-16",
              action.className,
            )}
          >
            <Icon className="size-8 lg:size-9" strokeWidth={action.stroke} />
          </button>
        );
      })}
    </nav>
  );
}
