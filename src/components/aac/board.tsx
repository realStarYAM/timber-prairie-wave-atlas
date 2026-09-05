import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ActionRail } from "./action-rail";
import { CategoryRail } from "./category-rail";
import { KeyboardOverlay } from "./keyboard";
import {
  AddPopover,
  FullscreenEditor,
  FullscreenHelp,
  NewCategoryDialog,
  NewPhraseDialog,
  SearchPhrases,
  SettingsMenu,
  UsersMenu,
} from "./menus";
import { MessageBar, focusMessageField } from "./message-bar";
import { EditCategoryDialog, EditPhraseDialog, HistoryPanel } from "./panels";
import { PartnerDisplay } from "./partner-display";
import { PhraseGrid } from "./phrase-grid";
import { playChime } from "@/lib/aac/chime";
import { useAacStore } from "@/lib/aac/store";
import type { Category, Phrase } from "@/lib/aac/types";
import { applyThemeToDocument } from "@/lib/theme/apply";
import { ThemeGallery } from "./theme-gallery";

export function Board() {
  const message = useAacStore((s) => s.message);
  const categories = useAacStore((s) => s.categories);
  const selectedCategoryId = useAacStore((s) => s.selectedCategoryId);
  const settings = useAacStore((s) => s.settings);
  const history = useAacStore((s) => s.history);
  const favoriteIds = useAacStore((s) => s.favoriteIds);
  const profiles = useAacStore((s) => s.profiles);
  const activeProfileId = useAacStore((s) => s.activeProfileId);
  const slots = useAacStore((s) => s.slots);
  const undoBuffer = useAacStore((s) => s.undoBuffer);
  const speaking = useAacStore((s) => s.speaking);
  const setMessage = useAacStore((s) => s.setMessage);
  const appendPhrase = useAacStore((s) => s.appendPhrase);
  const deleteLastWord = useAacStore((s) => s.deleteLastWord);
  const clearMessage = useAacStore((s) => s.clearMessage);
  const recallSlot = useAacStore((s) => s.recallSlot);
  const speakMessage = useAacStore((s) => s.speakMessage);
  const speakNow = useAacStore((s) => s.speakNow);
  const selectCategory = useAacStore((s) => s.selectCategory);
  const toggleFavorite = useAacStore((s) => s.toggleFavorite);
  const addPhrase = useAacStore((s) => s.addPhrase);
  const updatePhrase = useAacStore((s) => s.updatePhrase);
  const deletePhrase = useAacStore((s) => s.deletePhrase);
  const movePhrase = useAacStore((s) => s.movePhrase);
  const addCategory = useAacStore((s) => s.addCategory);
  const updateCategory = useAacStore((s) => s.updateCategory);
  const deleteCategory = useAacStore((s) => s.deleteCategory);
  const saveMessageAsPhrase = useAacStore((s) => s.saveMessageAsPhrase);
  const updateSettings = useAacStore((s) => s.updateSettings);
  const resetBoard = useAacStore((s) => s.resetBoard);
  const importBoard = useAacStore((s) => s.importBoard);
  const switchProfile = useAacStore((s) => s.switchProfile);
  const addProfile = useAacStore((s) => s.addProfile);
  const visiblePhrases = useAacStore((s) => s.visiblePhrases);
  const allPhrases = useAacStore((s) => s.allPhrases);

  const [keyboard, setKeyboard] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [flip, setFlip] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [themesOpen, setThemesOpen] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [newPhrase, setNewPhrase] = useState(false);
  const [newCategory, setNewCategory] = useState(false);
  const [saveCurrent, setSaveCurrent] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [fsEditor, setFsEditor] = useState(false);
  const [fsHelp, setFsHelp] = useState(false);
  const [reorder, setReorder] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editPhrase, setEditPhrase] = useState<Phrase | null>(null);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const originalRef = useRef<string | null>(null);

  const phrases = visiblePhrases();
  const bank = allPhrases();

  useEffect(() => {
    void useAacStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    applyThemeToDocument(settings);
  }, [settings]);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeToDocument(useAacStore.getState().settings);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setKeyboard(false);
        setShowMessage(false);
        setHistoryOpen(false);
        setSettingsOpen(false);
        setThemesOpen(false);
        setAddMenu(false);
        setNewPhrase(false);
        setNewCategory(false);
        setSaveCurrent(false);
        setSearchOpen(false);
        setUsersOpen(false);
        setFsEditor(false);
        setFsHelp(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function exportBoard() {
    const payload = { categories, settings, favoriteIds };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "clairvoix-tableau.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Tableau exporté");
  }

  async function handleImport(file: File) {
    try {
      const text = await file.text();
      const data = JSON.parse(text) as {
        categories?: Category[];
        settings?: typeof settings;
        favoriteIds?: string[];
      };
      importBoard(data);
      toast.success("Tableau importé");
    } catch {
      toast.error("Fichier illisible");
    }
  }

  async function shareMessage() {
    const text = message.trim();
    if (!text) {
      toast.error("Pas de texte entré.");
      return;
    }
    try {
      if (navigator.share) await navigator.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        toast.success("Message copié");
      }
    } catch {
      /* cancelled */
    }
  }

  async function translateMessage() {
    const text = message.trim();
    if (!text) {
      toast.error("Pas de texte entré.");
      return;
    }
    if (originalRef.current) {
      setMessage(originalRef.current);
      originalRef.current = null;
      toast.success("Texte original restauré");
      return;
    }
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 400))}&langpair=fr|en`;
      const res = await fetch(url);
      const data = (await res.json()) as { responseData?: { translatedText?: string } };
      const out = data.responseData?.translatedText?.trim();
      if (!out) throw new Error("empty");
      originalRef.current = text;
      setMessage(out);
      toast.success("Traduit en anglais — retoucher pour revenir");
    } catch {
      toast.error("Traduction indisponible");
    }
  }

  function openFullscreenEditor() {
    const seen = localStorage.getItem("clairvoix-fs-help");
    if (!seen) setFsHelp(true);
    else setFsEditor(true);
  }

  return (
    <div className="aac-board relative">
      <div className="aac-preds">
        <MessageBar
          message={message}
          slots={slots}
          flip={flip}
          onChange={setMessage}
          onRecallSlot={recallSlot}
        />
      </div>

      <div className="aac-phrases relative min-h-0">
        <PhraseGrid
          phrases={phrases}
          size={settings.buttonSize}
          longPressEdit={settings.longPressEdit}
          editMode={editMode}
          reorder={reorder}
          onSelect={appendPhrase}
          onEdit={setEditPhrase}
          onMove={movePhrase}
        />
        {reorder ? (
          <p className="pointer-events-none absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink/85 px-3 py-1 text-xs text-bg">
            Mode réorganisation — flèches sur les cases
          </p>
        ) : null}
        <KeyboardOverlay
          open={keyboard}
          message={message}
          phrases={bank}
          customKeys={settings.customKeys}
          onClose={() => setKeyboard(false)}
          onChange={setMessage}
          onSpeak={() => void speakMessage()}
          onPickPhrase={(p) => {
            appendPhrase(p);
            setKeyboard(false);
          }}
        />
      </div>

      <aside className="aac-sidebar">
        <ActionRail
          onClear={clearMessage}
          onSpeak={() => void speakMessage()}
          onDeleteWord={deleteLastWord}
          onFullscreen={() => setShowMessage(true)}
          onAdd={() => setAddMenu(true)}
          onSettings={() => setSettingsOpen(true)}
          onThemes={() => setThemesOpen(true)}
          onBell={playChime}
          onShare={() => void shareMessage()}
          onFlip={() => setFlip((v) => !v)}
          onKeyboard={() => {
            setKeyboard(false);
            focusMessageField();
          }}
          onUsers={() => setUsersOpen(true)}
          onReorder={() => setReorder((v) => !v)}
          onSearch={() => setSearchOpen(true)}
          onEditMode={() => setEditMode((v) => !v)}
          onHistory={() => setHistoryOpen(true)}
          onTranslate={() => void translateMessage()}
          onEditor={openFullscreenEditor}
          flip={flip}
          reorder={reorder}
          editMode={editMode}
          speaking={speaking}
          canUndo={!message && Boolean(undoBuffer)}
        />
        <CategoryRail
          categories={categories}
          selectedId={selectedCategoryId}
          onSelect={selectCategory}
          onEdit={setEditCategory}
          longPressEdit={settings.longPressEdit}
        />
      </aside>

      {settingsOpen ? (
        <SettingsMenu
          settings={settings}
          onChange={updateSettings}
          onClose={() => setSettingsOpen(false)}
          onReset={resetBoard}
          onExport={exportBoard}
          onImport={handleImport}
          onOpenThemes={() => setThemesOpen(true)}
        />
      ) : null}

      {themesOpen ? (
        <ThemeGallery
          settings={settings}
          onChange={updateSettings}
          onClose={() => setThemesOpen(false)}
        />
      ) : null}

      {addMenu ? (
        <AddPopover
          onClose={() => setAddMenu(false)}
          onNewPhrase={() => {
            setAddMenu(false);
            setNewPhrase(true);
          }}
          onSaveCurrent={() => {
            setAddMenu(false);
            if (!message.trim()) {
              toast.error("Pas de texte entré.");
              return;
            }
            setSaveCurrent(true);
          }}
          onNewCategory={() => {
            setAddMenu(false);
            setNewCategory(true);
          }}
        />
      ) : null}

      {newPhrase || saveCurrent ? (
        <NewPhraseDialog
          categories={categories}
          currentCategoryId={selectedCategoryId}
          initialLabel={saveCurrent ? message.trim() : undefined}
          onClose={() => {
            setNewPhrase(false);
            setSaveCurrent(false);
          }}
          onAdd={(catId, phrase, index) => addPhrase(catId, phrase, index)}
        />
      ) : null}

      {newCategory ? (
        <NewCategoryDialog
          categories={categories}
          onClose={() => setNewCategory(false)}
          onAdd={addCategory}
        />
      ) : null}

      {searchOpen ? (
        <SearchPhrases
          categories={categories}
          onClose={() => setSearchOpen(false)}
          onSpeak={(t) => void speakNow(t)}
          onEdit={(p) => {
            setSearchOpen(false);
            setEditPhrase(p);
          }}
          onPick={(p) => {
            appendPhrase(p);
            setSearchOpen(false);
          }}
        />
      ) : null}

      {usersOpen ? (
        <UsersMenu
          profiles={profiles}
          activeId={activeProfileId}
          onSelect={switchProfile}
          onAdd={addProfile}
          onClose={() => setUsersOpen(false)}
        />
      ) : null}

      {fsHelp ? (
        <FullscreenHelp
          onOk={() => {
            localStorage.setItem("clairvoix-fs-help", "1");
            setFsHelp(false);
            setFsEditor(true);
          }}
        />
      ) : null}

      {fsEditor ? (
        <FullscreenEditor
          text={message}
          onChange={setMessage}
          onClose={() => setFsEditor(false)}
          onSpeak={() => void speakMessage()}
          onClear={clearMessage}
          onDeleteWord={deleteLastWord}
          onSave={() => {
            if (!message.trim()) {
              toast.error("Pas de texte entré.");
              return;
            }
            setFsEditor(false);
            setSaveCurrent(true);
          }}
          onShare={() => void shareMessage()}
          onBell={playChime}
          onSettings={() => {
            setFsEditor(false);
            setSettingsOpen(true);
          }}
        />
      ) : null}

      {showMessage ? (
        <PartnerDisplay
          text={message}
          onSpeak={() => void speakMessage()}
          onBell={playChime}
          onClose={() => setShowMessage(false)}
        />
      ) : null}

      {historyOpen ? (
        <HistoryPanel
          items={history}
          onClose={() => setHistoryOpen(false)}
          onPick={(text) => {
            setMessage(text);
            setHistoryOpen(false);
          }}
          onClear={() => useAacStore.setState({ history: [] })}
        />
      ) : null}

      {editPhrase ? (
        <EditPhraseDialog
          phrase={editPhrase}
          categoryId={selectedCategoryId}
          categories={categories}
          favorite={favoriteIds.includes(editPhrase.id)}
          onToggleFavorite={() => toggleFavorite(editPhrase.id)}
          onClose={() => setEditPhrase(null)}
          onSave={(patch, moveTo) => {
            updatePhrase(editPhrase.id, patch);
            if (moveTo) {
              const source = categories.find((c) => c.phrases.some((p) => p.id === editPhrase.id));
              const phrase = { ...editPhrase, ...patch };
              if (source && source.id !== moveTo) {
                deletePhrase(editPhrase.id);
                addPhrase(moveTo, {
                  label: phrase.label,
                  speak: phrase.speak,
                  icon: phrase.icon,
                  color: phrase.color,
                  image: phrase.image,
                  audio: phrase.audio,
                });
              }
            }
            toast.success("Phrase enregistrée");
          }}
          onDelete={() => {
            deletePhrase(editPhrase.id);
            toast.success("Phrase supprimée");
          }}
        />
      ) : null}

      {editCategory ? (
        <EditCategoryDialog
          category={editCategory}
          onClose={() => setEditCategory(null)}
          onSave={(patch) => {
            updateCategory(editCategory.id, patch);
            toast.success("Catégorie enregistrée");
          }}
          onDelete={() => {
            deleteCategory(editCategory.id);
            toast.success("Catégorie supprimée");
          }}
        />
      ) : null}
    </div>
  );
}
