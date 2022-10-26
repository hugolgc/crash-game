import { describe, expect, test } from "vitest";
import { gameStore } from "../stores/game.store";

describe("#bet", () => {
  test("the betCurrent must be equal to the betInput and withdraw the amount", () => {
    gameStore.game.betCurrent = 0;
    gameStore.game.betInput = 25;
    gameStore.game.amount = 100;
    gameStore.bet();
    expect(gameStore.game.betCurrent).toBe(25);
    expect(gameStore.game.amount).toBe(75);
  });

  test("the betCurrent and amount must not change when the betInput is equal to or less than 0", () => {
    gameStore.game.betCurrent = 0;
    gameStore.game.betInput = -25;
    gameStore.game.amount = 75;
    gameStore.bet();
    expect(gameStore.game.betCurrent).toBe(0);
    expect(gameStore.game.amount).toBe(75);
  });

  test("the betCurrent and amount should not change when the betInput is greater than the amount", () => {
    gameStore.game.betCurrent = 0;
    gameStore.game.betInput = 100;
    gameStore.game.amount = 75;
    gameStore.bet();
    expect(gameStore.game.betCurrent).toBe(0);
    expect(gameStore.game.amount).toBe(75);
  });
});

describe("#withdraw", () => {
  test("the gain is added to the amount and the betCurrent is initialized when the it is not equal to 0", () => {
    gameStore.game.betCurrent = 50;
    gameStore.game.oddsToShow = 2;
    gameStore.game.amount = 100;
    gameStore.withdraw();
    expect(gameStore.game.amount).toBe(200);
    expect(gameStore.game.betCurrent).toBe(0);
  });
  test("le gain n'est pas ajouté au montant quand le betCurrent est égal à 0", () => {
    gameStore.game.betCurrent = 0;
    gameStore.game.oddsToShow = 2;
    gameStore.game.amount = 100;
    gameStore.withdraw();
    expect(gameStore.game.amount).toBe(100);
  });
});
