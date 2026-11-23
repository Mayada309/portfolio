import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// The site is fully pre-rendered, so pages are served from the static assets
// produced at build time (no R2/KV storage needed). Redeploy to update content.
const config = defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});

export default {
  ...config,
  // `npm run build` runs the OpenNext build (what Cloudflare's dashboard calls),
  // so OpenNext must call the plain Next.js build directly to avoid a loop.
  buildCommand: "npm run build:next",
};
