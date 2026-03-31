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





]
