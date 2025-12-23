import { useRef } from "react";

export function useDebouncedCallback(callback, delay = 600) {
  const timer = useRef();

  return (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
