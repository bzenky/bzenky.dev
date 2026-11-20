# Production validation
> 2026-11-20 — Astro production preview through Orca Chromium

Entry: `src/pages/index.astro` → `src/components/Welcome.astro` + `src/components/Terminal.astro`

Fixed:
- `src/components/Terminal.astro`: exact command trapped Tab; now completion only intercepts when input changes. Real Tab key advances to next control.
- `src/components/Terminal.astro`: 200% text at 320px overflowed (387px scroll width); wrapping prompt/input + locally scrollable ASCII art now fit 320px.
- `src/components/Welcome.astro`: links could receive focus while clipped by intro; response is inert during reveal. Skip link immediately restores content/interactivity.
- `src/layouts/Layout.astro`: analytics script now async, no longer blocks HTML parsing while downloading.
- `src/components/Terminal.astro`: suggestions have group semantics; mobile [enter] accessible name includes visible label.

Verified:
- Production build; strict TypeScript check of terminal script/imports; diff whitespace check; both suggestion unit tests.
- Widths 320, 390, 768, 1440 × Yotei, Midnight, Dawn: no page overflow, long-input block cursor stays inside input. Mobile controls >=44px high. Desktop controls intentionally retain terminal spacing.
- 200% text at 320px: no page overflow; ASCII art can scroll within its own bounds.
- axe-core 4.14.1 WCAG A/AA scan: zero violations and zero incomplete rules in each theme, including ls/theme/typo/file output on mobile. 404 scan also zero violations.
- Real Tab key leaves complete command; prefixes still complete. History/draft restoration, Ctrl+L handler, clickable files, corrections, full bio after clear, Easter eggs, literal input, and removed hiring command.
- Theme selection restores after reload; invalid saved values fall back; unavailable storage does not prevent switching.
- Actual reduced-motion emulation + reload: immediate visible content, zero animations, no waiting state.
- Actual animation lifecycle: output waits for typing, remains non-focusable during wipe, input appears last. Skip link skips waiting.
- Static HTML/source inspection: bio/contact/links present without scripts; intro hiding requires JavaScript. This is a source-level no-JS check, not a browser session with JS disabled.
- Production 404 renders and home link returns to /. No console entries on final home navigation.

Loading:
- First-party production HTML 10,936B / 3,657B gzip; CSS 4,893B / 1,289B gzip; JS 7,759B / 3,499B gzip (~8.4kB total gzip).
- External Google Fonts and analytics excluded from those sizes. Fonts use swap; system monospace fallback remains.
- Local cached navigation timings are diagnostic only; no throttled Lighthouse score, deployed network measurement, or Core Web Vitals certification.
- Requested startup sequence intentionally lasts ~2.5s; content is immediate with reduced motion or disabled JS.

Limits:
- Physical iOS/Android keyboard behavior, Safari/Firefox rendering, assistive-technology reading, and real mobile-network speed still need device checks.
- No deployment or commit performed during this validation.

Updated: 2026-11-20
