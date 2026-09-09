# Project Notes — Heaven Furniture Mart Landing Page (RACDOX Hackathon)

Cursor reads this file automatically for project context. It complements `.cursor/rules/` with the build plan and submission steps, which aren't ongoing code conventions.

## 5-day build order (real deadline: Sept 5, 2026 — see timezone note below)
- **Day 1:** source real photography (see the manual steps you were given) in parallel with the Day 1 kickoff prompt — repo + Tailwind/font/token setup, deploy an empty skeleton to Vercel. By end of day: photos organized in public/images/, project live.
- **Day 2:** build every section with real copy and images, zero animation. Redeploy — this is the safety-net version. If nothing else gets finished, this is what you submit.
- **Day 3:** layer in the full animation system from `.cursor/rules/020-animation-guardrails.mdc` — hero first, then scroll reveals, hover states, magnetic CTA, scroll progress, mobile menu.
- **Day 4:** combined mobile + accessibility + performance pass — rebuild sections for mobile specifically, run Lighthouse, fix alt text/focus states, verify reduced-motion.
- **Day 5:** morning — full QA against `.cursor/rules/030-qa-judge-checklist.mdc`, cross-browser/device check, bug fixes. Afternoon — record the demo, edit, post to Facebook with #racdox_hackathon, submit with real time to spare. Don't attempt this in the last hour.

## Deadline note
The hackathon page lists "September 5, 2026 · 11:59 PM BST," but the page's own live countdown appears to be counting down to roughly that clock time in your own (Bangladesh) timezone, not BST — those are about 5 hours apart. Don't rely on the BST label buying extra time past midnight. Treat end-of-day Sept 5 in Bangladesh time as the real cutoff.

## Demo recording & submission
Record from the live Vercel URL, not localhost. Show both desktop and mobile. Move at a deliberate pace: hero → bespoke → collections → showroom → final CTA, pausing briefly on the hero animation and one hover interaction. Keep it to roughly 60–90 seconds. Post to Facebook with **#racdox_hackathon**.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
