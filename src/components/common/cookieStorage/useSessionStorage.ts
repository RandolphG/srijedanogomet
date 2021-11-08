import { useEffect, useState } from "react";
import { getSessionStorage } from "./utils";

export function useSessionStorage(key: string, defaultValue: boolean) {
  const [value, setValue] = useState(getSessionStorage(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
