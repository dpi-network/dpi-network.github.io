/**
 * Blog listing metadata. Each on-site post lives in `src/pages/blog/<slug>/`
 * with its own `index.astro` and any images (e.g. `cover.svg`) in that folder.
 * For partner articles, set `externalUrl` instead — no local page is required.
 * Add a new entry when you add a new post folder or external link.
 *
 * Visibility: set `visible: false` on an entry to remove it from `/blog` and
 * show an “unavailable” page at its URL (with noindex). Wrap the page in
 * `BlogPostLayout` (see existing posts). Omit `visible` or use `true` to publish.
 */
import { SITE } from "@data/constants";
import coverCrossDisciplinary from "../pages/blog/building-cross-disciplinary-teams/cover.svg?url";
import coverWelcome from "../pages/blog/welcome-to-the-blog/cover.svg?url";
import coverAmsterdam from "../pages/blog/amsterdam-success/whiteboard.png?url";
import coverCjbsNews from "../pages/blog/cjbs-news-28052026/cph2026-CJBS-news.jpg?url";

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  coverUrl: string;
  author: string;
  /**
   * When set, the blog listing links here instead of `/blog/<slug>/`.
   * Use for articles published on partner sites.
   */
  externalUrl?: string;
  /**
   * When `false`, the post is hidden from `/blog` and its URL shows an
   * “unavailable” message with `noindex`. Omit or `true` for a normal public post.
   */
  visible?: boolean;
}

export const blogPosts: BlogPostSummary[] = [
  {
    slug: "amsterdam-success",
    title: "From Hackathon to Implementation: How APH Accelerated a Municipal AI Concept",
    description:
      "How a winning policy proposal turned into a municipal product",
    pubDate: new Date("2026-06-15"),
    coverUrl: coverAmsterdam,
    author: "DPIN Team",
  },
  {
    slug: "welcome-to-the-blog",
    title: "Welcome to the DPIN blog",
    description:
      "News, reflections, and updates from the Data for Public Impact Network.",
    pubDate: new Date("2026-04-08"),
    coverUrl: coverWelcome,
    author: "DPIN Team",
  },
  {
    slug: "cjbs-news-28052026",
    title: "Cambridge Policy Hackathon organised by Cambridge Judge students",
    description:
      "Coverage from Cambridge Judge Business School on our May 2026 policy hackathon.",
    pubDate: new Date("2026-05-28"),
    coverUrl: coverCjbsNews,
    author: "Cambridge Judge Business School",
    externalUrl:
      "https://www.jbs.cam.ac.uk/2026/cambridge-policy-hackathon/",
  },
  // {
  //   slug: "public-engagement",
  //   title: "Public engagement for scientists and policymakers",
  //   description:
  //     "FILL1",
  //   pubDate: new Date("2026-04-08"),
  //   coverUrl: coverWelcome,
  //   author: "DPIN Team",
  // },
  // {
  //   slug: "building-cross-disciplinary-teams",
  //   title: "Why cross-disciplinary teams matter for policy hackathons",
  //   description:
  //     "How we bring together data science, law, design, and public administration to tackle complex challenges in a single weekend.",
  //   pubDate: new Date("2026-03-15"),
  //   coverUrl: coverCrossDisciplinary,
  //   author: "DPIN Team",
  // },
];

export function getSortedBlogPosts(): BlogPostSummary[] {
  return [...blogPosts].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
  );
}

/** Posts shown on `/blog` (excludes `visible: false`). */
export function getSortedVisibleBlogPosts(): BlogPostSummary[] {
  return getSortedBlogPosts().filter((p) => p.visible !== false);
}

export function getBlogPostBySlug(
  slug: string
): BlogPostSummary | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostHref(post: BlogPostSummary): string {
  return post.externalUrl ?? `/blog/${post.slug}/`;
}

/** `false` when the post exists in the registry and is marked `visible: false`. */
export function isBlogPostHiddenFromPublic(slug: string): boolean {
  const entry = getBlogPostBySlug(slug);
  return entry != null && entry.visible === false;
}

/** Schema.org `author` for BlogPosting JSON-LD from a byline string. */
export function blogAuthorJsonLd(
  author: string
):
  | { "@type": "Organization"; name: string; url: string }
  | { "@type": "Person"; name: string } {
  if (author === SITE.title || /team/i.test(author)) {
    return { "@type": "Organization", name: author, url: SITE.url };
  }
  return { "@type": "Person", name: author };
}
