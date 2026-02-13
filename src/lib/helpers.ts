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
