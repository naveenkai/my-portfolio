# Deploy to GitHub Pages

Run the full deploy pipeline with verification.

1. Run lint and tests:
   ```
   npx eslint src/
   npm test -- --watchAll=false
   ```
2. Build and deploy:
   ```
   npm run deploy
   ```
3. Confirm deployment succeeded and remind the user to check https://naveenkai.com.
