import { useEffect } from "react";

export default function useClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (e: { target: any }) => {
      const el = ref?.current;
      if (!el || el.contains(e.target)) {
        return;
      }

      handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
