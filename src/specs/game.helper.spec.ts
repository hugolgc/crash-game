import { describe, expect, test } from "vitest";
import { gameHelper } from "../helpers/game.helper";

describe("#getRandomOdds", () => {
  test("returns a decimal number greater than or equal to 1.1 or less than or equal to 200", () => {
    const odds = gameHelper.getRandomOdds();
    expect(odds).toBeGreaterThan(1.1);
    expect(odds).toBeLessThanOrEqual(200);
  });
});

describe("#getColorByOdds", () => {
  test("returns the neutral color", () => {
    expect(gameHelper.getColorByOdds(2)).toBe("bg-neutral-800");
  });
  test("returns the violet color", () => {
    expect(gameHelper.getColorByOdds(4)).toBe("bg-violet-600");
  });
  test("returns the green color", () => {
    expect(gameHelper.getColorByOdds(8)).toBe("bg-green-600");
  });
  test("returns the red color", () => {
    expect(gameHelper.getColorByOdds(16)).toBe("bg-red-600");
  });
});
