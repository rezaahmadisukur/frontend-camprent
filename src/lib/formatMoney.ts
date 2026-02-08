export const formatMoney = (money: number) => {
  return `${money.toLocaleString("en-EN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 1
  })}`;
};
