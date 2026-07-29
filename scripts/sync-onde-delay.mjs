import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const ondeSurfRoot = resolve(scriptDirectory, "..");
const sourceRoot = resolve(
  process.argv[2] ??
    join(ondeSurfRoot, "..", "sites", "onde-delay"),
);
const clientRoot = join(sourceRoot, "dist", "client");
const serverEntry = join(sourceRoot, "dist", "server", "index.js");
const staticRoot = join(ondeSurfRoot, "public", "onde-delay-static");
const pagePath = join(
  ondeSurfRoot,
  "public",
  "apps",
  "onde-delay",
  "index.html",
);

await mkdir(staticRoot, { recursive: true });
await cp(clientRoot, staticRoot, {
  recursive: true,
  force: true,
  preserveTimestamps: true,
});

const workerModule = await import(
  `${pathToFileURL(serverEntry).href}?static-export=${Date.now()}`
);
const worker = workerModule.default;
const response = await worker.fetch(
  new Request("https://onde.surf/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);
if (!response.ok) {
  throw new Error(`Onde Delay render failed with HTTP ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('href="/assets/', 'href="/onde-delay-static/assets/')
  .replaceAll('src="/assets/', 'src="/onde-delay-static/assets/')
  .replaceAll('srcSet="/assets/', 'srcSet="/onde-delay-static/assets/')
  .replaceAll('href="/audio/', 'href="/onde-delay-static/audio/')
  .replaceAll('src="/audio/', 'src="/onde-delay-static/audio/')
  .replaceAll(
    "https://onde.surf/assets/",
    "https://onde.surf/onde-delay-static/assets/",
  )
  .replaceAll(
    "https://onde.surf/og.png",
    "https://onde.surf/onde-delay-static/og.png",
  )
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(
    /<script\b[^>]*>[\s\S]*?<\/script>/g,
    (script) =>
      script.includes("scrollRestoration") &&
      !script.includes("__VINEXT_RSC_CHUNKS__")
        ? script
        : "",
  )
  .replace(
    "</body>",
    '<script src="/onde-delay-static/onde-delay.js" defer></script></body>',
  );

await mkdir(dirname(pagePath), { recursive: true });
await writeFile(pagePath, html);

const assetDirectory = join(staticRoot, "assets");
for (const entry of await readdir(assetDirectory)) {
  if (!entry.endsWith(".css")) continue;
  const cssPath = join(assetDirectory, entry);
  const css = await readFile(cssPath, "utf8");
  await writeFile(
    cssPath,
    css.replaceAll("url(/assets/", "url(/onde-delay-static/assets/"),
  );
}

await writeFile(
  join(staticRoot, "_headers"),
  [
    "/onde-delay-static/assets/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/onde-delay-static/release-payloads/*",
    "  Cache-Control: private, no-store",
    "  X-Content-Type-Options: nosniff",
    "",
  ].join("\n"),
);

console.log(pagePath);
