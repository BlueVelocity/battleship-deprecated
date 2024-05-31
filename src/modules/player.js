import { createBoard } from "./gameBoard.js";

const createPlayer = function (name, isComputer = false) {
  if (typeof name === "undefined")
    throw new Error("InputError: Undefined name");

  if (typeof name !== "string") throw new Error("InputError: Invalid name");

  if (
    isComputer !== true &&
    isComputer !== 1 &&
    isComputer !== false &&
    isComputer !== 0
  )
    throw new Error("InputError: Expected boolean for player type selection");

  if (isComputer === 1) isComputer = true;
  if (isComputer === 0) isComputer = false;

  const gameBoard = createBoard();

  return { name, isComputer, gameBoard };
};

export { createPlayer };
