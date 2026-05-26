import { useEffect } from "react";

import { useGameStore }
from "./store/gameStore";

import { calculateKiGain }
from "./systems/cultivation/gainKi";

import { getRealmByLevel }
from "./utils/realmsUtils";

import { saveGame ,deleteSave } from "./systems/storage/saveSystem";

function App() {

  const player =
    useGameStore((state) => state.player);

  const gainKi =
    useGameStore((state) => state.gainKi);

  const progressQiCultivation =
    useGameStore(
      (state) =>
        state.progressQiCultivation
    );

    const attemptQiBreakthrough =
  useGameStore(
    (state) =>
      state.attemptQiBreakthrough
  );

  useEffect(() => {

  const interval = setInterval(() => {

    const player =
      useGameStore
        .getState()
        .player;

    const kiGain =
      calculateKiGain(player);

    gainKi(kiGain);

    progressQiCultivation();

  }, 1000);

  return () =>
    clearInterval(interval);

}, [
  gainKi,
  progressQiCultivation
]);

  useEffect(() => {

  const interval =
    setInterval(() => {

      saveGame(player);

    }, 10000);

  return () =>
    clearInterval(interval);

}, [player]);

  const currentRealm =
  getRealmByLevel(
    player.qiCultivation.realm
  );

 return (
  <div>

    <h1>
      {player.name}
    </h1>

    <p>
      Realm:
      {" "}
      {currentRealm?.name}
    </p>

    <p>
      Stage:
      {" "}
      {player.qiCultivation.stage}
    </p>

    <p>
      Current Ki:
      {" "}
      {player.qiCultivation.currentKi
        .toFixed(2)}
    </p>

    <p>
      Required Ki:
      {" "}
      {player.qiCultivation.requiredKi}
    </p>

    <p>
      Status:
      {" "}
      {
        player.qiCultivation.isAtPeak
          ? "Peak"
          : "Cultivating"
      }
    </p>

    <button
      onClick={attemptQiBreakthrough}
    >
      Breakthrough
    </button>

    <button
  onClick={() =>
    saveGame(player)
  }
>
  Save
</button>

<button
  onClick={() => {

    const confirmed =
      window.confirm(
        "Delete save?"
      );

    if (!confirmed) {
      return;
    }

    deleteSave();

    window.location.reload();

  }}
>
  Delete Save
</button>

  </div>
);
}

export default App;