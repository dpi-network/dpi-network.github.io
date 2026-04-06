/** Section titles on the Partners page — order is fixed */
export const PARTNER_SECTION_ORDER = [
  // "Sponsors",
  // "Community partners",
  "Organizations that supported our events",
] as const

export type PartnerSectionId = (typeof PARTNER_SECTION_ORDER)[number]

export interface Partner {
  name: string

  logo?: string

  url?: string
  section: PartnerSectionId
}

function sortByName<T extends { name: string }>(list: T[]): T[] {
  return [...list].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
  )
}

export function partnersInSection(
  section: PartnerSectionId,
  list: Partner[],
): Partner[] {
  return sortByName(list.filter((p) => p.section === section))
}

/** Add partners here — logo path + optional link URL. */
export const partners: Partner[] = [
  {
    name: "AMS Institute",
    section: "Organizations that supported our events",
    url: "https://www.ams-institute.org/",
    logo: "AMS.png",
  },
  {
    name: "City of Amsterdam",
    section: "Organizations that supported our events",
    url: "https://www.amsterdam.nl/",
    logo: "amsterdam_municipality.png",
  },
  {
    name: "University of Cambridge, Judge Business School",
    section: "Organizations that supported our events",
    url: "https://www.jbs.cam.ac.uk/",
    logo: "CJBS.png",
  },
  {
    name: "Centre for Science and Policy",
    section: "Organizations that supported our events",
    url: "https://www.csap.cam.ac.uk/",
    logo: "CSaP.png",
  },
  {
    name: "Sustainalab",
    section: "Organizations that supported our events",
    url: "https://www.sustainalab.nl/",
    logo: "sustainalab.png",
  },
  {
    name: "University of Amsterdam, Data Science Centre",
    section: "Organizations that supported our events",
    url: "https://dsc.uva.nl/",
    logo: "uva-dsc.png",
  },
  {
    name: "Vrije Universiteit Amsterdam",
    section: "Organizations that supported our events",
    url: "https://vu.nl/nl",
    logo: "vu.png",
  },
  {
    name: "Kickstart AI",
    section: "Organizations that supported our events",
    url: "https://kickstart.ai/",
    logo: "kickstart_ai.png",
  },
  {
    name: "I-Partnerschap (Rijksorganisatie ODI)",
    section: "Organizations that supported our events",
    url: "https://www.rijksorganisatieodi.nl/i-partnerschap",
    logo: "ipartnerschap.png",
  },
  {
    name: "Provincie Gelderland",
    section: "Organizations that supported our events",
    url: "https://www.gelderland.nl/",
    logo: "gelderland.png",
  },
  {
    name: "Amsterdam AI",
    section: "Organizations that supported our events",
    url: "https://www.amsterdamai.com/",
    logo: "amsterdamai.png",
  },
  {
    name: "Amsterdam Science Park",
    section: "Organizations that supported our events",
    url: "https://www.amsterdamsciencepark.nl/",
    logo: "amsterdamSP.png",
  },
  {
    name: "INAIYAN",
    section: "Organizations that supported our events",
    url: "https://www.inaiyan.com/",
    logo: "INAIYAN.png",
  },
  {
    name: "UvA Roeterseilandcampus Impact",
    section: "Organizations that supported our events",
    url: "https://recimpact.uva.nl/",
    logo: "rec_impact.png",
  },
  {
    name: "TINTT",
    section: "Organizations that supported our events",
    url: "https://www.tintt.co/",
    logo: "TINTT.png",
  },
  {
    name: "Bit",
    section: "Organizations that supported our events",
    url: "https://wearebit.com/",
    logo: "bit.png",
  },
  {
    name: "PAVA",
    section: "Organizations that supported our events",
    url: "https://www.pava.ai/",
    logo: "pava.png",
  },
  {
    name: "Amsterdam Data Academy",
    section: "Organizations that supported our events",
    url: "https://amsterdamdataacademy.com/",
    logo: "ADA.png",
  },
  {
    name: "Nxt Museum Amsterdam",
    section: "Organizations that supported our events",
    url: "https://nxtmuseum.com/",
    logo: "NXTmuseum.png",
  },
  // {
  //   name: "Mount Elgon Orchards",
  //   section: "Organizations that supported our events",
  //   url: "https://www.mtelgon.com/roses",
  //   logo: "",
  // },
  {
    name: "AISO",
    section: "Organizations that supported our events",
    url: "https://www.aisoamsterdam.com/",
    logo: "AISO.png",
  },
  {
    name: "Polder Center",
    section: "Organizations that supported our events",
    url: "https://polder.center//",
    logo: "polder.png",
  },
  {
    name: "UvA Institute for Interdisciplenary Studies",
    section: "Organizations that supported our events",
    url: "https://iis.uva.nl/en",
    logo: "iis.jpg",
  },
  {
    name: "Cambridge Zero",
    section: "Organizations that supported our events",
    url: "https://www.zero.cam.ac.uk/",
    logo: "CambridgeZero.png",
  },
  {
    name: "Cambridge University Behavioural Insights Student Society",
    section: "Organizations that supported our events",
    url: "https://www.linkedin.com/company/cambridge-cubiss/",
    logo: "CUBISS.png",
  },
  {
    name: "Cambridge University Science and Policy Exchange",
    section: "Organizations that supported our events",
    url: "https://cuspe.org.uk/",
    logo: "CUSPE-logo.png",
  },
  {
    name: "Effective Altruism Cambridge",
    section: "Organizations that supported our events",
    url: "https://www.eacambridge.org/",
    logo: "EA-cam.png",
  },
  {
    name: "Homes England",
    section: "Organizations that supported our events",
    url: "https://www.gov.uk/government/organisations/homes-england",
    logo: "Homes.png",
  },
  {
    name: "The School for Moral Ambition",
    section: "Organizations that supported our events",
    url: "https://www.moralambition.org/",
    logo: "SMA-logo-red.png",
  },
  {
    name: "Cambridge University Technology & Enterprise Club",
    section: "Organizations that supported our events",
    url: "https://www.cutec.io/",
    logo: "CUTEC.png",
  },
  {
    name: "University of Cambridge",
    section: "Organizations that supported our events",
    url: "https://www.cam.ac.uk/",
    logo: "UoC.png",
  },


]
