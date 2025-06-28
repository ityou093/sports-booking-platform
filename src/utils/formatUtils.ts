export const formatPrice = (price: number): string => {
  return price.toLocaleString('ko-KR');
};

export const formatCurrency = (price: number): string => {
  return `${formatPrice(price)}원`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}; 