export const occurenceOfDigit = (tempNum: number, tempDigit: number) => {
  let num: number = tempNum;
  let count: number = 0;
  const digit: number = tempDigit;


  while (num > 0) {
    let rem: number = Math.floor(num % 10);
    num /= 10;
    if (rem === digit) {
      count++;
    }
  }

  console.log("Occurence of digit is : ", count);
};
