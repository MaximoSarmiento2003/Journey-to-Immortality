import { useEffect } from "react";

import { useGameStore }
from "./store/gameStore";

import { calculateKiGain }
from "./systems/cultivation/gainKi";

import { getRealmByLevel }
from "./utils/realmsUtils";

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

      const kiGain =
        calculateKiGain(player);

      gainKi(kiGain);

      progressQiCultivation();

    }, 1000);

    return () => clearInterval(interval);

  }, [
    player,
    gainKi,
    progressQiCultivation,
  ]);

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

  </div>
);
}

export default App;