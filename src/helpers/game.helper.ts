function getRandomOdds(): number {
  const min = 0.005; // 200
  const max = 0.9; // 1.10
  return Math.floor((1 / (Math.random() * (max - min) + min)) * 100) / 100;
}

function getColorByOdds(value: number): string {
  if (value > 10) return "bg-red-600";
  if (value > 5) return "bg-green-600";
  if (value > 2) return "bg-violet-600";
  return "bg-neutral-800";
}

export const gameHelper = { getRandomOdds, getColorByOdds };
