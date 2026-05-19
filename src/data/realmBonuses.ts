export interface MinorRealmBonus {
  strength: number;

  agility: number;

  dexterity: number;

  vitality: number;

  spiritualPower: number;

  physicalDefense: number;
  spiritualDefense: number;

  constitution: number;
}

export interface MajorRealmBonus {
  lifespan: number;

  kiMultiplier: number;

  breakthroughBonus: number;

  spiritualPowerBonus: number;

  soulBonus: number;

  unlocksSoulCultivation: boolean;

  unlocksBodyCultivation: boolean;

  unlocksFlight: boolean;
}

export const BASE_MINOR_REALM_BONUS:
MinorRealmBonus = {

  strength: 1,

  agility: 1,

  dexterity: 1,

  vitality: 2,

  spiritualPower: 1,
  physicalDefense: 1,
  spiritualDefense: 1,
  constitution: 1,
};

export const calculateStageBonus = (
  realm: number,
  stage: number
): MinorRealmBonus => {

  const realmMultiplier =
    1 + (realm * 0.5);

  const stageMultiplier =
    1 + (stage * 0.1);

  const scaleStat = (
    value: number
  ): number => {

    return Math.floor(
      value *
      realmMultiplier *
      stageMultiplier
    );
  };

  return {

    strength: scaleStat(
      BASE_MINOR_REALM_BONUS.strength
    ),

    agility: scaleStat(
      BASE_MINOR_REALM_BONUS.agility
    ),

    dexterity: scaleStat(
      BASE_MINOR_REALM_BONUS.dexterity
    ),

    vitality: scaleStat(
      BASE_MINOR_REALM_BONUS.vitality
    ),

    spiritualPower: scaleStat(
      BASE_MINOR_REALM_BONUS.spiritualPower
    ),

    physicalDefense: scaleStat(
      BASE_MINOR_REALM_BONUS
        .physicalDefense
    ),

    spiritualDefense: scaleStat(
      BASE_MINOR_REALM_BONUS
        .spiritualDefense
    ),

    constitution: scaleStat(
      BASE_MINOR_REALM_BONUS
        .constitution
    ),
  };

};

export const MAJOR_REALM_BONUSES:
Record<number, MajorRealmBonus> = {

  1: {
    lifespan: 0,

    kiMultiplier: 1,

    breakthroughBonus: 0,

    spiritualPowerBonus: 0,

    soulBonus: 0,

    unlocksSoulCultivation: false,

    unlocksBodyCultivation: false,

    unlocksFlight: false,
  },

  2: {
    lifespan: 20,

    kiMultiplier: 1.1,

    breakthroughBonus: 0.02,

    spiritualPowerBonus: 5,

    soulBonus: 0,

    unlocksSoulCultivation: false,

    unlocksBodyCultivation: false,

    unlocksFlight: false,
  },

  3: {
    lifespan: 50,

    kiMultiplier: 1.2,

    breakthroughBonus: 0.05,

    spiritualPowerBonus: 15,

    soulBonus: 5,

    unlocksSoulCultivation: false,

    unlocksBodyCultivation: false,

    unlocksFlight: false,
  },

  4: {
    lifespan: 200,

    kiMultiplier: 1.3,

    breakthroughBonus: 0.05,

    spiritualPowerBonus: 30,

    soulBonus: 5,

    unlocksSoulCultivation: false,

    unlocksBodyCultivation: true,

    unlocksFlight: false,
  },

  5: {
    lifespan: 500,

    kiMultiplier: 1.5,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 100,

    soulBonus: 50,

    unlocksSoulCultivation: false,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },

  6: {
    lifespan: 800,

    kiMultiplier: 2,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 300,

    soulBonus: 50,

    unlocksSoulCultivation: true,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },

  7: {
    lifespan: 1400,

    kiMultiplier: 2.2,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 300,

    soulBonus: 50,

    unlocksSoulCultivation: true,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },

  8: {
    lifespan: 2000,

    kiMultiplier: 2.4,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 400,

    soulBonus: 50,

    unlocksSoulCultivation: true,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },

  9: {
    lifespan: 3000,

    kiMultiplier: 2.6,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 400,

    soulBonus: 50,

    unlocksSoulCultivation: true,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },

  10: {
    lifespan: 5000,

    kiMultiplier: 3,

    breakthroughBonus: 0.15,

    spiritualPowerBonus: 800,

    soulBonus: 100,

    unlocksSoulCultivation: true,

    unlocksBodyCultivation: true,

    unlocksFlight: true,
  },
};