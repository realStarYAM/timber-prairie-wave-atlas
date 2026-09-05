import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  message: string;
  slots: [string, string, string];
  flip: boolean;
  onChange: (value: string) => void;
  onRecallSlot: (index: number) => void;
};

export function MessageBar({ message, slots, flip, onChange, onRecallSlot }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-2" aria-label="Messages récents">
        {slots.map((text, i) => (
          <button
            key={i}
            type="button"
            disabled={!text}
            onClick={() => text && onRecallSlot(i)}
            className={cn(
              "flex min-h-11 items-center justify-center rounded-lg px-2 text-center text-sm font-medium lg:min-h-12",
              text ? "bg-surface text-ink shadow-[var(--shadow-tile)]" : "bg-pred text-subtle",
            )}
          >
            <span className="line-clamp-1">{text}</span>
          </button>
        ))}
      </div>
      <section aria-label="Message">
        {flip ? (
          <div className="flex min-h-28 w-full items-end justify-end rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-tile)] lg:min-h-36">
            <p className="text-message leading-snug text-ink rotate-180">{message}</p>
          </div>
        ) : (
          <textarea
            ref={ref}
            value={message}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            enterKeyHint="done"
            autoComplete="off"
            autoCorrect="on"
            spellCheck
            className="min-h-28 w-full resize-none rounded-lg bg-surface px-4 py-3 text-message leading-snug text-ink shadow-[var(--shadow-tile)] outline-none lg:min-h-36"
            aria-label="Zone de texte. Appuyer pour ouvrir le clavier."
            suppressHydrationWarning
          />
        )}
      </section>
      {flip ? (
        <div className="rounded-lg bg-surface px-4 py-2.5 text-lg text-ink shadow-[var(--shadow-tile)]">
          {message}
        </div>
      ) : null}
    </div>
  );
}

export function focusMessageField() {
  const el = document.querySelector<HTMLTextAreaElement>('textarea[aria-label^="Zone de texte"]');
  el?.focus();
}
