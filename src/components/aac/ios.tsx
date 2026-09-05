import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function IosScrim({
  children,
  onClose,
  align = "center",
  fit,
}: {
  children: ReactNode;
  onClose?: () => void;
  align?: "center" | "top" | "top-right";
  fit?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex bg-[var(--scrim)] p-4",
        align === "center" && "items-center justify-center",
        align === "top" && "items-start justify-center pt-[8vh]",
        align === "top-right" && "items-start justify-end pt-16 pr-20",
      )}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn("max-h-[min(90dvh,44rem)]", fit ? "w-auto" : "w-full")}
      >
        {children}
      </div>
    </div>
  );
}

export function IosSheet({
  title,
  children,
  footer,
  wide,
  className,
}: {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "th-panel mx-auto flex max-h-[min(90dvh,44rem)] w-full flex-col overflow-hidden rounded-xl border border-line bg-surface text-ink shadow-[var(--shadow-bar)]",
        wide ? "max-w-3xl" : "max-w-md",
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "ios-title" : undefined}
    >
      {title ? (
        <h2 id="ios-title" className="shrink-0 border-b border-line px-4 py-3.5 text-center text-lg font-bold">
          {title}
        </h2>
      ) : null}
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      {footer}
    </div>
  );
}

export function IosRow({
  icon,
  label,
  onClick,
  last,
}: {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "th-btn flex w-full items-center gap-3 px-4 py-3.5 text-left text-[17px] text-ink hover:bg-surface-2",
        !last && "border-b border-line",
      )}
    >
      {icon ? <span className="flex size-8 items-center justify-center text-accent">{icon}</span> : null}
      <span className="flex-1">{label}</span>
    </button>
  );
}

export function IosToggleRow({
  label,
  checked,
  onChange,
  last,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  last?: boolean;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3 px-4 py-3", !last && "border-b border-line")}>
      <span className="text-[17px]">{label}</span>
      <IosSwitch checked={checked} onChange={onChange} />
    </div>
  );
}

export function IosSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors",
        checked ? "bg-pos" : "bg-line-strong",
      )}
    >
      <span
        className={cn(
          "absolute top-[2px] left-[2px] size-[27px] rounded-full bg-white shadow transition-transform",
          checked && "translate-x-[20px]",
        )}
      />
    </button>
  );
}

export function IosFooter({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex shrink-0 border-t border-line">{children}</div>;
}

export function IosFooterBtn({
  children,
  onClick,
  primary,
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "th-btn flex-1 py-3.5 text-center text-[17px] font-semibold",
        primary ? "text-accent" : "text-ink",
        "disabled:opacity-40",
      )}
    >
      {children}
    </button>
  );
}

export function IosAlert({
  title,
  onOk,
}: {
  title: string;
  onOk: () => void;
}) {
  return (
    <IosScrim>
      <div className="th-panel mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-line bg-surface text-center shadow-[var(--shadow-bar)]">
        <p className="px-5 py-5 text-[17px] font-semibold text-ink">{title}</p>
        <button
          type="button"
          onClick={onOk}
          className="th-btn w-full border-t border-line py-3 text-[17px] font-bold text-accent"
        >
          Ok
        </button>
      </div>
    </IosScrim>
  );
}

export function IosInput({
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className="th-field h-11 w-full rounded-md border border-line bg-surface-2 px-3 text-[17px] text-ink outline-none placeholder:text-subtle"
    />
  );
}
