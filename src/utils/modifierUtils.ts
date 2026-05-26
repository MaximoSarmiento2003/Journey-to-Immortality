import type {
  PlayerModifiers,
} from "../types/modifiers";

export const createBaseModifiers =
(): PlayerModifiers => ({

  kiMultiplier: 1,

  breakthroughChance: 0,

  cultivationSpeed: 1,

  spiritualPowerMultiplier: 1,

  physicalDefenseMultiplier: 1,

  spiritualDefenseMultiplier: 1,
});