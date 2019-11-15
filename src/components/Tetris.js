import React, { useState } from "react";
//stage constructor (stage custom hook)
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
//will use this to create a clean stage on restart
import { createStage } from "../gameHelpers";
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
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
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
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <div>
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
            <StartButton onClick={startGame} />
          </aside>
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
