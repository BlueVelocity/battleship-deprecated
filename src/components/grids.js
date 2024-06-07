const createGrids = function ({
  playerOneName,
  playerTwoName,
  gridSize = 10,
  tileClickCallback = (x) => console.log(x),
} = {}) {
  const playerOne =
    playerOneName === undefined || playerOneName === ""
      ? "Player1"
      : playerOneName;
  const playerTwo =
    playerTwoName === undefined || playerTwoName === ""
      ? "Player2"
      : playerTwoName;

  const grids = [playerOne, playerTwo].map((name) => {
    const grid = document.createElement("div");
    grid.id = name;
    grid.classList = "flex flex-col aspect-square bg-blue-500";

    for (let x = 0; x < gridSize; x++) {
      const row = document.createElement("div");
      row.classList = "flex flex-auto";

      for (let y = 0; y < gridSize; y++) {
        const tile = document.createElement("div");
        tile.id = name + "-" + x.toString() + "." + y.toString();
        tile.classList =
          "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110";

        tile.addEventListener("click", () =>
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
          }),
        );
        row.appendChild(tile);
      }

      grid.appendChild(row);
    }

    return grid;
  });

  return { grids };
};

export { createGrids };
