# Chrome Web Store listing

Copy these into the [Developer Dashboard](https://chrome.google.com/webstore/devconsole) when you create the item.

## Package

Upload `dist/shorts-blocker-<version>.zip` (build it with `./pack.sh`).

## Store listing tab

**Description**

```
YouTube's mobile app lets you see fewer Shorts, but youtube.com has no such setting. Shorts Blocker adds one.

What it hides:
• The Shorts entry in the sidebar and the Shorts tab on channel pages
• The Shorts shelves on the home page, search results, subscriptions and watch pages
• Single Shorts mixed in with regular videos

It also opens Shorts links in the regular video player, so a link a friend sends you still works, just without the endless scroll.

Every option can be turned on or off from the toolbar button. Works on www.youtube.com and m.youtube.com.

Private by design: no data collection, no analytics, no network requests. The only permission is storage, used to remember your settings.

Open source: https://github.com/dcmshi/block-youtube-shorts

Not affiliated with or endorsed by YouTube or Google.
```

**Category:** Productivity → Workflow & Planning (or Tools)

**Language:** English

**Graphic assets**

| Field | File |
| --- | --- |
| Store icon (128×128) | `icons/icon128.png` |
| Screenshot 1 (1280×800) | `store/screenshot-1-before-after.png` |
| Screenshot 2 (1280×800) | `store/screenshot-2-settings.png` |
| Small promo tile (440×280) | `store/promo-small-440x280.png` |

**Homepage URL:** https://github.com/dcmshi/block-youtube-shorts

**Support URL:** https://github.com/dcmshi/block-youtube-shorts/issues

## Privacy tab

**Single purpose description**

```
Hides YouTube Shorts from youtube.com and opens Shorts links in the regular video player.
```

**Permission justification: storage**

```
Saves the user's on/off choices for each blocking option so they persist between sessions and sync across the user's own browsers.
```

**Host permission justification (www.youtube.com, m.youtube.com)**

```
The content script must run on YouTube pages to hide Shorts elements and to redirect /shorts/ URLs to the regular /watch player. It runs on no other sites.
```

**Remote code:** No, I am not using remote code.

**Data usage:** check none of the data types. Then tick all three certifications (no selling data, no unrelated use, no creditworthiness use).

**Privacy policy URL:** https://github.com/dcmshi/block-youtube-shorts/blob/main/PRIVACY.md

## Distribution tab

**Visibility:** Public. **Regions:** All regions. **Pricing:** Free.
