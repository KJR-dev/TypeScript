export const largestNum = (num1: number, num2: number, num3: number) => {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest number`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest number`);
  } else {
    console.log(`${num3} is largest number`);
  }
};
