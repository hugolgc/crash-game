export interface IGame {
  status: boolean;
  preference: "manual" | "auto";
  amount: number;
  betInput: number;
  betCurrent: number;
  oddsToShow: number;
  oddsLimit: number;
  speedUpdate: number;
  history: number[];
}
