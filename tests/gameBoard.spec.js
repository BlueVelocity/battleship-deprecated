import { createBoard } from "../src/modules/gameBoard.js";

test("returns board with grid", () => {
  expect(createBoard().board[0][0]).toBeDefined();
});

test("place() places ship at specified coordinates", () => {
  const testCases = [2, 3, 4, 5];
  const originCoords = [5, 5];

  testCases.forEach((length) => {
    const testBoard = createBoard(10);
    testBoard.place(length, originCoords);

    for (let i = 0; i < length; i++) {
      expect(
        testBoard.board[originCoords[0]][originCoords[1] + i].occupant,
      ).toBeTruthy();
    }
  });
});

test("place() allows ship rotation", () => {
  //1=up, 2=right, 3=down, 4=left
  const testCases = [1, 2, 3, 4];

  const originCoords = [5, 5];
  const shipLength = 5;
  const lengthOffset = shipLength - 1;

  testCases.forEach((orientation, index) => {
    const testBoard = createBoard(10);
    testBoard.place(shipLength, originCoords, orientation);

    if (index === 0) {
      expect(
        testBoard.board[originCoords[0]][originCoords[1] + lengthOffset]
          .occupant,
      ).toBeTruthy();
    } else if (index === 1) {
      expect(
        testBoard.board[originCoords[0] + lengthOffset][originCoords[1]]
          .occupant,
      ).toBeTruthy();
    } else if (index === 2) {
      expect(
        testBoard.board[originCoords[0]][originCoords[1] - lengthOffset]
          .occupant,
      ).toBeTruthy();
    } else {
      expect(
        testBoard.board[originCoords[0] - lengthOffset][originCoords[1]]
          .occupant,
      ).toBeTruthy();
    }
  });
});

test("place() throws error if passed invalid coordinate data type", () => {
  const testCases = [undefined, null, "string", {}];

  testCases.forEach((invalidCoords) => {
    expect(() => createBoard().place(1, invalidCoords)).toThrow(
      "InputError: Invalid coordinate data type",
    );
  });
});

test("place() throws error if coordinates are outside of range", () => {
  const boardSize = 10;
  const testCases = [
    [-1, -1],
    [-1, 0],
    [11, 11],
    [0, 11],
  ];

  testCases.forEach((coordinates) => {
    expect(() => createBoard(boardSize).place(1, coordinates)).toThrow(
      "InputError: Coordinates outside range",
    );
  });
});

test("place() throws error if coordinate data type is not a number", () => {
  const testCases = [
    ["", 0],
    [{}, 0],
    ["", []],
  ];

  testCases.forEach((invalidCoords) => {
    expect(() => createBoard().place(1, invalidCoords)).toThrow(
      "InputError: Coordinates contain invalid data type",
    );
  });
});

test("place() accepts decimal", () => {
  const testCases = [
    [1.5, 2],
    [1.4, 1],
    [1.6, 2],
  ];

  testCases.forEach((coordinates) => {
    const testBoard = createBoard();
    testBoard.place(1, [coordinates[0], 0]);
    expect(testBoard.board[coordinates[1]][0].occupant).toBeTruthy();
  });
});
