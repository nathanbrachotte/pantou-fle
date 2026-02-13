import {
  NON_BREAKING_SPACE,
  ACTIVITY_TYPE,
  LEVELS,
  LEVEL_ENUM,
  type Level,
  type ActivityType,
} from "./constants";
import type { Activity } from "./contentful";

export function removeNodeFieldFromData<T>(data: { node: T }[]): T[] {
  return Object.values(data).map((node) => node.node);
}

export function getActivityTypeLabel(
  text: string,
  shouldDisplayFull?: boolean,
): string {
  switch (text) {
    case "toute-activite":
      return shouldDisplayFull ? `Toutes les activités` : `Tout`;
    case "comprehension-ecrite":
      return shouldDisplayFull
        ? `Compréhension Écrite`
        : `Comp.${NON_BREAKING_SPACE}Écrite`;
    case "comprehension-orale":
      return shouldDisplayFull
        ? `Compréhension Orale`
        : `Comp.${NON_BREAKING_SPACE}Orale`;
    case "fiche-exercice":
      return `Fiche${NON_BREAKING_SPACE}Exercice`;
    case "orthographe":
      return "Orthographe";
    case "production-ecrite":
      return shouldDisplayFull
        ? `Production Écrite`
        : `Prod.${NON_BREAKING_SPACE}Écrite`;
    case "production-orale":
      return shouldDisplayFull
        ? `Production Orale`
        : `Prod.${NON_BREAKING_SPACE}Orale`;
    case "vocabulaire":
      return `Vocabulaire`;
    case "grammaire":
      return `Grammaire`;
    case "chanson":
      return `Chanson`;
    default:
      return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  }
}

export function getActivityTypeBackgroundColor(text: string): string {
  switch (text) {
    case "comprehension-ecrite":
      return "bg-tertiary-light";
    case "comprehension-orale":
      return "bg-primary-light";
    case "fiche-exercice":
      return "bg-secondary-very-light";
    case "orthographe":
      return "bg-primary-light";
    case "production-ecrite":
      return "bg-tertiary-light";
    case "production-orale":
      return "bg-secondary-light";
    case "vocabulaire":
      return "bg-secondary-very-light";
    case "grammaire":
      return "bg-primary-dark";
    case "chanson":
      return "bg-secondary-dark";
    default:
      return "bg-primary-dark";
  }
}

/** Returns true when the activity type's background chip is dark enough
 *  that the icon inside it should be white instead of primary-dark. */
export function activityTypeHasDarkBackground(text: string): boolean {
  return ["grammaire", "toute-activite"].includes(text);
}

/** Returns a text color class for each activity type (used on card tags). */
export function getActivityTypeTextColor(text: string): string {
  switch (text) {
    case "comprehension-ecrite":
      return "text-tertiary";
    case "comprehension-orale":
      return "text-primary";
    case "fiche-exercice":
      return "text-secondary-light";
    case "orthographe":
      return "text-primary";
    case "production-ecrite":
      return "text-tertiary";
    case "production-orale":
      return "text-secondary-light";
    case "vocabulaire":
      return "text-secondary-dark";
    case "grammaire":
      return "text-primary-dark";
    case "chanson":
      return "text-secondary-dark";
    default:
      return "text-primary-dark";
  }
}

export function includesALevel(uri: string): boolean {
  return LEVELS.some((lvl) => uri.includes(lvl.toLowerCase()));
}

export function includesAnActivityType(uri: string): boolean {
  return ACTIVITY_TYPE.some((act) => uri.includes(act.toLowerCase()));
}

export function getCurrentActivity(
  uri: string,
  activityFallback?: string,
): string {
  const fromUri = ACTIVITY_TYPE.find((activity) =>
    uri.includes(activity.toLowerCase()),
  );

  if (fromUri) return fromUri;
  if (activityFallback) return activityFallback;
  return "toute-activite";
}

export function getCurrentLevel(uri: string): string {
  return (
    LEVELS.filter((level) => uri.includes(level.toLowerCase()))[0] || LEVELS[0]
  );
}

export function groupActivitiesByLevel(
  activities: Activity[],
): Record<Level, Activity[]> {
  const perLevel: Record<Level, Activity[]> = {
    [LEVEL_ENUM.A1]: [],
    [LEVEL_ENUM.A2]: [],
    [LEVEL_ENUM.B1]: [],
    [LEVEL_ENUM.B2]: [],
    [LEVEL_ENUM.C1]: [],
    [LEVEL_ENUM.C2]: [],
  };

  activities.forEach((a: Activity) => {
    if (!a?.level?.title) return;
    const level = a.level.title as Level;
    if (perLevel[level]) {
      perLevel[level].push(a);
    }
  });

  return perLevel;
}

/**
 * Builds a Set of "level:activityType" keys that have at least one activity.
 * Used to disable nav pills that would lead to empty pages.
 *
 * Special rules:
 * - "tous-niveaux:X" is available if ANY level has content for X
 * - "Y:toute-activite" is available if ANY activity type has content for Y
 * - "tous-niveaux:toute-activite" is always available when there's any content
 */
export function buildAvailabilitySet(activities: Activity[]): Set<string> {
  const set = new Set<string>();

  if (activities.length > 0) {
    set.add("tous-niveaux:toute-activite");
  }

  for (const a of activities) {
    const level = a.level?.title?.toLowerCase() || "";
    const type = a.activityType?.type || "";

    if (level && type) {
      set.add(`${level}:${type}`);
      // A specific level has at least one activity -> "level:toute-activite" is valid
      set.add(`${level}:toute-activite`);
      // A specific type has at least one activity -> "tous-niveaux:type" is valid
      set.add(`tous-niveaux:${type}`);
    }
  }

  return set;
}

/** Check if a (level, activityType) combination has content */
export function hasContent(
  availabilitySet: Set<string>,
  level: string,
  activityType: string,
): boolean {
  return availabilitySet.has(`${level.toLowerCase()}:${activityType}`);
}

export function backgroundToTextColor(bgColor: string): string {
  switch (bgColor) {
    case "primary-dark":
    case "primary":
    case "primary-light":
    case "secondary-dark":
      return "white";
    case "white":
    default:
      return "primary-dark";
  }
}
