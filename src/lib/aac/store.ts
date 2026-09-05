import { create } from "zustand";
import { persist } from "zustand/middleware";
import { playAudio } from "./chime";
import { allDefaultCategories } from "./default-board";
import { speakText, stopSpeech } from "./speech";
import {
  DEFAULT_PROFILE,
  DEFAULT_SETTINGS,
  type Category,
  type HistoryItem,
  type Phrase,
  type Profile,
  type Settings,
  type TileColor,
} from "./types";

export type BoardSnapshot = {
  categories: Category[];
  selectedCategoryId: string;
  settings: Settings;
  history: HistoryItem[];
  favoriteIds: string[];
  message: string;
  slots: [string, string, string];
};

export type AacState = {
  message: string;
  slots: [string, string, string];
  undoBuffer: string | null;
  speaking: boolean;
  categories: Category[];
  selectedCategoryId: string;
  settings: Settings;
  history: HistoryItem[];
  favoriteIds: string[];
  profiles: Profile[];
  activeProfileId: string;
  profileBoards: Record<string, BoardSnapshot>;
  setMessage: (value: string) => void;
  appendText: (text: string) => void;
  appendPhrase: (phrase: Phrase) => void;
  deleteLastWord: () => void;
  clearMessage: () => void;
  undoClear: () => void;
  recallSlot: (index: number) => void;
  speakMessage: () => Promise<void>;
  speakNow: (text: string) => Promise<void>;
  stopSpeaking: () => void;
  selectCategory: (id: string) => void;
  toggleFavorite: (id: string) => void;
  addPhrase: (categoryId: string, phrase: Omit<Phrase, "id">, index?: number) => void;
  updatePhrase: (phraseId: string, patch: Partial<Phrase>) => void;
  deletePhrase: (phraseId: string) => void;
  movePhrase: (phraseId: string, dir: -1 | 1) => void;
  addCategory: (name: string, color: TileColor, icon: string, index?: number) => void;
  updateCategory: (id: string, patch: Partial<Pick<Category, "name" | "color" | "icon" | "image">>) => void;
  deleteCategory: (id: string) => void;
  moveCategory: (id: string, dir: -1 | 1) => void;
  saveMessageAsPhrase: (categoryId: string, index?: number) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  resetBoard: () => void;
  importBoard: (data: { categories?: Category[]; settings?: Settings; favoriteIds?: string[] }) => void;
  switchProfile: (id: string) => void;
  addProfile: (name: string) => void;
  renameProfile: (id: string, name: string) => void;
  deleteProfile: (id: string) => void;
  visiblePhrases: () => Phrase[];
  allPhrases: () => Phrase[];
};

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function findPhrase(categories: Category[], id: string): Phrase | undefined {
  for (const cat of categories) {
    const hit = cat.phrases.find((p) => p.id === id);
    if (hit) return hit;
  }
  return undefined;
}

function snapshotOf(s: Pick<AacState, keyof BoardSnapshot>): BoardSnapshot {
  return {
    categories: s.categories,
    selectedCategoryId: s.selectedCategoryId,
    settings: s.settings,
    history: s.history,
    favoriteIds: s.favoriteIds,
    message: s.message,
    slots: s.slots,
  };
}

function defaultBoard(): BoardSnapshot {
  return {
    categories: allDefaultCategories(),
    selectedCategoryId: "cat-conversation",
    settings: DEFAULT_SETTINGS,
    history: [],
    favoriteIds: [],
    message: "",
    slots: ["", "", ""],
  };
}

function pushSlot(slots: [string, string, string], text: string): [string, string, string] {
  const t = text.trim();
  if (!t) return slots;
  const next: [string, string, string] = [...slots];
  const lastFilled = [...next].reverse().find((s) => s);
  if (lastFilled === t) return next;
  const empty = next.findIndex((s) => !s);
  if (empty >= 0) {
    next[empty] = t;
  } else {
    next[0] = next[1];
    next[1] = next[2];
    next[2] = t;
  }
  return next;
}

function remember(text: string, history: HistoryItem[]): HistoryItem[] {
  const t = text.trim();
  if (!t) return history;
  return [{ id: uid("h"), text: t, at: Date.now() }, ...history.filter((h) => h.text !== t)].slice(0, 40);
}

let speakGen = 0;

export const useAacStore = create<AacState>()(
  persist(
    (set, get) => ({
      ...defaultBoard(),
      undoBuffer: null,
      speaking: false,
      profiles: [DEFAULT_PROFILE],
      activeProfileId: DEFAULT_PROFILE.id,
      profileBoards: {},

      setMessage: (value) => set({ message: value, undoBuffer: null }),

      appendText: (text) => {
        set({ message: get().message + text, undoBuffer: null });
      },

      appendPhrase: (phrase) => {
        const spoken = (phrase.speak ?? phrase.label).trim();
        if (!spoken) return;
        const settings = get().settings;
        stopSpeech();
        speakGen += 1;
        const gen = speakGen;

        if (settings.speakOnTap) {
          set({ message: spoken, speaking: true, undoBuffer: null });
          void (async () => {
            if (phrase.audio) await playAudio(phrase.audio);
            else await speakText(spoken, get().settings);
            if (gen !== speakGen) return;
            const state = get();
            set({
              speaking: false,
              message: "",
              slots: pushSlot(state.slots, spoken),
              history: remember(spoken, state.history),
            });
          })();
          return;
        }

        const current = get().message.trim();
        set({ message: current ? `${current} ${spoken}` : spoken, undoBuffer: null });
      },

      deleteLastWord: () => {
        const parts = get().message.trimEnd().split(/\s+/);
        parts.pop();
        set({ message: parts.join(" ") });
        stopSpeech();
        speakGen += 1;
        set({ speaking: false });
      },

      clearMessage: () => {
        const current = get().message;
        if (!current) {
          get().undoClear();
          return;
        }
        set({ message: "", undoBuffer: current });
        stopSpeech();
        speakGen += 1;
        set({ speaking: false });
      },

      undoClear: () => {
        const prev = get().undoBuffer;
        if (prev == null) return;
        set({ message: prev, undoBuffer: null });
      },

      recallSlot: (index) => {
        const text = get().slots[index];
        if (!text) return;
        set({ message: text, undoBuffer: null });
      },

      speakMessage: async () => {
        if (get().speaking) {
          stopSpeech();
          speakGen += 1;
          set({ speaking: false });
          return;
        }
        const text = get().message.trim();
        if (!text) return;
        const gen = ++speakGen;
        set({ speaking: true });
        await speakText(text, get().settings);
        if (gen !== speakGen) return;
        const state = get();
        const clear = state.settings.clearAfterSpeak;
        set({
          speaking: false,
          slots: pushSlot(state.slots, text),
          history: remember(text, state.history),
          message: clear ? "" : state.message,
          undoBuffer: clear ? text : null,
        });
      },

      speakNow: async (text) => {
        await speakText(text, get().settings);
      },

      stopSpeaking: () => {
        stopSpeech();
        speakGen += 1;
        set({ speaking: false });
      },

      selectCategory: (id) => set({ selectedCategoryId: id }),

      toggleFavorite: (id) => {
        const ids = get().favoriteIds;
        set({
          favoriteIds: ids.includes(id) ? ids.filter((x) => x !== id) : [id, ...ids],
        });
      },

      addPhrase: (categoryId, phrase, index) => {
        set({
          categories: get().categories.map((c) => {
            if (c.id !== categoryId || c.virtual) return c;
            const next = [...c.phrases];
            const item = { ...phrase, id: uid("p") };
            if (index == null || index >= next.length) next.push(item);
            else next.splice(Math.max(0, index), 0, item);
            return { ...c, phrases: next };
          }),
        });
      },

      updatePhrase: (phraseId, patch) => {
        set({
          categories: get().categories.map((c) => ({
            ...c,
            phrases: c.phrases.map((p) => (p.id === phraseId ? { ...p, ...patch } : p)),
          })),
        });
      },

      deletePhrase: (phraseId) => {
        set({
          categories: get().categories.map((c) => ({
            ...c,
            phrases: c.phrases.filter((p) => p.id !== phraseId),
          })),
          favoriteIds: get().favoriteIds.filter((id) => id !== phraseId),
        });
      },

      movePhrase: (phraseId, dir) => {
        set({
          categories: get().categories.map((c) => {
            const i = c.phrases.findIndex((p) => p.id === phraseId);
            if (i < 0) return c;
            const j = i + dir;
            if (j < 0 || j >= c.phrases.length) return c;
            const next = [...c.phrases];
            const [item] = next.splice(i, 1);
            next.splice(j, 0, item);
            return { ...c, phrases: next };
          }),
        });
      },

      addCategory: (name, color, icon, index) => {
        const cat: Category = { id: uid("cat"), name, color, icon, phrases: [] };
        const cats = [...get().categories];
        const virtuals = cats.filter((c) => c.virtual);
        const real = cats.filter((c) => !c.virtual);
        if (index == null || index >= real.length) real.push(cat);
        else real.splice(Math.max(0, index), 0, cat);
        set({ categories: [...real, ...virtuals], selectedCategoryId: cat.id });
      },

      updateCategory: (id, patch) => {
        set({
          categories: get().categories.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        });
      },

      deleteCategory: (id) => {
        const cats = get().categories.filter((c) => c.id !== id);
        const selected =
          get().selectedCategoryId === id ? (cats[0]?.id ?? "cat-conversation") : get().selectedCategoryId;
        set({ categories: cats, selectedCategoryId: selected });
      },

      moveCategory: (id, dir) => {
        const cats = [...get().categories];
        const real = cats.filter((c) => !c.virtual);
        const virtuals = cats.filter((c) => c.virtual);
        const i = real.findIndex((c) => c.id === id);
        if (i < 0) return;
        const j = i + dir;
        if (j < 0 || j >= real.length) return;
        const [item] = real.splice(i, 1);
        real.splice(j, 0, item);
        set({ categories: [...real, ...virtuals] });
      },

      saveMessageAsPhrase: (categoryId, index) => {
        const text = get().message.trim();
        if (!text) return;
        get().addPhrase(categoryId, { label: text }, index);
      },

      updateSettings: (patch) => {
        set({ settings: { ...get().settings, ...patch } });
      },

      resetBoard: () => {
        set({
          categories: allDefaultCategories(),
          selectedCategoryId: "cat-conversation",
          favoriteIds: [],
          history: [],
          message: "",
          slots: ["", "", ""],
        });
      },

      importBoard: (data) => {
        set({
          categories: data.categories ?? get().categories,
          settings: { ...get().settings, ...data.settings },
          favoriteIds: data.favoriteIds ?? get().favoriteIds,
        });
      },

      switchProfile: (id) => {
        const state = get();
        if (id === state.activeProfileId) return;
        const current = snapshotOf(state);
        const stored = state.profileBoards[id] ?? defaultBoard();
        set({
          profileBoards: { ...state.profileBoards, [state.activeProfileId]: current },
          activeProfileId: id,
          undoBuffer: null,
          speaking: false,
          ...stored,
          slots: stored.slots ?? ["", "", ""],
        });
      },

      addProfile: (name) => {
        const state = get();
        const profile: Profile = { id: uid("user"), name };
        const current = snapshotOf(state);
        const fresh = defaultBoard();
        set({
          profiles: [...state.profiles, profile],
          profileBoards: { ...state.profileBoards, [state.activeProfileId]: current },
          activeProfileId: profile.id,
          undoBuffer: null,
          speaking: false,
          ...fresh,
        });
      },

      renameProfile: (id, name) => {
        set({
          profiles: get().profiles.map((p) => (p.id === id ? { ...p, name } : p)),
        });
      },

      deleteProfile: (id) => {
        const state = get();
        if (state.profiles.length <= 1) return;
        const profiles = state.profiles.filter((p) => p.id !== id);
        const boards = { ...state.profileBoards };
        delete boards[id];
        if (state.activeProfileId === id) {
          const next = profiles[0]!;
          const stored = boards[next.id] ?? defaultBoard();
          set({
            profiles,
            profileBoards: boards,
            activeProfileId: next.id,
            undoBuffer: null,
            speaking: false,
            ...stored,
            slots: stored.slots ?? ["", "", ""],
          });
        } else {
          set({ profiles, profileBoards: boards });
        }
      },

      visiblePhrases: () => {
        const { categories, selectedCategoryId, favoriteIds, history } = get();
        const selected = categories.find((c) => c.id === selectedCategoryId);
        if (!selected) return [];
        if (selected.virtual === "favoris") {
          return favoriteIds
            .map((id) => findPhrase(categories, id))
            .filter((p): p is Phrase => Boolean(p));
        }
        if (selected.virtual === "recents") {
          const seen = new Set<string>();
          const out: Phrase[] = [];
          for (const item of history) {
            if (seen.has(item.text)) continue;
            seen.add(item.text);
            const existing = categories.flatMap((c) => c.phrases).find((p) => (p.speak ?? p.label) === item.text);
            out.push(
              existing ?? {
                id: `hist-${item.id}`,
                label: item.text,
                icon: "History",
              },
            );
            if (out.length >= 24) break;
          }
          return out;
        }
        return selected.phrases;
      },

      allPhrases: () => get().categories.flatMap((c) => c.phrases),
    }),
    {
      name: "clairvoix-board-v4",
      version: 4,
      skipHydration: true,
      partialize: (state) => ({
        message: state.message,
        slots: state.slots,
        categories: state.categories,
        selectedCategoryId: state.selectedCategoryId,
        settings: state.settings,
        history: state.history,
        favoriteIds: state.favoriteIds,
        profiles: state.profiles,
        activeProfileId: state.activeProfileId,
        profileBoards: state.profileBoards,
      }),
    },
  ),
);
