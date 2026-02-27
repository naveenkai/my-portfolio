# Build and Test

Run the full verification pipeline: lint, test, and build.

1. Run ESLint on `src/`:
   ```
   npx eslint src/
   ```
2. Run all tests (non-interactive):
   ```
   npm test -- --watchAll=false
   ```
3. Run the production build to verify compilation:
   ```
   npm run build
   ```

Report any errors found. If all pass, confirm everything is green.
