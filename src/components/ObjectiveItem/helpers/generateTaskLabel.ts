export const generateTaskLabel = (value: number) => {
  const remainder = value % 10;
  const suffix =
    remainder === 1 ? "а" : remainder >= 2 && remainder <= 4 ? "и" : "";
  return `${value} задач${suffix}`;
};
