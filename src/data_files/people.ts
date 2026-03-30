/** Canonical team section titles — order matches About Us page */
export const TEAM_SECTION_ORDER = [
  "Executive Board",
  "Amsterdam Policy Hackathon",
  "Cambridge Policy Hackathon",
  "Maastricht Policy Hackathon",
  "The Hague Policy Hackathon",
  "Advisory Board",
  // "Honorary Members",
] as const

export type TeamSectionId = (typeof TEAM_SECTION_ORDER)[number]

export interface Role {
  team: TeamSectionId
  role: string
}

export interface Person {
  name: string
  primaryRole: string
  /** Short biography shown in the profile modal */
  bio: string
  /**
   * File path under `src/images/team/` (you choose the filename).
   * Examples: `"diego-van-der-mast.jpg"`, `"board/fu.png"`
   */
  photo?: string
  roles?: Role[]
}

/** Sort key: last whitespace-separated segment (works for typical name lists). */
export function lastNameSortKey(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ""
  return parts[parts.length - 1]!
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
}

export function sortPeopleByLastName<T extends { name: string }>(list: T[]): T[] {
  return [...list].sort((a, b) =>
    lastNameSortKey(a.name).localeCompare(lastNameSortKey(b.name), "en", {
      sensitivity: "base",
    }),
  )
}

export const people: Person[] = [
  {
    name: "Almos Bakonyi",
    primaryRole: "Co-Organizer",
    bio: "Supports the Maastricht Policy Hackathon with coordination and outreach, helping teams connect policy questions with hands-on collaboration.",
    roles: [{ team: "Maastricht Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Tuan Do",
    primaryRole: "Co-Organizer",
    bio: "Helps run the Amsterdam Policy Hackathon, from participant experience to partnerships that ground each event in real policy challenges.",
    photo: "tuan.jpg",
    roles: [{ team: "Amsterdam Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Xuelong Fu",
    primaryRole: "Co-Founder and Co-Director",
    bio: "Co-founded DPIN and helps steer strategy across the network and several hackathons, with a focus on building bridges between students, practitioners, and public institutions.",
    photo: "xuelong.png",
    roles: [
      { team: "Executive Board", role: "Co-Founder and Co-Director" },
      { team: "Cambridge Policy Hackathon", role: "Co-Organizer" },
      { team: "The Hague Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Ecaterina Găitan-Caty",
    primaryRole: "Co-Director",
    bio: "Shapes DPIN's programmes and partnerships, with an emphasis on inclusive collaboration and turning hackathon outputs into lasting impact.",
    photo: "caty.jpeg",
    roles: [
      { team: "Executive Board", role: "Co-Director" },
      { team: "The Hague Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Adam Herold",
    primaryRole: "Co-Director",
    bio: "Co-directs DPIN's activities and supports the Cambridge Policy Hackathon, connecting academic rigour with practical policy experimentation.",
    photo: "adam.png",
    roles: [
      { team: "Executive Board", role: "Co-Director" },
      { team: "Cambridge Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Nikita Kirilov",
    primaryRole: "Co-Organizer",
    bio: "Leads technical tooling and infrastructure for the Maastricht Policy Hackathon so teams can focus on ideas, prototypes, and clear deliverables.",
    roles: [{ team: "Maastricht Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Theo Lake",
    primaryRole: "Co-Organizer",
    bio: "Contributes to engineering and event support for the Amsterdam Policy Hackathon, from setup to follow-up for participants and partners.",
    photo: "theo.jpg",
    roles: [{ team: "Amsterdam Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Diego van der Mast",
    primaryRole: "Co-Founder and Co-Director",
    bio: "Co-founded DPIN and helps lead the executive board and multiple hackathons, championing interdisciplinary teams and impact-oriented policy design.",
    photo: "diego.jpg",
    roles: [
      { team: "Executive Board", role: "Co-Founder and Co-Director" },
      { team: "Amsterdam Policy Hackathon", role: "Co-Organizer" },
      { team: "Maastricht Policy Hackathon", role: "Co-Organizer" },
      { team: "The Hague Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Arif Baker",
    primaryRole: "Co-Organizer",
    bio: "Supports the Cambridge Policy Hackathon with organisation and community building, helping participants collaborate effectively across disciplines.",
    photo: "arif.png",
    roles: [{ team: "Cambridge Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Matteo Postiferi",
    primaryRole: "Co-Organizer",
    bio: "Helps coordinate the Amsterdam Policy Hackathon, from logistics to participant experience, so each edition runs smoothly and stays mission-driven.",
    photo: "matteo.jpg",
    roles: [{ team: "Amsterdam Policy Hackathon", role: "Co-Organizer" }],
  },













  // Advisory Board
  {
    name: "Christina Caljé",
    primaryRole: "Advisor",
    bio: "",
    photo: "",
    roles: [{ team: "Advisory Board", role: "Advisor" }],
  },







]
