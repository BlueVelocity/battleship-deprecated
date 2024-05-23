import { createBoard } from "../src/modules/gameBoard.js";

test("returns board with tiles", () => {
  expect(createBoard().board[0][0].coordinates).toStrictEqual([0, 0]);
});

test("occupy function changes tile occupancy", () => {
  const tempBoard = createBoard();
  const mockShip = { shipType: "carrier", length: 5, orientation: 1 };
  tempBoard.occupy([1, 1], mockShip);
  expect(tempBoard.board[1][1].occupant).toBe(mockShip);
});

test("occupy throws error on invalid coordinate argument", () => {
  const testCases = [undefined, null, "string", 1];
  const mockShip = { shipType: "carrier", length: 5, orientation: 1 };

  testCases.forEach((testCase) => {
    expect(() => createBoard().occupy(testCase, mockShip)).toThrow(
      "InputError: Invalid coordinate argument",
    );
  });
});

test("throws error if coordinates are outside of board", () => {
  const tempBoard = createBoard();
  const mockShip = { shipType: "carrier", length: 5, orientation: 1 };
  const testCases = [
    [-1, 0],
    [0, -1],
    [tempBoard.boardSize + 1, 0],
    [0, tempBoard.boardSize + 1],
  ];

  testCases.forEach((testCase) => {
    expect(() => tempBoard.occupy(testCase, mockShip)).toThrow(
      "SelectionError: Outside of board boundary",
    );
  });
});

test("occupy throws error on invalid occupant argument", () => {
  const testCases = [undefined, null, "string", 1];

  testCases.forEach((testCase) => {
    expect(() => createBoard().occupy([0, 0], testCase)).toThrow(
      "InputError: Invalid occupant argument",
    );
  });
});
