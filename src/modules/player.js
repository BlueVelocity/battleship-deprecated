import { createBoard } from "./gameBoard.js";

const createPlayer = function (name) {
  if (typeof name === "undefined")
    throw new Error("InputError: Undefined name");

  if (typeof name !== "string") throw new Error("InputError: Invalid name");

  const gameBoard = createBoard();

  return { name, gameBoard };
};

export { createPlayer };
