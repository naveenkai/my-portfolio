# Commit, Push, and Create PR

Finalize current work: verify, commit, push, and optionally create a PR.

1. Run lint and tests first to make sure everything is clean:
   ```
   npx eslint src/
   npm test -- --watchAll=false
   npm run build
   ```
2. If everything passes, stage all changes and create a commit with a descriptive message.
3. Push to the current branch.
4. Ask the user if they want to create a PR. If yes, create one using `gh pr create`.
