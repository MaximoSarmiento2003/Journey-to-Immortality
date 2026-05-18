import { QI_REALMS } from "../data/realms";

import type { PlayerState } from "../types/player";

import type {
  BaseStats,
  InnateStats,
} from "../types/stats";

import {
  createBaseAffinities,
  createBaseResistances,
} from "../utils/statUtils";

const createBaseStats = (): BaseStats => ({
  strength: 5,

  agility: 5,

  dexterity: 5,

  vitality: 5,

  spiritualPower: 5,

  physicalDefense: 5,

  spiritualDefense: 5,

  constitution: 5,
});

const createInnateStats =
(): InnateStats => ({
  absorption: 1,

  luck: 1,

  comprehension: 1,

  soulTalent: 1,

  fate: 1,
});

export const createPlayer = (
  name: string
): PlayerState => {

  return {
    name,

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

      requiredKi: QI_REALMS[0].baseKiRequired,

      breakthroughChance: 1,
    },

    bodyCultivation: undefined,

    soulCultivation: undefined,

    baseStats: createBaseStats(),

    innateStats: createInnateStats(),

    resistances:
      createBaseResistances(),

    affinities:
      createBaseAffinities(),

    spiritStones: 0,

    pets: [],
  };
};