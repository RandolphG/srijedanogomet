export function getSessionStorage(key: string, defaultValue: boolean) {
  const value = sessionStorage.getItem(key);

  if (!value) {
    return defaultValue;
  }

  return JSON.parse(value);
}
