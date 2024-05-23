import { ship } from "../src/modules/ship.js";

test("returns shipType property", () => {
  expect(ship(5).shipType).toBeDefined();
});

test("throws error with invalid ship length input", () => {
  const testCases = [0, "ship", null, undefined];

  testCases.forEach((testCase) => {
    expect(() => ship(testCase)).toThrow("InputError: Invalid ship length");
  });
});

test("returns orientation property", () => {
  const testCases = [1, 2, 3, undefined];

  testCases.forEach((testCase) => {
    expect(ship(1, testCase).orientation).toBeDefined();
  });
});

test("throws error with invalid orientation", () => {
  const testCases = [0, "ship", null, true];

  testCases.forEach((testCase) => {
    expect(() => ship(1, testCase)).toThrow("InputError: Invalid orientation");
  });
});

test("returns length property", () => {
  expect(ship(1).length).toBeDefined();
});
