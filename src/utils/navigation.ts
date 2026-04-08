// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Partners", url: "/partners" },
  { name: "Hackathons", url: "/policy-hackathons" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Events",
    links: [
      { name: "All hackathons (map)", url: "/policy-hackathons" },
      { name: "Amsterdam Policy Hackathon", url: "https://amsterdam.dpi.network/",},
      { name: "Cambridge Policy Hackathon", url: "https://cambridge.dpi.network/",},
      { name: "The Hague Policy Hackathon", url: "https://thehague.dpi.network/",},
      { name: "Maastricht Policy Hackathon", url: "https://maastricht.dpi.network/",},
    ],
  },
  {
    section: "DPIN",
    links: [
      { name: "About", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Partners", url: "/partners" },
      { name: "Join us", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/dpi-network",
  instagram: "https://www.instagram.com/dpi.network/",
  // facebook: "https://www.facebook.com/",
  // x: "https://twitter.com/",
  // github: "https://github.com/mearashadowfax/ScrewFast",
  // google: "https://www.google.com/",
  // slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};