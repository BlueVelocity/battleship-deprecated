import { createBoard } from "../src/modules/board.js";

let board;

beforeEach(() => {
  board = createBoard();
});

it("returns a 10x10 boardModel", () => {
  expect(board.boardModel.length).toBe(10);
  expect(board.boardModel[0].length).toBe(10);
});
