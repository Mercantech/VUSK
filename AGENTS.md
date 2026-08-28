# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Prototype-specific design decisions

- Audience: Danish 7th–8th grade students learning CSS.
- Keep information density low: one selected game and one primary action at a time.
- Preserve the simple, linear terminal direction with phosphor green and amber accents.
- Use short, beginner-friendly Danish explanations and avoid unexplained technical jargon.
- AI-Lab is a three-lesson Teachable Machine course that shows one lesson at a time and avoids collecting faces, names, or other personal information.
