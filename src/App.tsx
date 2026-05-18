import { useEffect } from "react";

import { useGameStore }
from "./store/gameStore";

import { calculateKiGain }
from "./systems/cultivation/gainKi";

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

  return (
    <div>

      <h1>
        {player.name}
      </h1>

      <p>
        Realm:
        {" "}
        {player.qiCultivation.realm}
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

    </div>
  );
}

export default App;