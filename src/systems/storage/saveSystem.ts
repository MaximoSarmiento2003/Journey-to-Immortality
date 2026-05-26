import type {
  PlayerState,
} from "../../types/player";

const SAVE_KEY =
  "wuxia_incremental_save";

export const saveGame = (
  player: PlayerState
): void => {

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(player)
  );
};

export const loadGame = (
): PlayerState | null => {

  const save =
    localStorage.getItem(
      SAVE_KEY
    );

  if (!save) {
    return null;
  }

  try {

    return JSON.parse(
      save
    ) as PlayerState;

  } catch {

    return null;
  }
};

export const deleteSave = (
): void => {

  localStorage.removeItem(
    SAVE_KEY
  );
};