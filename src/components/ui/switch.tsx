import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-line bg-secondary transition-colors data-[state=checked]:bg-accent data-[state=checked]:border-accent",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block size-6 translate-x-1 rounded-full bg-surface-2 shadow-sm transition-transform data-[state=checked]:translate-x-7 data-[state=checked]:bg-accent-fg" />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
