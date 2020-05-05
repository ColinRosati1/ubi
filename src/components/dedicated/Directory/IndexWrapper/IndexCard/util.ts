export const formatIncome = (income: object): string => {
  const incomes = Object.values(income);
  const maxIncome = !!incomes[1] ? ` - $${incomes[1]}` : '';
  const minIncome = incomes[0] === 'social benefits' ? `${incomes[0]}` : `$${incomes[0]}`;
  const incomeAmount = `${minIncome} ${maxIncome} / ${incomes[2]}`;

  return incomeAmount;
};
