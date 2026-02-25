// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Partners", url: "/" },
  { name: "Hackathons", url: "/" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Amsterdam Policy Hackathon", url: "https://amsterdampolicyhackathon.org/",},
      { name: "Cambridge Policy Hackathon", url: "https://cambridge.dpi.network/",},
      { name: "The Hague Policy Hackathon", url: "https://thehague.dpi.network/",},
      { name: "Maastricht Policy Hackathon", url: "https://maastricht.dpi.network/",},
    ],
  },
  {
    section: "Foundation",
    links: [
      { name: "About us", url: "#" },
      // { name: "Blog", url: "/blog" },
      { name: "Join us", url: "#" },
      { name: "Partners", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/dpi-network"
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