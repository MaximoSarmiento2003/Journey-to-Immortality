import { QI_REALMS }
from "../../data/realms";

import type {
  CultivationState,
} from "../../types/cultivation";

export const progressCultivation = (
  cultivation: CultivationState
): CultivationState => {

  const currentRealm =
    QI_REALMS[cultivation.realm];

  if (
    cultivation.currentKi <
    cultivation.requiredKi
  ) {
    return cultivation;
  }

  const nextStage =
    cultivation.stage + 1;

  const remainingKi =
    cultivation.currentKi -
    cultivation.requiredKi;

  return {
    ...cultivation,

    stage: nextStage,

    currentKi: remainingKi,

    requiredKi:
      currentRealm.baseKiRequired *
      nextStage,
  };
};