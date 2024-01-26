export const getSlicedText = (text: string): string => {
  return text.length >= 15 ? `${text.slice(0, 35)}...` : text;
};
