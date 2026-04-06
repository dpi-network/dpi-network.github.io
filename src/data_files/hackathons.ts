import data from "./hackathons.json";

export type HackathonStatus = "upcoming" | "past";

export interface Hackathon {
  id: string;
  title: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  url: string;
  shortDescription: string;
  status: HackathonStatus;
  /** Short line for the card badge (e.g. next run date). Shown instead of “upcoming/past”. */
  badgeDate: string;
  dateLabel: string;
}

/** Single source of truth: edit `hackathons.json` to add or update events. */
export const hackathons: Hackathon[] = data as Hackathon[];
