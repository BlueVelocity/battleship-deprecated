const createShip = function (length) {
  if (typeof length !== "number")
    throw new Error("InputError: Expected number for length");

  const validLengthRange = [1, 5];
  if (length < validLengthRange[0] || length > validLengthRange[1])
    throw new Error("InputError: Outside valid range");

  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits === length) return true;
    return false;
  }

  return {
    length,
    hit,
    isSunk,
  };
};

export { createShip };
