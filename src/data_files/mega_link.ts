// Define data structures for services and success stories
import testemonialsImage from "@images/starlight/dpin_logo.png";
import { hackathons } from "./hackathons";

export const servicesData = [
 {
    title: "Explore Advice and Explanations",
    description:
      "Dive deep into helpful guides and explanations for all of ScrewFast's features",
    icon: "guides",
    url: "#",
  },
  {
    title: "Discover Integrations",
    description:
      "Supercharge Your Workflow. Seamless integrations with all your favorite tools",
    icon: "puzzle",
    url: "#",
  },
  {
    title: "Expert Services",
    description: "Go beyond tools with ScrewFast's expert services",
    icon: "rocket",
    url: "#",
  },
  {
    title: "Cutting-Edge Tools",
    description:
      "Build Smarter, Faster. Experience next-level efficiency with ScrewFast's cutting-edge construction tools",
    icon: "hammer",
    url: "#",
  },
  {
    title: "Simple Plans",
    description:
      "Boost your efficiency with ScrewFast's straightforward, value-driven plans",
    icon: "sparks",
    url: "#",
  },
  {
    title: "Community Forum",
    description: "Learn, share, and connect with other ScrewFast users",
    icon: "community",
    url: "#",
  },
];

export const successStoriesData = [
  {
    image: testemonialsImage,
    alt: "Data for Public Impact Network",
    sectionTitle: "Map & testimonials",
    description:
      "Explore hackathon locations on the interactive map, then scroll the events page for hubs and participant testimonials.",
    learnMoreUrl: "/policy-hackathons",
    learnMoreLabel: "View map & testimonials",
  },
];

/** Derived from `hackathons.json` — add events there to update the menu and map. */
export const eventsData = hackathons.map((h) => ({
  title: h.title,
  description: h.shortDescription,
  icon: "guides" as const,
  url: h.url,
}));
