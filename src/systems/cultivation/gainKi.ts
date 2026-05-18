import type { PlayerState }
from "../../types/player";

export const calculateKiGain = (
  player: PlayerState
): number => {

  const baseGain = 1;

  const absorptionBonus =
    player.innateStats.absorption;

  const realmBonus =
    1 + (
      player.qiCultivation.realm * 0.25
    );

  const spiritualPowerBonus =
    1 + (
      player.baseStats.spiritualPower
      * 0.05
    );

  return (
    baseGain *
    absorptionBonus *
    realmBonus *
    spiritualPowerBonus
  );
};