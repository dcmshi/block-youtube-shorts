// Keep in sync with DEFAULTS in content.js.
const DEFAULTS = { enabled: true, nav: true, shelves: true, feed: true, redirect: true };

chrome.storage.sync.get(DEFAULTS, (settings) => {
  for (const [key, value] of Object.entries(settings)) {
    const box = document.getElementById(key);
    box.checked = value;
    box.addEventListener("change", () => {
      chrome.storage.sync.set({ [key]: box.checked });
      if (key === "enabled") document.body.classList.toggle("off", !box.checked);
    });
  }
  document.body.classList.toggle("off", !settings.enabled);
});
