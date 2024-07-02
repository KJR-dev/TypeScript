export function simpleInterest(): number {
  const principal: number = 385000;
  const rate: number = 13.89;
  const time: number = 4;

  return Math.floor((principal * rate * time) / 100);
}

console.log(simpleInterest());