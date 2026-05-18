export const NATURE = [
    "ORTHODOX",
    "UNORTHODOX",
    "DEMONIC",
    "NEUTRAL",
] as const;

export type NatureType = typeof NATURE[number];
  

export const CULTIVATION = [
  "QI",
  "BODY",
  "SOUL",
] as const;

export type CultivationType = typeof CULTIVATION[number];

export const ELEMENTS = [
  "FIRE",
  "WATER",
  "WOOD",
  "EARTH",
  "METAL",
  "LIGHTNING",
  "ICE",
  "WIND",
  "SPACE",
  "TIME",
] as const;

export type ElementType = typeof ELEMENTS[number];

export const RARITY = [
  "COMMON",
  "UNCOMMON",
  "RARE",
  "EPIC",
  "LEGENDARY",
  "MYTHIC",
  "IMMORTAL"
] as const;

export type RarityType = typeof RARITY[number];