const createShip = (length) => {
  if (typeof length !== "number")
    throw new Error("InvalidInput: Expected length as int");

  let totalHits = 0;

  const hit = () => totalHits++;

  const isSunk = () => {
    return totalHits === length ? true : false;
  };

  return {
    hit,
    isSunk,
  };
};

export { createShip };
