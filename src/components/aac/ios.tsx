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
        "absolute inset-0 z-50 flex bg-black/45 p-4",
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
        "mx-auto flex max-h-[min(90dvh,44rem)] w-full flex-col overflow-hidden rounded-xl bg-[#1c1c1e] text-white shadow-2xl",
        wide ? "max-w-3xl" : "max-w-md",
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "ios-title" : undefined}
    >
      {title ? (
        <h2 id="ios-title" className="shrink-0 px-4 py-3.5 text-center text-lg font-semibold">
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
        "flex w-full items-center gap-3 px-4 py-3.5 text-left text-[17px] text-white",
        !last && "border-b border-white/10",
      )}
    >
      {icon ? <span className="flex size-8 items-center justify-center text-[#0a84ff]">{icon}</span> : null}
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
    <div className={cn("flex items-center justify-between gap-3 px-4 py-3", !last && "border-b border-white/10")}>
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
        checked ? "bg-[#34c759]" : "bg-[#39393d]",
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
  return <div className="flex shrink-0 border-t border-white/15">{children}</div>;
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
        "flex-1 py-3.5 text-center text-[17px] font-medium",
        primary ? "text-[#0a84ff]" : "text-white",
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
      <div className="mx-auto w-full max-w-xs overflow-hidden rounded-xl bg-[#2c2c2e] text-center shadow-2xl">
        <p className="px-5 py-5 text-[17px] font-semibold text-white">{title}</p>
        <button
          type="button"
          onClick={onOk}
          className="w-full border-t border-white/15 py-3 text-[17px] font-medium text-[#0a84ff]"
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
      className="h-11 w-full rounded-md border-0 bg-[#2c2c2e] px-3 text-[17px] text-white outline-none placeholder:text-white/30"
    />
  );
}
