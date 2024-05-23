const createTile = function (x, y) {
  const coordinates = [x, y];
  const occupant = null;
  return { coordinates, occupant };
};

const createBoard = function (boardSize = 10) {
  const board = (function () {
    const gameBoard = [];

    for (let x = 0; x < boardSize; x++) {
      const column = [];
      for (let y = 0; y < boardSize; y++) {
        column.push(createTile(x, y));
      }
      gameBoard.push(column);
    }

    return gameBoard;
  })();

  const occupy = function (coords, occ) {
    if (
      !Array.isArray(coords) ||
      typeof coords[0] !== "number" ||
      typeof coords[1] !== "number"
    )
      throw new Error("InputError: Invalid coordinate argument");

    if (occ === undefined || occ === null || occ.constructor !== Object)
      throw new Error("InputError: Invalid occupant argument");

    if (
      board[coords[0]] === undefined ||
      board[coords[0]][coords[1]] === undefined
    )
      throw new Error("SelectionError: Outside of board boundary");

    board[coords[0]][coords[1]].occupant = occ;
  };

  return {
    get board() {
      return board;
    },
    get boardSize() {
      return boardSize;
    },
    occupy,
  };
};

export { createBoard };
