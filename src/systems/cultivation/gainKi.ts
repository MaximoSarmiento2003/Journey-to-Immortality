import type { PlayerState }
from "../../types/player";

export const calculateKiGain = (
  player: PlayerState
): number => {

  const baseGain = 1;

  // Absorption
  const absorptionBonus =
    player.innateStats.absorption;

  // Spiritual Power
  const spiritualPowerBonus =
    1 + (
      player.baseStats
        .spiritualPower *
      0.05
    );

  // Soul Talent
  const soulTalentBonus =
    1 + (
      player.innateStats
        .soulTalent *
      0.03
    );

  // Modifiers
  const kiMultiplier =
    player.modifiers
      .kiMultiplier;

  const cultivationSpeed =
    player.modifiers
      .cultivationSpeed;

  return (

    baseGain *

    absorptionBonus *

    spiritualPowerBonus *

    soulTalentBonus *

    kiMultiplier *

    cultivationSpeed
  );
};