import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key) || "");
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};
