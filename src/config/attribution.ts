// Remembers the UTM tags a visitor first arrived with (e.g. from a LinkedIn post), so a booking made
// a few pages later is still credited to that campaign. Stored per browser tab only.
const KEY = "entacrest_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export const captureAttribution = () => {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v.slice(0, 100);
    });
    if (Object.keys(found).length) sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    // Storage can be unavailable (private mode); tracking is best-effort.
  }
};

export const getAttribution = (): Attribution => {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
};
