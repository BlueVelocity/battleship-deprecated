import { createShip } from "./ship.js";

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let i = 0; i < 10; i++) {
      row.push(null);
    }
    grid.push(row);
  }
  return grid;
};

const createBoard = () => {
  const model = generateGrid();
  const ships = [];

  const place = (length, [x, y] = [], orientation = 1) => {
    const ship = createShip(length);

    if (orientation === 1) {
      const yCoords = [];
      for (let i = 0; i < length; i++) {
        if (y + i > 9) return false;
        yCoords.push(y + i);
      }

      ships.push(ship);
      yCoords.forEach((y) => (model[x][y] = ship));
    } else if (orientation === 2) {
      const xCoords = [];

      for (let i = 0; i < length; i++) {
        if (x + i > 9) return false;
        xCoords.push(x + i);
      }

      ships.push(ship);
      xCoords.forEach((x) => (model[x][x] = ship));
    } else if (orientation === 3) {
      const yCoords = [];

      for (let i = 0; i < length; i++) {
        if (y - i < 0) return false;
        yCoords.push(y - i);
      }

      ships.push(ship);
      yCoords.forEach((y) => (model[x][y] = ship));
    } else if (orientation === 4) {
      const xCoords = [];

      for (let i = 0; i < length; i++) {
        if (x - i < 0) return false;
        xCoords.push(x - i);
      }

      ships.push(ship);
      xCoords.forEach((x) => (model[x][x] = ship));
    }

    return true;
  };

  const receiveAttack = ([x, y] = coordinate) => {
    const targetTile = model[x][y];
    if (targetTile !== null) {
      targetTile.hit();
    }
  };

  const allSunk = () => {
    return ships.every((ship) => ship.isSunk());
  };

  return { model, place, receiveAttack, allSunk };
};

export { createBoard };
