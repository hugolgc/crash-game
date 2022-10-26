import { reactive } from "vue";
import { gameHelper } from "../helpers/game.helper";
import type { IGame } from "../interfaces/game.interface";

const game = reactive<IGame>({
  status: true,
  amount: 1500,
  history: [],
  betInput: 25,
  oddsLimit: gameHelper.getRandomOdds(),
  betCurrent: 0,
  oddsToShow: 1,
  preference: "manual",
  speedUpdate: 100,
});

start();

function start(): void {
  game.oddsToShow += 0.01;
  if (game.oddsLimit < game.oddsToShow) {
    stop();
    return;
  }
  if (game.speedUpdate > 1) {
    game.speedUpdate -= 0.25 / (100 / game.speedUpdate);
  }
  setTimeout(() => start(), game.speedUpdate);
}

function stop(): void {
  game.status = false;
  game.betCurrent = 0;
  game.oddsToShow = game.oddsLimit;
  game.history.push(game.oddsToShow);
  if (game.preference === "auto") bet();
  if (game.history.length > 5) game.history = game.history.slice(1);
  setTimeout(() => init(), 10000);
}

function init(): void {
  game.status = true;
  game.oddsLimit = gameHelper.getRandomOdds();
  game.oddsToShow = 1;
  game.speedUpdate = 100;
  start();
}

function bet(): void {
  if (game.betInput > 0 && game.betInput <= game.amount) {
    game.betCurrent = parseFloat(game.betInput.toFixed(2));
    game.amount -= game.betCurrent;
  }
}

function withdraw(): void {
  if (game.betCurrent !== 0) {
    game.amount += parseFloat((game.oddsToShow * game.betCurrent).toFixed(2));
    game.betCurrent = 0;
  }
}

export const gameStore = { game, bet, withdraw };
