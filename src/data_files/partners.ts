/** Parent heading on the Partners page for event-support organizations */
export const EVENT_SUPPORT_GROUP_TITLE =
  "Organizations that supported our events" as const

/** Subsections under {@link EVENT_SUPPORT_GROUP_TITLE} — order is fixed */
export const EVENT_SUPPORT_PARTNER_SECTIONS = [
  "Sponsors",
  "Case providers",
  "Community partners",
] as const

export const PARTNER_SECTION_ORDER = [
  ...EVENT_SUPPORT_PARTNER_SECTIONS,
] as const

export type PartnerSectionId = (typeof PARTNER_SECTION_ORDER)[number]
export type EventSupportPartnerSectionId =
  (typeof EVENT_SUPPORT_PARTNER_SECTIONS)[number]

export function partnersInEventSupportSections(
  list: Partner[],
): Partner[] {
  return sortByName(
    list.filter((p) =>
      EVENT_SUPPORT_PARTNER_SECTIONS.includes(
        p.section as EventSupportPartnerSectionId,
      ),
    ),
  )
}

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

/**
 * Add partners here — logo path + optional link URL.
 * Set `section` to one of: "Sponsors" | "Case providers" | "Community partners".
 */
export const partners: Partner[] = [
  {
    name: "AMS Institute",
    section: "Case providers",
    url: "https://www.ams-institute.org/",
    logo: "AMS.png",
  },
  {
    name: "City of Amsterdam",
    section: "Case providers",
    url: "https://www.amsterdam.nl/",
    logo: "amsterdam_municipality.png",
  },
  {
    name: "University of Cambridge, Judge Business School",
    section: "Sponsors",
    url: "https://www.jbs.cam.ac.uk/",
    logo: "CJBS.png",
  },
  {
    name: "Centre for Science and Policy",
    section: "Sponsors",
    url: "https://www.csap.cam.ac.uk/",
    logo: "CSaP.png",
  },
  {
    name: "Sustainalab",
    section: "Sponsors",
    url: "https://www.sustainalab.nl/",
    logo: "sustainalab.png",
  },
  {
    name: "University of Amsterdam, Data Science Centre",
    section: "Community partners",
    url: "https://dsc.uva.nl/",
    logo: "uva-dsc.png",
  },
  {
    name: "Vrije Universiteit Amsterdam",
    section: "Community partners",
    url: "https://vu.nl/nl",
    logo: "vu.png",
  },
  {
    name: "Kickstart AI",
    section: "Sponsors",
    url: "https://kickstart.ai/",
    logo: "kickstart_ai.png",
  },
  {
    name: "I-Partnerschap (Rijksorganisatie ODI)",
    section: "Community partners",
    url: "https://www.rijksorganisatieodi.nl/i-partnerschap",
    logo: "ipartnerschap.png",
  },
  {
    name: "Provincie Gelderland",
    section: "Case providers",
    url: "https://www.gelderland.nl/",
    logo: "gelderland.png",
  },
  {
    name: "Amsterdam AI",
    section: "Community partners",
    url: "https://www.amsterdamai.com/",
    logo: "amsterdamai.png",
  },
  {
    name: "Amsterdam Science Park",
    section: "Community partners",
    url: "https://www.amsterdamsciencepark.nl/",
    logo: "amsterdamSP.png",
  },
  {
    name: "INAIYAN",
    section: "Community partners",
    url: "https://www.inaiyan.com/",
    logo: "INAIYAN.png",
  },
  {
    name: "UvA Roeterseilandcampus Impact",
    section: "Community partners",
    url: "https://recimpact.uva.nl/",
    logo: "rec_impact.png",
  },
  {
    name: "TINTT",
    section: "Community partners",
    url: "https://www.tintt.co/",
    logo: "TINTT.png",
  },
  {
    name: "TINTT",
    section: "Sponsors",
    url: "https://www.tintt.co/",
    logo: "TINTT.png",
  },
  {
    name: "Bit",
    section: "Case providers",
    url: "https://wearebit.com/",
    logo: "bit.png",
  },
  {
    name: "Bit",
    section: "Sponsors",
    url: "https://wearebit.com/",
    logo: "bit.png",
  },
  {
    name: "PAVA",
    section: "Case providers",
    url: "https://www.pava.ai/",
    logo: "pava.png",
  },
  {
    name: "Amsterdam Data Academy",
    section: "Community partners",
    url: "https://amsterdamdataacademy.com/",
    logo: "ADA.png",
  },
  {
    name: "Nxt Museum Amsterdam",
    section: "Community partners",
    url: "https://nxtmuseum.com/",
    logo: "NXTmuseum.png",
  },
  // {
  //   name: "Mount Elgon Orchards",
  //   section: "Community partners",
  //   url: "https://www.mtelgon.com/roses",
  //   logo: "",
  // },
  {
    name: "AISO",
    section: "Community partners",
    url: "https://www.aisoamsterdam.com/",
    logo: "AISO.png",
  },
  {
    name: "Polder Center",
    section: "Community partners",
    url: "https://polder.center//",
    logo: "polder.png",
  },
  {
    name: "UvA Institute for Interdisciplinary Studies",
    section: "Community partners",
    url: "https://iis.uva.nl/en",
    logo: "iis.jpg",
  },
  {
    name: "Cambridge Zero",
    section: "Community partners",
    url: "https://www.zero.cam.ac.uk/",
    logo: "CambridgeZero.png",
  },
  {
    name: "Cambridge University Behavioural Insights Student Society",
    section: "Community partners",
    url: "https://www.linkedin.com/company/cambridge-cubiss/",
    logo: "CUBISS.png",
  },
  {
    name: "Cambridge University Science and Policy Exchange",
    section: "Community partners",
    url: "https://cuspe.org.uk/",
    logo: "CUSPE-logo.png",
  },
  {
    name: "Effective Altruism Cambridge",
    section: "Community partners",
    url: "https://www.eacambridge.org/",
    logo: "EA-cam.png",
  },
  {
    name: "Homes England",
    section: "Case providers",
    url: "https://www.gov.uk/government/organisations/homes-england",
    logo: "Homes.png",
  },
  {
    name: "The School for Moral Ambition",
    section: "Community partners",
    url: "https://www.moralambition.org/",
    logo: "SMA-logo-red.png",
  },
  {
    name: "Cambridge University Technology & Enterprise Club",
    section: "Community partners",
    url: "https://www.cutec.io/",
    logo: "CUTEC.png",
  },
  {
    name: "City of The Hague",
    section: "Case providers",
    url: "https://www.denhaag.nl/en/",
    logo: "City_of_The_Hague.png",
  },
  {
    name: "City of The Hague",
    section: "Sponsors",
    url: "https://www.denhaag.nl/en/",
    logo: "City_of_The_Hague.png",
  },
  {
    name: "Student Project Fund",
    section: "Community partners",
    url: "https://www.studentprojectfund.com/en/",
    logo: "logo-spf.png",
  },
  {
    name: "Cambridge Institute for Sustainability Leadership",
    section: "Case providers",
    url: "https://www.cis.cam.ac.uk/",
    logo: "CISL.png",
  },
  {
    name: "Cambridge University AI Ethics Society",
    section: "Community partners",
    url: "https://cuaiethics.org/",
    logo: "CUAES.png",
  },
  {
    name: "UK Department of Science, Innovation and Technology, Government Digital Service",
    section: "Case providers",
    url: "https://www.gov.uk/government/organisations/government-digital-service",
    logo: "DSIT-GDS.png",
  },
  {
    name: "El-Erian Institute of Behavioural Economics and Policy",
    section: "Community partners",
    url: "https://www.jbs.cam.ac.uk/centres/el-erian-behavioural-economics/",
    logo: "El-Erian-logo.png",
  },
  {
    name: "The Idealists Collective",
    section: "Community partners",
    url: "https://idealistscollective.org/",
    logo: "idealist-collective-logo.png",
  },
  {
    name: "Oxford Computational Political Science Group",
    section: "Community partners",
    url: "https://www.politics.ox.ac.uk/oxford-computational-political-science-group",
    logo: "OCPSG.png",
  },
  {
    name: "Oxbridge AI X",
    section: "Community partners",
    url: "https://www.oxbridgeaix.uk/",
    logo: "oxbridge-ai-x.png",
  },
  {
    name: "PayPal",
    section: "Sponsors",
    url: "https://www.paypal.com/",
    logo: "paypal.png",
  },
  {
    name: "PayPal",
    section: "Case providers",
    url: "https://www.paypal.com/",
    logo: "paypal.png",
  },
]
