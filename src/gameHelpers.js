export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  //loops through tetromino
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //check if we are on a tetro cell
      if (player.tetromino[y][x] !== 0) {
        if (
          //check we are inside the box height (not bellow)
          !stage[y + player.pos.y + moveY] ||
          //check we are inside the box width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //check if the cell is set to clear (not collided)
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
