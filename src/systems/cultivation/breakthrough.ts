import {
  QI_REALMS,
} from "../../data/realms";

import {
  calculateStageBonus,
  MAJOR_REALM_BONUSES,
} from "../../data/realmBonuses";

import type { PlayerState }
from "../../types/player";

import {
  getRealmByLevel,
} from "../../utils/realmsUtils";

export const attemptBreakthrough = (
  player: PlayerState
): PlayerState => {

  const cultivation =
    player.qiCultivation;

  if (!cultivation.isAtPeak) {
    return player;
  }

  const currentRealm =
    getRealmByLevel(
      cultivation.realm
    );

  if (!currentRealm) {
    return player;
  }

  // Talent bonuses
  const luckBonus =
    player.innateStats.luck * 0.01;

  const comprehensionBonus =
    player.innateStats
      .comprehension * 0.015;

  const soulTalentBonus =
    player.innateStats
      .soulTalent * 0.01;

  // Final chance
 const baseChance = 0.8;

const calculatedChance =
  baseChance +
  luckBonus +
  comprehensionBonus +
  soulTalentBonus +
  player.modifiers.breakthroughChance -
  currentRealm.breakthroughDifficulty;

const successChance =
  Math.max(
    0.15,
    Math.min(
      0.95,
      calculatedChance
    )
  );

  const success =
    Math.random() < successChance;

  // FAIL
  if (!success) {

    return {
      ...player,

      qiCultivation: {
        ...cultivation,

        currentKi:
          cultivation.requiredKi * 0.5,

        isAtPeak: false,
      },
    };
  }

  // -------------------
  // MAJOR BREAKTHROUGH
  // -------------------

  if (
    cultivation.stage >=
    currentRealm.stages
  ) {

    const nextRealm =
      getRealmByLevel(
        cultivation.realm + 1
      );

    if (!nextRealm) {
      return player;
    }

    const majorBonus =
      MAJOR_REALM_BONUSES[
        nextRealm.level
      ];

      

    return {

  ...player,

  lifespan:
    player.lifespan +
    majorBonus.lifespan,

  modifiers: {

    ...player.modifiers,

    kiMultiplier:
      player.modifiers
        .kiMultiplier *
      majorBonus.kiMultiplier,

    breakthroughChance:
      player.modifiers
        .breakthroughChance +
      majorBonus
        .breakthroughBonus,
  },

  baseStats: {

    ...player.baseStats,

    spiritualPower:
      player.baseStats
        .spiritualPower +
      majorBonus
        .spiritualPowerBonus,
  },

  qiCultivation: {

    ...cultivation,

    realm: nextRealm.level,

    stage: 1,

    currentKi: 0,

    requiredKi:
      nextRealm.baseKiRequired,

    isAtPeak: false,
  },

  bodyCultivation:
    majorBonus
      .unlocksBodyCultivation
      ? player.bodyCultivation
      : player.bodyCultivation,

  soulCultivation:
    majorBonus
      .unlocksSoulCultivation
      ? player.soulCultivation
      : player.soulCultivation,
};
  }

  // -------------------
  // STAGE BREAKTHROUGH
  // -------------------

  const bonus =
    calculateStageBonus(
      cultivation.realm,
      cultivation.stage
    );

  const nextStage =
    cultivation.stage + 1;

  return {

    ...player,

    baseStats: {

      ...player.baseStats,

      strength:
        player.baseStats.strength +
        bonus.strength,

      agility:
        player.baseStats.agility +
        bonus.agility,

      dexterity:
        player.baseStats.dexterity +
        bonus.dexterity,

      vitality:
        player.baseStats.vitality +
        bonus.vitality,

      spiritualPower:
        player.baseStats
          .spiritualPower +
        bonus.spiritualPower,

      physicalDefense:
        player.baseStats
          .physicalDefense +
        bonus.physicalDefense,

      spiritualDefense:
        player.baseStats
          .spiritualDefense +
        bonus.spiritualDefense,

      constitution:
        player.baseStats
          .constitution +
        bonus.constitution,
    },

    qiCultivation: {

      ...cultivation,

      stage: nextStage,

      currentKi: 0,

      requiredKi:
        currentRealm.baseKiRequired *
        nextStage,

      isAtPeak: false,
    },
  };
};