# Verification Workflow

Use this skill when frontend or app-shell changes need validation.

## Default checks

1. Run TypeScript first:
   - `rtk pnpm exec tsc --noEmit`
2. Run the Next.js production build with elevated permissions:
   - `rtk pnpm build`
3. If a browser check is needed, reuse an existing local server instead of starting a new one.
4. If the change resolved a bug or locked in a decision, store it in ICM.

## Notes

- Keep verification focused on the changed surface.
- Do not skip the build for UI or routing changes.
- Prefer concrete checks over narrative confirmation.
