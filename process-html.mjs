import fs from "node:fs/promises";
import { globby } from "globby";
import { minify } from "html-minifier-terser";

// Astro static output (matches `out-dir` in withastro/action and astro.config)
const outDir = "./dist";
const files = await globby(`${outDir}/**/*.html`);

if (files.length === 0) {
  console.warn(
    `process-html: no HTML files under ${outDir} — skip minify (did astro build run?)`,
  );
} else {
  await Promise.all(
    files.map(async (file) => {
      console.log("Processing file:", file);
      let html = await fs.readFile(file, "utf-8");
      html = await minify(html, {
        removeComments: true,
        preserveLineBreaks: true,
        collapseWhitespace: true,
        minifyJS: true,
      });
      await fs.writeFile(file, html);
    }),
  );
}

// Jekyll ignores folders starting with `_` unless this file exists; safe for any GitHub Pages source
await fs.writeFile(`${outDir}/.nojekyll`, "");