import type { ElementType } from "./enums";

export interface BaseStats {
  strength: number;
  agility: number;
  dexterity: number;
  vitality: number;

  spiritualPower: number;

  physicalDefense: number;
  spiritualDefense: number;

  constitution: number;
}

export interface InnateStats {
  absorption: number;

  luck: number;

  comprehension: number;

  soulTalent: number;

  fate: number;
}

export type ResistanceStats =
  Record<ElementType, number>;

export type AffinityStats =
  Record<ElementType, number>;