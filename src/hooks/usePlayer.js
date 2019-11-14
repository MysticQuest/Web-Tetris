import { useState } from "react";

import { randomTetromino } from "../tetrominoes";

export const usePlayer = () => {
  //this is the initial state for the player
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });

  return [player];
};
