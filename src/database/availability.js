function storageAvailable(type) {
  try {
      const storage = window[type],
            x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  } catch(e) {
      return e instanceof DOMException && (
          e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          storage.length !== 0;
  }
}

export default storageAvailable;
