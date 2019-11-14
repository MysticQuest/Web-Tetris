import React from "react";
//basic components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//constructor
import { createStage } from "../gameHelpers";
//styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <div>
          <Stage stage={createStage()} />
          <aside>
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
            <StartButton />
          </aside>
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
