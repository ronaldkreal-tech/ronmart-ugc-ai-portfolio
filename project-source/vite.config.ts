// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
// @ts-expect-error - plain JS module, no types
import { buildSourceZip } from "./scripts/build-source-zip.mjs";

function sourceZipPlugin() {
  let ran = false;
  const run = async () => {
    if (ran) return;
    ran = true;
    try {
      const r = await buildSourceZip();
      console.log(`[source-zip] ${r.path} (${(r.bytes / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.warn("[source-zip] failed:", e);
    }
  };
  return {
    name: "lovable-source-zip",
    buildStart: run,
    configureServer: run,
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [sourceZipPlugin()],
  },
});
