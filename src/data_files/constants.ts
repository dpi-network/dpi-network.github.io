import ogImageSrc from "@images/social.png";

import AMS from "@images/AMS.png";
import city from "@images/municipality.png";
import sustainalab from "@images/sustainalab.png";
import vu from "@images/vu.png";
import uva from "@images/uva.png";


export const SITE = {
  title: "Data for Public Impact Network",
  tagline: "Data-driven Social Impact",
  description: "The Data for Public Impact Network (DPIN) connects students and young professionals with peers and organisations, empowering them to apply their skills to address societal challenges through interdisciplinary collaboration.",
  description_short: "The Data for Public Impact Network (DPIN) connects students and young professionals with peers and organisations, empowering them to apply their skills to address societal challenges through interdisciplinary collaboration.",
  url: "https://dpi.network/",
  author: "Diego van der Mast & Xuelong Fu",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "The Data for Public Impact Network (DPIN) connects students and young professionals with peers and organisations, empowering them to apply their skills to address societal challenges through interdisciplinary collaboration.",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: AMS.src,
        name: "first",
        href: "#",
    },
    {
        icon: vu.src,
        name: "Second",
        href: "#",
    },
    {
        icon: uva.src,
        name: "Third",
        href: "#",
    },

    {
        icon: city.src,
        name: "Fourth",
        href: "#",
    },
]