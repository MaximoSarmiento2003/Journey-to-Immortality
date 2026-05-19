import type {
  CultivationType,
} from "./enums";

export interface CultivationRealm {
  name: string;

  level: number;

  stages: number;

  baseKiRequired: number;

  breakthroughDifficulty: number;
}

export interface CultivationState {
  type: CultivationType;

  realm: number;

  stage: number;

  currentKi: number;

  requiredKi: number;

  breakthroughChance: number;

  isAtPeak: boolean;
}

export interface BreakthroughResult {
  success: boolean;

  chance: number;

  kiLost: number;

  damageTaken?: number;
}