import React, { useState } from "react";
//stage constructor (stage custom hook)
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
//will use this to create a clean stage on restart
import { createStage, checkCollision } from "../gameHelpers";
//basic components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  //creating initial states
  const [dropTime, setDroptime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  //importing states //also sending player to the useStage state machine
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //gameover
      if (player.pos.y < 1) {
        console.log("Game Over");
        setGameOver(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callBack={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
