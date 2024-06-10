import { createBoard } from "./board.js";

const createPlayer = (name, type) => {
  if (typeof name !== "string")
    throw new Error("InvalidInput: Expected string");

  if (type !== 0 && type !== 1)
    throw new Error("InvalidInput: Expected type to be binary 0 or 1");

  return { name, type, board: createBoard() };
};

export { createPlayer };
