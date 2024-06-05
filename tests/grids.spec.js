import { createGrids } from "../src/components/grids.js";

test("returns an array containing two dom objects", () => {
  expect(Array.isArray(createGrids().grids)).toBe(true);
  expect(createGrids().grids.length === 2).toBe(true);
  expect(createGrids().grids[0] instanceof Element).toBe(true);
  expect(createGrids().grids[1] instanceof Element).toBe(true);
});

test("grids have default names as ID's if not defined", () => {
  expect(createGrids().grids[0].id).not.toBe("");
  expect(createGrids().grids[1].id).not.toBe("");
});

test("grids accepts name change", () => {
  const testCases = [["1", "2"], ["1"], [, "2"]];

  testCases.forEach((testCase) => {
    const answerOne = testCase[0] === undefined ? "" : testCase[0];
    const answerTwo = testCase[1] === undefined ? "" : testCase[1];
    const gridElement = createGrids({
      playerOneName: answerOne,
      playerTwoName: answerTwo,
    });
    expect(gridElement.grids[0].id).toBe(answerOne);
    expect(gridElement.grids[1].id).toBe(answerTwo);
  });
});

test("grids have x rows of x columns", () => {
  const proposedGridSize = 5;

  for (let i = 0; i < 2; i++) {
    expect(
      createGrids({ gridSize: proposedGridSize }).grids[i].childElementCount ===
        proposedGridSize,
    ).toBe(true);
    expect(
      createGrids({ gridSize: proposedGridSize }).grids[i].childNodes[0]
        .childElementCount === proposedGridSize,
    ).toBe(true);
  }
});

test("grids default to 10 rows by 10 columns", () => {
  for (let i = 0; i < 2; i++) {
    expect(createGrids().grids[i].childElementCount === 10).toBe(true);
    expect(createGrids().grids[i].childNodes[0].childElementCount === 10).toBe(
      true,
    );
  }
});

test("grid tiles contain coordinates as id, format [name]_[x][y]", () => {
  const playerOneName = "Player1";
  const gridElement = createGrids({
    playerOneName,
  });
  const testCases = [
    [1, 1],
    [5, 3],
    [7, 2],
  ];

  testCases.forEach((testCase) => {
    expect(
      gridElement.grids[0].childNodes[`${testCase[0]}`].childNodes[
        `${testCase[1]}`
      ].id,
    ).toBe(
      playerOneName + "_" + testCase[0].toString() + testCase[1].toString(),
    );
  });
});
