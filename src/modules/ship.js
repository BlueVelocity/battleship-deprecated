const createShip = function (shipLength, orientation = 1) {
  // Orientation 1:up, 2:right, 3:down, 4:left
  if (orientation < 1 || orientation > 4 || typeof orientation !== "number") {
    throw new Error("InputError: Invalid orientation");
  }

  switch (shipLength) {
    case 5:
      return { shipType: "carrier", length: 5, orientation };
    case 4:
      return { shipType: "battleship", length: 4, orientation };
    case 3:
      return { shipType: "cruiser", length: 3, orientation };
    case 2:
      return { shipType: "submarine", length: 2, orientation };
    case 1:
      return { shipType: "destroyer", length: 1, orientation };
    default:
      throw new Error("InputError: Invalid ship length");
  }
};

export { createShip };
