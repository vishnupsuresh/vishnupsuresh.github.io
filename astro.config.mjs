// Astro config.
// `site` must be your real Pages URL: Astro uses it to build absolute links
// (sitemaps, social preview tags). Wrong value = broken preview links, not a broken site.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vishnupsuresh.github.io",
  // No `base` needed: a repo named vishnupsuresh.github.io is served from the domain root.
  // If you ever host this in a repo with another name, add base: "/repo-name".
});
