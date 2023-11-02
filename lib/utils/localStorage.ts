export const setLocalStorageItem = <T>(key: string, value: T) => {
  window?.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = <T>(
  key: string,
  ms?: number
): T | undefined => {
  const value = window?.localStorage.getItem(key);

  if (value !== null) {
    return JSON.parse(value);
  }

  return undefined;
};
