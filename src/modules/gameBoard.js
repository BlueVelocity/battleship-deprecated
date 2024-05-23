const createTile = function (x, y) {
  const coordinates = [x, y];
  const occupant = null;
  return { coordinates, occupant };
};

const createBoard = function () {
  const board = (function () {
    const gameBoard = [];

    for (let x = 0; x < 10; x++) {
      const column = [];
      for (let y = 0; y < 10; y++) {
        column.push(createTile(x, y));
      }
      gameBoard.push(column);
    }

    return gameBoard;
  })();

  return { board };
};

export { createBoard };
