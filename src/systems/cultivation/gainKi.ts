import type { PlayerState }
from "../../types/player";

export const calculateKiGain = (
  player: PlayerState
): number => {

  const baseGain = 1;

  // Talento de absorción
  const absorptionBonus =
    player.innateStats.absorption;

  // Poder espiritual
  const spiritualPowerBonus =
    1 + (
      player.baseStats.spiritualPower
      * 0.05
    );

  // Soul Talent
  const soulTalentBonus =
    1 + (
      player.innateStats.soulTalent
      * 0.03
    );

  // Bonus por realm
  const realmBonus =
    1 + (
      player.qiCultivation.realm
      * 0.25
    );

  return (
    baseGain *
    absorptionBonus *
    spiritualPowerBonus *
    soulTalentBonus *
    realmBonus
  );
};