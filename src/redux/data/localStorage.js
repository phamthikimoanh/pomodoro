export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    console.log(serializedState);
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
export const saveLocalState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.log("Save Store error");
    return undefined;
  }
};
