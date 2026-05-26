import type {
  NatureType,
  ElementType,
} from "./enums";

import type {
  BaseStats,
  InnateStats,
  ResistanceStats,
  AffinityStats,
} from "./stats";

import type {
  CultivationState,
} from "./cultivation";

import type {
  PlayerModifiers,
} from "./modifiers";

export interface PlayerState {
  name: string;

  race: string;

  age: number;

  lifespan: number;

  nature: NatureType;

  specialPhysique?: string;

  elements: ElementType[];

  qiCultivation: CultivationState;

  bodyCultivation?: CultivationState;

  soulCultivation?: CultivationState;

  baseStats: BaseStats;

  innateStats: InnateStats;

  resistances: ResistanceStats;

  affinities: AffinityStats;

  spiritStones: number;

  pets: string[];

  modifiers: PlayerModifiers;
}