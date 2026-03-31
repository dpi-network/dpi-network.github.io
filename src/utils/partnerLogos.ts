import type { ImageMetadata } from "astro"

/**
 * All images under `src/images/partners/` (eager) so `logo` paths in `partners.ts` resolve at build time.
 */
const partnerLogoModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/images/partners/**/*.{jpeg,jpg,png,gif,webp,avif,svg}",
  { eager: true },
)

function extractSrc(mod: unknown): string | undefined {
  if (!mod || typeof mod !== "object") return undefined
  const o = mod as { default?: unknown; src?: unknown }
  if (o.default && typeof o.default === "object" && o.default !== null) {
    const d = o.default as ImageMetadata
    if (typeof d.src === "string") return d.src
  }
  if (typeof o.src === "string") return o.src
  return undefined
}

const urlByRelativePath = new Map<string, string>()
for (const [absPath, mod] of Object.entries(partnerLogoModules)) {
  const rel = absPath.replace(/^\/src\/images\/partners\//, "")
  const src = extractSrc(mod)
  if (src) urlByRelativePath.set(rel, src)
}

function normalizeLogoKey(logo: string): string {
  let p = logo.trim()
  p = p.replace(/\\/g, "/")
  p = p.replace(/^\.+\//, "")
  p = p.replace(/^\/+/, "")
  const prefixes = [
    "src/images/partners/",
    "/src/images/partners/",
    "images/partners/",
    "/images/partners/",
    "partners/",
  ]
  for (const pre of prefixes) {
    if (p.toLowerCase().startsWith(pre.toLowerCase())) {
      p = p.slice(pre.length)
      break
    }
  }
  return p.replace(/^\/+/, "")
}

/** Resolve a `Partner.logo` string to a built asset URL, or `undefined` if missing / not found. */
export function resolvePartnerLogo(
  logo: string | undefined | null,
): string | undefined {
  if (!logo?.trim()) return undefined
  const key = normalizeLogoKey(logo)
  return urlByRelativePath.get(key)
}
