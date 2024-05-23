import { createShip } from "../src/modules/ship.js";

test("returns shipType property", () => {
  expect(createShip(5).shipType).toBeDefined();
});

test("throws error with invalid ship length input", () => {
  const testCases = [0, "ship", null, undefined];

  testCases.forEach((testCase) => {
    expect(() => createShip(testCase)).toThrow(
      "InputError: Invalid ship length",
    );
  });
});

test("returns orientation property", () => {
  const testCases = [1, 2, 3, undefined];

  testCases.forEach((testCase) => {
    expect(createShip(1, testCase).orientation).toBeDefined();
  });
});

test("throws error with invalid orientation", () => {
  const testCases = [0, "ship", null, true];

  testCases.forEach((testCase) => {
    expect(() => createShip(1, testCase)).toThrow(
      "InputError: Invalid orientation",
    );
  });
});

test("returns length property", () => {
  expect(createShip(1).length).toBeDefined();
});
