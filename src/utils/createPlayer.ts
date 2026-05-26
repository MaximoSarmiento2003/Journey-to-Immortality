import { QI_REALMS }
from "../data/realms";

import type { PlayerState }
from "../types/player";

import type {
  BaseStats,
} from "../types/stats";

import type {
  CharacterCreationData,
} from "../types/characterCreation";

import {
  createBaseAffinities,
  createBaseResistances,
} from "../utils/statUtils";
import { createBaseModifiers } from "./modifierUtils";

const createBaseStats =
(): BaseStats => ({
  strength: 5,

  agility: 5,

  dexterity: 5,

  vitality: 5,

  spiritualPower: 5,

  physicalDefense: 5,

  spiritualDefense: 5,

  constitution: 5,
});

export const createPlayer = (
  characterData:
    CharacterCreationData
): PlayerState => {

  return {
    name: characterData.name,

    race: "Human",

    age: 16,

    lifespan: 100,

    nature: "NEUTRAL",

    elements: [],

    specialPhysique: undefined,

    qiCultivation: {
      type: "QI",

      realm: QI_REALMS[0].level,

      stage: 1,

      currentKi: 0,

      requiredKi:
        QI_REALMS[0].baseKiRequired,

      breakthroughChance: 1,

      isAtPeak: false,
    },

    bodyCultivation: undefined,

    soulCultivation: undefined,

    baseStats: createBaseStats(),

    innateStats:
      characterData.innateStats,

    resistances:
      createBaseResistances(),

    affinities:
      createBaseAffinities(),

    spiritStones: 0,

    pets: [],

    modifiers:
  createBaseModifiers(),
  };
};