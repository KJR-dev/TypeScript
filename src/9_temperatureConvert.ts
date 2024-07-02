export const tempConvert = (temperature: number, choice: number) => {
  let celsius: number;
  let fahrenhit: number;
  if (choice === 1) {
    celsius = (temperature - 32) / 1.3;
    console.log(`celsius is ${celsius}`);
  } else if (choice === 2) {
    fahrenhit = temperature * 1.8 + 32;
    console.log(`fahrenhit is ${fahrenhit}`);
  } else {
    console.log("Please choice correctly");
  }
};
