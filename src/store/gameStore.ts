import { create } from "zustand";

import type { PlayerState }
from "../types/player";

import { createPlayer }
from "../utils/createPlayer";

import { progressCultivation }
from "../systems/cultivation/progression";

interface GameStore {
  player: PlayerState;

  setPlayer:
    (player: PlayerState) => void;

  gainKi:
    (amount: number) => void;
  
    progressQiCultivation:
    () => void;
}

export const useGameStore =
  create<GameStore>((set) => ({

    player: createPlayer("Player"),

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
      
}));