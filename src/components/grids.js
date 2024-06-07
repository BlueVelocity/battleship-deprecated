const styles = {
  grid: "flex flex-col aspect-square bg-blue-500",
  row: "flex flex-auto",
  tile: "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110",
};

const generateGrid = function ({ name, gridSize = 10 } = {}) {
  const grid = document.createElement("div");

  for (let x = 0; x < gridSize; x++) {
    const row = document.createElement("div");
    row.classList = styles.row;

    for (let y = 0; y < gridSize; y++) {
      const tile = document.createElement("div");
      tile.id = name + "-" + x.toString() + "." + y.toString();
      tile.classList = styles.tile;

      row.appendChild(tile);
    }

    grid.appendChild(row);
  }

  return grid;
};

export default function (args) {
  if (typeof args.name !== "string" && args.name !== undefined)
    throw new Error("InputError: Name must be a string");

  const grid = generateGrid(args);
  grid.id = args.name + "-grid";
  grid.classList = styles.grid;

  const gridContainer = document.createElement("div");
  gridContainer.classList = "flex flex-col w-full";
  gridContainer.appendChild(grid);

  return gridContainer;
}
