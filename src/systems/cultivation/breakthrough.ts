import { QI_REALMS }
from "../../data/realms";

import type { PlayerState }
from "../../types/player";

import type {
  CultivationState,
} from "../../types/cultivation";

export const attemptBreakthrough = (
  player: PlayerState
): CultivationState => {

  const cultivation =
    player.qiCultivation;

  if (!cultivation.isAtPeak) {
    return cultivation;
  }

  const currentRealm =
    QI_REALMS[cultivation.realm];

  // Bonuses
  const luckBonus =
    player.innateStats.luck
    * 0.01;

  const comprehensionBonus =
    player.innateStats.comprehension
    * 0.015;

  const soulTalentBonus =
    player.innateStats.soulTalent
    * 0.01;

  // Fórmula final
  const successChance =
    0.5 +
    luckBonus +
    comprehensionBonus +
    soulTalentBonus -
    currentRealm.breakthroughDifficulty;

  const success =
    Math.random() < successChance;

  // FAIL
  if (!success) {

    return {
      ...cultivation,

      currentKi:
        cultivation.requiredKi * 0.5,

      isAtPeak: false,
    };
  }

  // REALM BREAKTHROUGH
  if (
    cultivation.stage >=
    currentRealm.stages
  ) {

    const nextRealm =
      QI_REALMS[
        cultivation.realm + 1
      ];

    return {
      ...cultivation,

      realm: nextRealm.level,

      stage: 1,

      currentKi: 0,

      requiredKi:
        nextRealm.baseKiRequired,

      isAtPeak: false,
    };
  }

  // STAGE BREAKTHROUGH
  const nextStage =
    cultivation.stage + 1;

  return {
    ...cultivation,

    stage: nextStage,

    currentKi: 0,

    requiredKi:
      currentRealm.baseKiRequired *
      nextStage,

    isAtPeak: false,
  };
};