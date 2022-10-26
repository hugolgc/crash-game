import { gameHelper } from "./game.helper";

let AMOUNT = 1500,
  BET = 100,
  ODDS = 2,
  TRIES = 100000,
  HISTORY: {
    odds: number;
    amount: number;
  }[] = [];

function bet(): void {
  for (let index = 0; index < TRIES; index++) {
    if (AMOUNT < BET) continue;
    const randomOdds = gameHelper.getRandomOdds();

    AMOUNT -= BET;
    HISTORY.push({ odds: randomOdds, amount: AMOUNT });

    if (ODDS <= randomOdds) AMOUNT += BET * ODDS;
  }
  console.log({ AMOUNT, BET, ODDS, TRIES, HISTORY });
}

export const sandboxHelper = { bet };
