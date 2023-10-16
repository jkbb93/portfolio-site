function manageLocalStorage(key) {
  const getStoredValue = () => {
    try {
      const rawItem = localStorage.getItem(key);
      const retrievedValue = JSON.parse(rawItem);

      return retrievedValue;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateStoredValue = (newValue) => {
    try {
      const stringifiedValue = JSON.stringify(newValue);
      localStorage.setItem(key, stringifiedValue);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const clearStoredValue = () => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return { getStoredValue, updateStoredValue, clearStoredValue };
}

export default manageLocalStorage;
