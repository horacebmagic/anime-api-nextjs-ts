export const getSeason = (): string => {
  const date: Date = new Date();
  let season: string = "";
  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 2) {
    season = "winter";
  } else if (
    date.getMonth() === 3 ||
    date.getMonth() === 4 ||
    date.getMonth() === 5
  ) {
    season = "spring";
  } else if (
    date.getMonth() === 6 ||
    date.getMonth() === 7 ||
    date.getMonth() === 8
  ) {
    season = "summer";
  } else if (
    date.getMonth() === 9 ||
    date.getMonth() === 10 ||
    date.getMonth() === 11
  ) {
    season = "fall";
  }
  return season;
};

export const seasons: string[] = ["winter", "spring", "summer", "fall"];

export const generateYears = (): number[] => {
  const now = new Date().getUTCFullYear();
  const years: number[] = Array(now - (now - 20))
    .fill("")
    .map((v, idx) => now - idx) as number[];
  return years;
};
