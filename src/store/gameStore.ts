import { create } from "zustand";

import type { PlayerState }
from "../types/player";

import { createPlayer }
from "../utils/createPlayer";

import { progressCultivation }
from "../systems/cultivation/progression";

import { attemptBreakthrough }
from "../systems/cultivation/breakthrough";

interface GameStore {
  player: PlayerState;

  setPlayer:
    (player: PlayerState) => void;

  gainKi:
    (amount: number) => void;
  
    progressQiCultivation:
    () => void;

    attemptQiBreakthrough:
  () => void;
}

export const useGameStore =
  create<GameStore>((set) => ({

    player: createPlayer({
  name: "Player",

  innateStats: {
    absorption: 1,
    luck: 1,
    comprehension: 1,
    soulTalent: 1,
    fate: 1,
  },
}),

    setPlayer: (player) =>
      set({ player }),

   gainKi: (amount) =>
  set((state) => ({
    player: {
      ...state.player,

      qiCultivation: {
        ...state.player.qiCultivation,

        currentKi:
          state.player.qiCultivation
            .currentKi + amount,
      },
    },
  })),

progressQiCultivation: () =>
  set((state) => ({

    player: {
      ...state.player,

      qiCultivation:
        progressCultivation(
          state.player.qiCultivation
        ),
    },

  })),

  attemptQiBreakthrough: () =>
  set((state) => ({

    player: {
      ...state.player,

      qiCultivation:
        attemptBreakthrough(
        state.player
        ),
    },

  })),
      
}));