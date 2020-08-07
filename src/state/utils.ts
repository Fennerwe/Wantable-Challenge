export const saveState = (storageKey: string, state: object) => {
  window.localStorage.setItem(storageKey, JSON.stringify(state))
}

export function loadSavedState<T>(storageKey: string): T | undefined {
  const savedState = window.localStorage.getItem(storageKey)
  return savedState ? JSON.parse(savedState) : undefined
}
