import type { ImageMetadata } from "astro"

/**
 * All images under `src/images/team/` (eager) so `photo` paths in `people.ts` resolve at build time.
 */
const teamPhotoModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/images/team/**/*.{jpeg,jpg,png,gif,webp,avif}",
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

/** Glob key → URL for every file currently in `src/images/team/` */
const urlByRelativePath = new Map<string, string>()
for (const [absPath, mod] of Object.entries(teamPhotoModules)) {
  const rel = absPath.replace(/^\/src\/images\/team\//, "")
  const src = extractSrc(mod)
  if (src) urlByRelativePath.set(rel, src)
}

/**
 * Normalize user-written `photo` to a key in `urlByRelativePath`.
 * Accepts paths relative to `src/images/team/`, e.g. `"diego.jpg"` or `"board/fu.png"`.
 */
function normalizePhotoKey(photo: string): string {
  let p = photo.trim()
  p = p.replace(/\\/g, "/")
  p = p.replace(/^\.+\//, "")
  p = p.replace(/^\/+/, "")
  const prefixes = [
    "src/images/team/",
    "/src/images/team/",
    "images/team/",
    "/images/team/",
    "team/",
  ]
  for (const pre of prefixes) {
    if (p.toLowerCase().startsWith(pre.toLowerCase())) {
      p = p.slice(pre.length)
      break
    }
  }
  return p.replace(/^\/+/, "")
}

/**
 * Resolve a `Person.photo` string to a built asset URL, or `undefined` if missing / not found.
 */
export function resolveTeamPhoto(
  photo: string | undefined | null,
): string | undefined {
  if (!photo?.trim()) return undefined
  const key = normalizePhotoKey(photo)
  return urlByRelativePath.get(key)
}
