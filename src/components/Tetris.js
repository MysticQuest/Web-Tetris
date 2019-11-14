import React, { useState } from "react";
//stage constructor (stage custom hook)
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
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
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
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
            <StartButton />
          </aside>
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
