export const ICON_SIZE = 20;

export const AD_CLIENT = "ca-pub-2142870138777008";

/** All registered AdSense ad slots for this site */
export const AD_SLOTS = {
  /** Full-width banner across the top of the page */
  OVER_WEBSITE: "2882619175",
  /** Banner above the header / navigation */
  OVER_HEADER: "5603770416",
  /** In-feed ad between activity sections (fluid format) */
  IN_BETWEEN_ACTIVITIES: "7581801144",
  /** Ad at the bottom of activity content */
  BOTTOM_OF_PAGE: "8497527064",
} as const;

export type AdSlot = (typeof AD_SLOTS)[keyof typeof AD_SLOTS];

export const COOKIE_CONSENT_NAME = "cookieconsent_status";

export const NON_BREAKING_SPACE = `\u00A0`;

export const LEVELS = [
  "tous-niveaux",
  "a1",
  "a2",
  "b1",
  "b2",
  "c1",
  "c2",
] as const;

export const ACTIVITY_TYPE = [
  "toute-activite",
  "production-ecrite",
  "production-orale",
  "orthographe",
  "vocabulaire",
  "comprehension-orale",
  "comprehension-ecrite",
  "fiche-exercice",
  "grammaire",
  "chanson",
] as const;

export const LEVEL_ENUM = {
  A1: "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  C1: "C1",
  C2: "C2",
} as const;

export type Level = (typeof LEVEL_ENUM)[keyof typeof LEVEL_ENUM];

export const ACTIVITY_TYPE_ENUM = {
  TOUTE_ACTIVITE: "toute-activite",
  PRODUCTION_ECRITE: "production-ecrite",
  PRODUCTION_ORALE: "production-orale",
  ORTHOGRAPHE: "orthographe",
  VOCABULAIRE: "vocabulaire",
  COMPREHENSION_ORALE: "comprehension-orale",
  COMPREHENSION_ECRITE: "comprehension-ecrite",
  FICHE_EXERCICE: "fiche-exercice",
  GRAMMAIRE: "grammaire",
  CHANSON: "chanson",
} as const;

export type ActivityType =
  (typeof ACTIVITY_TYPE_ENUM)[keyof typeof ACTIVITY_TYPE_ENUM];

export const colors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#F9FAFF",
  background: "#FFF",
  "primary-light": "#DEDEF7",
  "primary-dark": "#1C1E52",
  primary: "#393A73",
  "secondary-very-light": "#FEC0A0",
  "secondary-light": "#FD8061",
  "secondary-dark": "#DE5E78",
  "tertiary-light": "#E6F8FF",
  tertiary: "#00B5FF",
  error: "#DE5E78",
  success: "#24997F",
} as const;

export type Color = keyof typeof colors;

export const routes = {
  home: "/",
  about: "/about",
  kofi: "https://ko-fi.com/pantou_fle",
  myMoneyViz: "https://www.mymoneyviz.com/fr?ref=pantoufle",
};
