# Rito FeedEditor Workflow

Use this skill when working on the Rito FeedEditor app in `package/frontend`.

## Workflow

1. Read the repository `AGENTS.md` files first.
2. Prefer the existing React/Next.js patterns already used in the app.
3. Keep UI labels and copy aligned with project preferences:
   - use `反映` instead of `デプロイ`
   - keep locale prefixes explicit
   - keep the registered feeds list top-aligned
   - preserve the `rito.blue/ja` visual theme
4. Use `rtk` for all shell commands.
5. Run frontend verification after meaningful changes:
   - `rtk pnpm exec tsc --noEmit`
   - `rtk pnpm build` with elevated permissions
6. Reuse an existing local server when one is already running.
7. Store significant decisions, resolved errors, and completed work in ICM.

## Scope

- Feed builder UI
- Query generation and parsing
- Login and session-related frontend behavior
- Help text and user-facing copy
