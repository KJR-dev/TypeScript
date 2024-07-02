export const calculateGrossSalary = (
  basic: number,
  hra: number,
  da: number
) => {
  const pf: number = Math.floor(basic * 12) / 100;
  const grossSalary: number = Math.floor(basic + hra + da + pf);
  console.log(`Gross Salary is ${grossSalary}`);
};
