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

    for (let x = 0; x < gridSize; x++) {
      const row = document.createElement("div");

      for (let y = 0; y < gridSize; y++) {
        const tile = document.createElement("div");
        tile.id = playerName + "_" + x.toString() + y.toString();
        row.appendChild(tile);
      }

      grid.appendChild(row);
    }

    return grid;
  });

  return { grids };
};

export { createGrids };
