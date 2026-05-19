import type {
  CultivationState,
} from "../../types/cultivation";

export const progressCultivation = (
  cultivation: CultivationState
): CultivationState => {

  // Ya está en peak
  if (cultivation.isAtPeak) {
    return cultivation;
  }

  // Llegó al máximo Ki
  if (
    cultivation.currentKi >=
    cultivation.requiredKi
  ) {

    return {
      ...cultivation,

      currentKi:
        cultivation.requiredKi,

      isAtPeak: true,
    };
  }

  return cultivation;
};