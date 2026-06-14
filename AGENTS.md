# RitoFeedGen repository guide

This file applies to the whole repository.

- Prefix every shell command with `rtk`.
- Run Next.js builds with elevated permissions.
- Do not run `git add`, `git commit`, or `git push` unless the user explicitly asks.
- Reuse an existing local server when one is already running; do not start a second one without permission.
- Use ICM actively: recall before work when useful, and store significant decisions, resolved errors, and completed work.
- Use Serena when working inside this codebase for repository-oriented context, symbol navigation, and refactors when it is available.
- Keep the UI and copy aligned with project preferences: use `反映` instead of `デプロイ`, keep the registered feeds list top-aligned, and preserve the `rito.blue/ja` visual theme.
- Keep explicit locale prefixes in URLs.
- Do not mention or inspect `feedgenerator.usounds.work` anymore.

When working in `package/frontend`, also read `package/frontend/AGENTS.md`.

Project-specific skills live under `.codex/skills/` when present. Keep them short, task-oriented, and aligned with the repo workflow.
