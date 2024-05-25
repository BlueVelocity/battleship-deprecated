import { createShip } from "../src/modules/ship.js";

test("ship object has length", () => {
  expect(createShip(1).length).toBe(1);
  expect(createShip(5).length).toBe(5);
});

test("ship returns error if length is outside valid range", () => {
  const testCases = [0, 6];

  testCases.forEach((testCase) => {
    expect(() => createShip(testCase)).toThrow(
      "InputError: Outside valid range",
    );
  });
});

test("ship returns error if length is not a number", () => {
  const testCases = [undefined, null, "string", {}, []];

  testCases.forEach((testCase) => {
    expect(() => createShip(testCase)).toThrow(
      "InputError: Expected number for length",
    );
  });
});

test("isSunk() returns false if not sunken", () => {
  const testShip = createShip(5);
  for (let i = 0; i < testShip.length - 1; i++) {
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  }
});

test("isSunk() returns true if sunken", () => {
  const testShip = createShip(5);
  for (let i = 0; i < testShip.length; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBe(true);
});
