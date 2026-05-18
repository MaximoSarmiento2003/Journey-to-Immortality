import { create } from "zustand";

type GameState = {
  qi: number;
  stage: number;

  gainQi: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  qi: 0,
  stage: 1,

  gainQi: () =>
    set((state) => ({
      qi: state.qi + 1,
    })),
}));