// Keep in sync with DEFAULTS in popup.js.
const DEFAULTS = { enabled: true, nav: true, shelves: true, feed: true, playables: true, redirect: true };
const root = document.documentElement;
let settings = DEFAULTS;

function apply(next) {
  settings = next;
  for (const key of ["nav", "shelves", "feed", "playables"]) {
    root.toggleAttribute(`data-sb-${key}`, settings.enabled && settings[key]);
  }
  redirectIfShort();
}

// /shorts/<id> -> /watch?v=<id>, so a Shorts link opens in the normal player.
function redirectIfShort() {
  if (!settings.enabled || !settings.redirect) return;
  const match = location.pathname.match(/^\/shorts\/([\w-]+)/);
  if (match) location.replace(`/watch?v=${match[1]}${location.hash}`);
}

// Apply defaults right away so nothing flashes before storage loads.
apply(DEFAULTS);
chrome.storage.sync.get(DEFAULTS, apply);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "sync") return;
  const next = { ...settings };
  for (const [key, { newValue }] of Object.entries(changes)) next[key] = newValue ?? DEFAULTS[key];
  apply(next);
});

// YouTube is a single-page app, so catch its in-app navigations too.
for (const event of ["yt-navigate-start", "yt-navigate-finish", "state-navigateend", "popstate"]) {
  window.addEventListener(event, redirectIfShort, true);
  document.addEventListener(event, redirectIfShort, true);
}
