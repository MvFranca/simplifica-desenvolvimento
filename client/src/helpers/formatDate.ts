export const formatDate = (date: Date) => {
  const rawDay = date.getDate().toString();
  const day = rawDay.length > 1 ? rawDay : "0" + rawDay;

  const rawMonth = (date.getMonth() + 1).toString();
  const month = rawMonth.length > 1 ? rawMonth : "0" + rawMonth;

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
