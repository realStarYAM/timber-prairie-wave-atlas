import { useState } from "react";
import { ArrowLeft, Bell, FlipVertical2, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function PartnerDisplay({
  text,
  onClose,
  onSpeak,
  onBell,
}: {
  text: string;
  onClose: () => void;
  onSpeak: () => void;
  onBell: () => void;
}) {
  const [flipped, setFlipped] = useState(true);

  return (
    <div className="absolute inset-0 z-50 flex gap-3 bg-bg p-3">
      <div className="flex min-h-0 flex-1 items-end justify-center overflow-hidden rounded-xl bg-surface px-6 py-8">
        <p
          className={cn(
            "max-w-full text-pretty font-medium text-ink",
            flipped && "rotate-180",
          )}
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", lineHeight: 1.05 }}
        >
          {text || "…"}
        </p>
      </div>
      <div className="flex w-[5.75rem] shrink-0 flex-col gap-2">
        <SideBtn label="Sonnette" onClick={onBell} className="text-pos">
          <Bell className="size-9" />
        </SideBtn>
        <SideBtn label="Parler" onClick={onSpeak} className="text-info">
          <Volume2 className="size-9" strokeWidth={2.25} />
        </SideBtn>
        <SideBtn
          label="Retourner"
          onClick={() => setFlipped((v) => !v)}
          className="text-info"
        >
          <FlipVertical2 className="size-9" />
        </SideBtn>
        <SideBtn label="Retour" onClick={onClose} className="text-danger">
          <ArrowLeft className="size-9" strokeWidth={2.75} />
        </SideBtn>
      </div>
    </div>
  );
}

function SideBtn({
  children,
  onClick,
  label,
  className,
}: {
  children: React.ReactNode;
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
        "th-btn tile-press flex h-20 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)]",
        className,
      )}
    >
      {children}
    </button>
  );
}
