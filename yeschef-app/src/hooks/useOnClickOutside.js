import { useEffect, useCallback } from "react";

function useOnClickOutside(enabled, ref, handler) {
  const handleClick = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    },
    [handler, ref]
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);
    }

    return () => {
      if (enabled) {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
      }
    };
  }, [enabled, handleClick]);
}

export default useOnClickOutside;
