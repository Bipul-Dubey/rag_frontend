import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(parsedValue);

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;
