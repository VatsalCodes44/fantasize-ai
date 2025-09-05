// hooks/use-outside-click.tsx
import { useEffect } from "react";

type IgnoreTarget = string | HTMLElement | React.RefObject<HTMLElement>;

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  onOutside: () => void,
  options?: { ignore?: IgnoreTarget[] }
) {
  useEffect(() => {
    const ignores =
      options?.ignore ?? [
        // Radix portals & common content roots
        "[data-radix-portal]",
        "[data-radix-select-content]",
        "[data-radix-dropdown-menu-content]",
        "[data-radix-popover-content]",
        // Your explicit opt-out flag
        "[data-outside-ignore]",
      ];

    const isInIgnored = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false;

      for (const ig of ignores) {
        if (typeof ig === "string") {
          if (target.closest(ig)) return true;
        } else if ("current" in (ig as any)) {
          const el = (ig as React.RefObject<HTMLElement>).current;
          if (el && (el === target || el.contains(target))) return true;
        } else {
          const el = ig as HTMLElement;
          if (el && (el === target || el.contains(target))) return true;
        }
      }
      return false;
    };

    const listener = (e: MouseEvent | TouchEvent) => {
      const root = ref.current;
      if (!root) return;

      const target = e.target as Element | null;

      // Click is inside modal → ignore
      if (target && root.contains(target)) return;

      // Click is inside any ignored area (e.g., Radix portal / flagged node) → ignore
      if (isInIgnored(target)) return;

      onOutside();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, onOutside, options]);
}
