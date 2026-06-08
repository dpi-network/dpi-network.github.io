export type Principle = {
  title: string;
  description: string;
  icon: string;
};

export const aboutContent = {
  pageTitle: "About DPIN",
  mission: {
    title: "Mission",
    text: "Most policy challenges sit at the intersection of multiple disciplines. Yet, the people working on them rarely cross those boundaries. We aim to change that. DPIN unites students, researchers, and young professionals with leading public and private institutions to address today's most pressing, complex societal challenges.",
  },
  vision: {
    title: "Vision",
    text: "A global network where ambitious learners, innovators, and change makers collaborate across disciplines and borders to turn data, technology, and ideas into lasting public impact.",
  },
  principlesHeading: "Our principles",
  principles: [
    {
      title: "Collaboration",
      description:
        "Diverse perspectives create stronger policy. We unite them.",
      icon: "groups",
    },
    {
      title: "Impact first",
      description:
        "We source challenges from public and private institutions, and we design solutions for lasting change.",
      icon: "earth",
    },
    {
      title: "Learn by doing",
      description:
        "Experience is the best mentor; our events build skills through hands-on learning.",
      icon: "rocket",
    },
    {
      title: "Open & inclusive",
      description:
        "No specific backgrounds required, just curiosity and ambition.",
      icon: "sparks",
    },
  ] satisfies Principle[],
};
