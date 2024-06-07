const styles = {
  grid: "flex flex-col aspect-square bg-blue-500",
  row: "flex flex-auto",
  tile: "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110",
};

const generateGrid = function ({
  name,
  gridSize = 10,
  tileClickCallback = (x) => console.log(x),
} = {}) {
  const grid = document.createElement("div");

  for (let x = 0; x < gridSize; x++) {
    const row = document.createElement("div");
    row.classList = styles.row;

    for (let y = 0; y < gridSize; y++) {
      const tile = document.createElement("div");
      tile.id = name + "-" + x.toString() + "." + y.toString();
      tile.classList = styles.tile;

      tile.addEventListener("click", (event) => {
        tileClickCallback({
          name,
          x,
          y,
          hit: function () {
            tile.classList.remove("bg-blue-500");
            tile.classList.add("bg-red-500");
          },
          miss: function () {
            tile.classList.remove("bg-blue-500");
            tile.classList.add("bg-zinc-400");
          },
        });
      });

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
  grid.id = name + "-grid";
  grid.classList = styles.grid;

  return grid;
}
