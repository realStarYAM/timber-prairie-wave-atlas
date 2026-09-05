import {
  ArrowDownUp,
  Bell,
  Delete,
  FlipVertical2,
  History,
  Keyboard,
  Languages,
  Palette,
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
  onThemes: () => void;
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
      ? { key: "undo", label: "Annuler", icon: RotateCcw, className: "tctx-v-danger", stroke: 2.5, onClick: props.onClear }
      : { key: "clear", label: "Effacer", icon: X, className: "tctx-v-danger", stroke: 3, onClick: props.onClear },
    props.speaking
      ? { key: "stop", label: "Arrêter", icon: Square, className: "tctx-v-info tctx-v-info-fill", stroke: 2.25, onClick: props.onSpeak }
      : { key: "speak", label: "Parler", icon: Volume2, className: "tctx-chrome", stroke: 2.25, onClick: props.onSpeak },
    { key: "delete", label: "Mot précédent", icon: Delete, className: "tctx-chrome", stroke: 2.25, onClick: props.onDeleteWord },
    { key: "fullscreen", label: "Afficher le message", icon: Scan, className: "tctx-chrome", stroke: 2.25, onClick: props.onFullscreen },
    { key: "add", label: "Ajouter", icon: Plus, className: "tctx-v-accent", stroke: 3, onClick: props.onAdd },
    { key: "themes", label: "Galerie des thèmes", icon: Palette, className: "tctx-v-accent", stroke: 2.25, onClick: props.onThemes },
    { key: "settings", label: "Réglages", icon: Settings, className: "tctx-chrome", stroke: 2.25, onClick: props.onSettings },
    { key: "bell", label: "Sonnette", icon: Bell, className: "tctx-v-pos", stroke: 2.25, onClick: props.onBell },
    { key: "share", label: "Partager", icon: Share, className: "tctx-v-pos", stroke: 2.25, onClick: props.onShare },
    {
      key: "flip",
      label: "Retourner",
      icon: FlipVertical2,
      className: props.flip ? "tctx-v-accent" : "tctx-v-info",
      stroke: 2.25,
      onClick: props.onFlip,
    },
    { key: "keyboard", label: "Clavier", icon: Keyboard, className: "tctx-v-info", stroke: 2.25, onClick: props.onKeyboard },
    { key: "users", label: "Utilisateurs", icon: Users, className: "tctx-v-info", stroke: 2.25, onClick: props.onUsers },
    {
      key: "reorder",
      label: "Réorganiser",
      icon: ArrowDownUp,
      className: props.reorder ? "tctx-v-accent" : "tctx-v-info",
      stroke: 2.25,
      onClick: props.onReorder,
    },
    { key: "search", label: "Rechercher", icon: Search, className: "tctx-chrome", stroke: 2.25, onClick: props.onSearch },
    {
      key: "edit",
      label: "Modifier",
      icon: PencilLine,
      className: props.editMode ? "tctx-v-accent" : "tctx-chrome",
      stroke: 2.25,
      onClick: props.onEditMode,
    },
    { key: "history", label: "Récents", icon: History, className: "tctx-chrome", stroke: 2.25, onClick: props.onHistory },
    { key: "translate", label: "Traduire", icon: Languages, className: "tctx-v-info", stroke: 2.25, onClick: props.onTranslate },
    { key: "editor", label: "Saisie plein écran", icon: Keyboard, className: "tctx-chrome", stroke: 2.25, onClick: props.onEditor },
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
            title={action.label}
            className={cn(
              "th-btn tile-press flex h-14 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)] lg:h-16",
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
