import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOES } from "../tetrominoes";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOES[type].color}>
    cell
  </StyledCell>
);

export default Cell;
