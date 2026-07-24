// ============================================================
// Camada simples sobre localStorage, com prefixo e JSON parse/stringify
// ============================================================
const Store = {
  prefix: 'bibliaApp:',
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(this.prefix + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Store.get falhou para', key, e);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Store.set falhou para', key, e);
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  }
};
