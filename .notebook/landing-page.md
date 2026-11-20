# Landing page
> Static Astro page with an optional browser-side terminal

Entry: `src/pages/index.astro` → `src/components/Welcome.astro`
- Visual direction: plain left-aligned terminal transcript; consistent text size; no window frame, portfolio heading, or decorative chrome.
- Bio, social links, contact: server-rendered; available without JavaScript.
- `src/components/Welcome.astro`: every reload types `me --help` for 1s, pauses 120ms, then reveals response top-to-bottom over 1.4s; next prompt appears last. `animationend` sequences phases, cancellation/4s fallback reveals everything. Visibility/clip reserve layout space; response is inert during the wipe; Skip to content ends the intro immediately. Without JS or with reduced motion, all content appears immediately.
- `src/components/Terminal.astro`: hidden until script initialization; local command replies only, no shell execution. Output uses DOM text nodes; history capped at 50, output at 20 entries. `clear` hides the opening transcript as well as clearing dynamic output. Arrow history, Tab completion, touch command buttons.
- Hidden commands in `src/components/Terminal.astro:run()`: `cd ..`, `rm -rf /` (text replies), `cat yotei` (accessible ASCII mountain using theme variables). Omitted from help, suggestions, and completion.
- `ls` lists clickable `about.txt`, `links.sh`, `yotei.conf` buttons, derived from fileCommands; labels explain Read/Run, titles show commands, flex wrapping and 44px touch targets support mobile. Clicks run the matching command and return input focus; `cat about.txt`, `./links.sh`, `cat yotei.conf` resolve to existing about/links/Yotei output. `ping bruno` replies “pong 🇧🇷”. These commands stay out of help and completion.
- `history`: up to 50 session commands, numbered continuously even after eviction; includes `history` itself. `clear` and input-focused Ctrl+L share `clearTerminal()`; Ctrl+L preserves draft/history without adding a command.
- Full bio lives in `src/data/bio.ts`, rendered by Welcome and returned by `cat about.txt`; `about` remains a brief summary.
- `src/lib/command-suggestions.ts:suggestCommand()`: unique nearest public command within 1 edit for short inputs or 2 for longer ones; no guesses for tiny/oversized/ambiguous input. Unknown replies offer clickable suggestions, using text nodes. Tests: `node --experimental-strip-types --test tests/command-suggestions.test.mjs`.
- Cursor/focus in `src/components/Terminal.astro`: blinking block overlay measured from text before selection; syncs after edits, selection, scrolling, font load, and resize. Page clicks focus CLI except interactive controls or active text selections. Reduced motion disables blinking globally.
- `src/layouts/Layout.astro`: Yotei/Midnight/Dawn CSS variables; inline head script restores validated `yotei-theme` storage before paint. Light scheme, selection, cursor, and browser theme-color follow Dawn. Storage errors fall back safely. Analytics loads asynchronously.
- `src/components/Terminal.astro:setTheme()`: persists variant, updates theme-color and picker pressed states. `theme` lists clickable choices; `theme yotei|midnight|dawn` switches directly; Tab completes variant arguments and allows focus to leave an already complete command.
- Global reduced-motion override and loaded JetBrains Mono: `src/layouts/Layout.astro`.
- Palette source: https://github.com/bzenky/yotei/blob/master/kitty/yotei.conf; theme linked by the `yotei` command, all three Kitty palettes; license at `public/licenses/yotei.txt`.
- `src/components/CliPrefix.astro`: reusable prompt; class selectors permit multiple instances. Also used by `src/pages/404.astro`.
- `npm run build`: production build. `npm run dev -- --host 0.0.0.0`: local preview. `pnpm` unavailable in the current session; dependencies already installed.

Updated: 2026-11-20

Dev gotcha: building while Astro dev runs can leave its global stylesheet cache stale. Restart the existing preview server after building if served CSS differs from source.
