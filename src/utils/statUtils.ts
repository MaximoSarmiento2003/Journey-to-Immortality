import { ELEMENTS } from "../types/enums";

import type {
  ResistanceStats,
  AffinityStats,
} from "../types/stats";

export const createBaseResistances =
(): ResistanceStats => {

  return Object.fromEntries(
    ELEMENTS.map((element) => [element, 0])
  ) as ResistanceStats;
};

export const createBaseAffinities =
(): AffinityStats => {

  return Object.fromEntries(
    ELEMENTS.map((element) => [element, 0])
  ) as AffinityStats;
};