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

const shipPlacement = (length, [x, y] = [], orientation) => {
  const coords = [];

  if (orientation === 1) {
    for (let i = 0; i < length; i++) {
      if (y + i > 9) {
        coords = shipPlacement(length, [x, 9 - length], orientation);
        break;
      } else {
        coords.push([x, y + i]);
      }
    }
  } else if (orientation === 2) {
    for (let i = 0; i < length; i++) {
      if (x + i > 9) {
        coords = shipPlacement(length, [9 - length, y], orientation);
        break;
      } else {
        coords.push([x + i, y]);
      }
    }
  }

  return coords;
};

const createBoard = () => {
  const model = generateGrid();
  const ships = [];

  const place = (length, [x, y] = [], orientation = 1) => {
    const ship = createShip(length);

    if (orientation === 1) {
      const yCoords = [];
      for (let i = 0; i < length; i++) {
        if (y + i > 9 || model[x][y] !== null) return false;
        yCoords.push(y + i);
      }

      ships.push(ship);
      yCoords.forEach((y) => (model[x][y] = ship));
    } else if (orientation === 2) {
      const xCoords = [];

      for (let i = 0; i < length; i++) {
        if (x + i > 9 || model[x][y] !== null) return false;
        xCoords.push(x + i);
      }

      ships.push(ship);
      xCoords.forEach((x) => (model[x][y] = ship));
    }

    return true;
  };

  const receiveAttack = ([x, y] = coordinate) => {
    const targetTile = model[x][y];
    if (targetTile !== null) {
      targetTile.hit();
      hits.push([x, y]);
    } else {
      misses.push([x, y]);
    }
  };

  const allSunk = () => {
    return ships.every((ship) => ship.isSunk());
  };

  const randomizeShips = () => {
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shipLengths = [2, 3, 3, 4, 5];

    shipLengths.forEach((length) => {
      let cont = true;
      while (cont) {
        const x = randomNumber(0, 9);
        const y = randomNumber(0, 9);
        const orientation = randomNumber(1, 2);

        if (place(length, [x, y], orientation)) cont = false;
      }
    });
  };

  return { model, place, receiveAttack, allSunk, randomizeShips };
};

export { createBoard };
