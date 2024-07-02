export const sumProductArray = (arr: number[]) => {
  let sum: number = 0;
  let product: number = 1;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    } else {
      product *= num;
    }
  }
  console.log(
    `Sum of Even is ${sum} and Product of odd is ${product === 1 ? 0 : product}`
  );
};
