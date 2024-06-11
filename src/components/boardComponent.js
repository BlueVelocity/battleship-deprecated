const styles = {
  board: "flex flex-col aspect-square bg-blue-500",
  row: "flex flex-auto",
  tileEmpty:
    "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110",
  tileShip: "flex-auto border border-black bg-gray-500",
  tileHit: "flex-auto border border-black bg-red-500",
};

const generateTile = ([x, y] = []) => {
  const tile = document.createElement("div");
  tile.classList = styles.tileEmpty;

  tile.id = x.toString() + "," + y.toString();

  return tile;
};

const generateRow = (length, y) => {
  const row = document.createElement("div");
  row.classList = styles.row;

  for (let x = 0; x < length; x++) {
    const tile = generateTile([x, y]);
    row.appendChild(tile);
  }

  return row;
};

const createBoard = (id) => {
  const height = 10;

  const board = document.createElement("div");
  board.classList = styles.board;
  board.id = id;

  for (let y = 0; y < height; y++) {
    const row = generateRow(height, y);
    board.insertBefore(row, board.firstChild);
  }

  return board;
};

const createBoardComponent = (id) => {
  const component = createBoard(id);

  const update = (grid) => {
    const rowList = [];
    component.childNodes.forEach((elem) => rowList.unshift(elem));

    rowList.forEach((row, y) => {
      row.childNodes.forEach((tile, x) => {
        if (grid[x][y] === null) {
          tile.classList = styles.tileEmpty;
        } else if (!grid[x][y].isSunk()) {
          tile.classList = styles.tileShip;
        }
      });
    });
  };

  return { component, update };
};

export { createBoardComponent };
