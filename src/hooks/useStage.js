import { useState } from "react";
import { createStage } from "../gameHelpers";

export const useStage = () => {
  //this is the initial state for the stage (the empty clear grid)
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
