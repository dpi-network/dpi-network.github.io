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
    bio: "",
    roles: [{ team: "Maastricht Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Tuan Do",
    primaryRole: "Co-Organizer",
    bio: "",
    photo: "tuan.jpg",
    roles: [{ team: "Amsterdam Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Xuelong Fu",
    primaryRole: "Co-Founder and Co-Director",
    bio: "",
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
    bio: "",
    photo: "caty.jpeg",
    roles: [
      { team: "Executive Board", role: "Co-Director" },
      { team: "The Hague Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Adam Herold",
    primaryRole: "Co-Director",
    bio: "",
    photo: "adam.png",
    roles: [
      { team: "Executive Board", role: "Co-Director" },
      { team: "Cambridge Policy Hackathon", role: "Co-Organizer" },
    ],
  },
  {
    name: "Nikita Kirilov",
    primaryRole: "Co-Organizer",
    bio: "",
    roles: [{ team: "Maastricht Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Theo Lake",
    primaryRole: "Co-Organizer",
    bio: "",
    photo: "theo.jpg",
    roles: [{ team: "Amsterdam Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Diego van der Mast",
    primaryRole: "Co-Founder and Co-Director",
    bio: "",
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
    bio: "",
    photo: "arif.png",
    roles: [{ team: "Cambridge Policy Hackathon", role: "Co-Organizer" }],
  },
  {
    name: "Matteo Postiferi",
    primaryRole: "Co-Organizer",
    bio: "",
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
