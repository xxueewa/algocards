import { defineConfig } from 'astro/config';

// Update `site` with your GitHub username before deploying.
// If the repo is named `algocards`, keep `base` as-is.
// If you use a custom domain, remove `base` entirely.
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/algocards',
});
