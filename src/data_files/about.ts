export type Principle = {
  title: string;
  description: string;
  icon: string;
};

export const aboutContent = {
  pageTitle: "About DPIN",
  mission: {
    title: "Mission",
    text: "We connect students, researchers, and young professionals with peers and impact-driven organisations, empowering them to apply their skills to real societal challenges through interdisciplinary and sociotechnical collaboration.",
  },
  vision: {
    title: "Vision",
    text: "A global network where ambitious learners, policy innovators, and change makers collaborate across disciplines and borders to turn data, technology, and ideas into lasting public impact.",
  },
  principlesHeading: "Our principles",
  principles: [
    {
      title: "Collaboration",
      description:
        "We bridge disciplines, institutions, and communities so diverse perspectives strengthen every solution.",
      icon: "groups",
    },
    {
      title: "Impact first",
      description:
        "We focus on challenges defined by partners and communities, with outcomes that matter beyond the event.",
      icon: "earth",
    },
    {
      title: "Learn by doing",
      description:
        "We build skills through hands-on hackathons, projects, and mentorship - not theory alone.",
      icon: "rocket",
    },
    {
      title: "Open & inclusive",
      description:
        "We welcome curious minds at every stage and foster a community where everyone can contribute.",
      icon: "sparks",
    },
  ] satisfies Principle[],
};
