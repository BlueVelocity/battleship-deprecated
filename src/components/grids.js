const createGrids = function ({
  playerOneName = "Player1",
  playerTwoName = "Player2",
  gridSize = 10,
} = {}) {
  const playerOne = playerOneName === undefined ? "" : playerOneName;
  const playerTwo = playerTwoName === undefined ? "" : playerTwoName;

  const grids = [playerOne, playerTwo].map((playerName) => {
    const grid = document.createElement("div");
    grid.id = playerName;
    grid.classList = "flex flex-col aspect-square bg-blue-500";

    for (let x = 0; x < gridSize; x++) {
      const row = document.createElement("div");
      row.classList = "flex flex-auto";

      for (let y = 0; y < gridSize; y++) {
        const tile = document.createElement("div");
        tile.id = playerName + "-" + x.toString() + "." + y.toString();
        tile.classList =
          "flex-auto border border-black bg-blue-500 hover:cursor-pointer transition duration-250 linear active:scale-110";
        row.appendChild(tile);
      }

      grid.appendChild(row);
    }

    return grid;
  });

  return { grids };
};

export { createGrids };
