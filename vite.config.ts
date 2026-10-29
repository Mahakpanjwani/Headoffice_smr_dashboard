// @lovable.dev/vite-tanstack-config includes the TanStack Start, React, Tailwind,
// TypeScript path alias and Nitro plugins used by this project.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Pre-render the dashboard routes so GitHub Pages can serve them as static files.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
