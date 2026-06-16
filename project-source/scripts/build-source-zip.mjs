// Builds public/project-source.zip containing the project's source files.
// Runs at dev start and before build via vite plugin hook (and standalone).
import { readdir, readFile, stat, writeFile, mkdir } from "node:fs/promises";
import { join, relative } from "node:path";
import JSZip from "jszip";

const ROOT = process.cwd();
const OUT = join(ROOT, "public", "project-source.zip");

const INCLUDE_DIRS = ["src", "public", "scripts"];
const INCLUDE_FILES = [
  "package.json",
  "bun.lockb",
  "tsconfig.json",
  "vite.config.ts",
  "components.json",
  "eslint.config.js",
  ".prettierrc",
  ".prettierignore",
  "bunfig.toml",
  "README.md",
];
const EXCLUDE = new Set([
  "node_modules",
  ".git",
  "dist",
  ".output",
  ".nitro",
  ".vinxi",
  ".turbo",
  ".cache",
  "project-source.zip",
]);

async function walk(dir, zip, baseInZip) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE.has(e.name)) continue;
    const full = join(dir, e.name);
    const rel = join(baseInZip, e.name);
    if (e.isDirectory()) {
      await walk(full, zip, rel);
    } else if (e.isFile()) {
      const data = await readFile(full);
      zip.file(rel.split("\\").join("/"), data);
    }
  }
}

export async function buildSourceZip() {
  const zip = new JSZip();
  for (const d of INCLUDE_DIRS) {
    try {
      const s = await stat(join(ROOT, d));
      if (s.isDirectory()) await walk(join(ROOT, d), zip, d);
    } catch {}
  }
  for (const f of INCLUDE_FILES) {
    try {
      const data = await readFile(join(ROOT, f));
      zip.file(f, data);
    } catch {}
  }
  const buf = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
  await mkdir(join(ROOT, "public"), { recursive: true });
  await writeFile(OUT, buf);
  return { path: relative(ROOT, OUT), bytes: buf.length };
}

// Allow running directly: `node scripts/build-source-zip.mjs`
if (import.meta.url === `file://${process.argv[1]}`) {
  buildSourceZip()
    .then((r) => console.log(`[source-zip] wrote ${r.path} (${(r.bytes / 1024).toFixed(1)} KB)`))
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}
