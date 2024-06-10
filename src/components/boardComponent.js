const styles = {
  board: "flex flex-col aspect-square bg-blue-500",
  row: "flex flex-auto",
  tile: "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110",
};

const generateTile = ([x, y] = []) => {
  const tile = document.createElement("div");
  tile.classList = styles.tile;

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
  board.id = id;

  for (let y = 0; y < height; y++) {
    const row = generateRow(height, y);
    board.appendChild(row);
  }

  return board;
};

const createBoardComponent = (id) => {
  const component = createBoard(id);

  return { component };
};

export { createBoardComponent };
