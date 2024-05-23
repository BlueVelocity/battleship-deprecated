import { createBoard } from "../src/modules/gameBoard.js";

test("returns board with tiles", () => {
  expect(createBoard().board[0][0].coordinates).toStrictEqual([0, 0]);
});
